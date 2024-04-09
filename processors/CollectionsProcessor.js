const query = require('/opt/executeQuery'); // takes a single string
const sql = require('../sql/CollectionsSQL.js');
const axios = require('axios')

async function retrieveCollection(collectionSymbol){    
    
    let queryString = sql.fetchCollectionBySymbol(collectionSymbol)
    
    let [error, response] = await query(queryString)

    if(error) console.log('ERROR Fetching Employee - ', error)
    else if(response.command === 'SELECT') response.rows
    
}
async function fetchCollectionFromAPI(collectionSymbol){
    // storeCollectionFromAPI - potential function name
    
    let url = `${process.env.MAGIC_EDEN_BASE_URL}/ord/btc/tokens?collectionSymbol=${collectionSymbol}`
    let headers = {accept: 'application/json', Authorization: `Bearer ${process.env.MAGIC_EDEN_API_TOKEN}`}
    
    
    try{
        let {data} =  await axios.get(url, {headers})
        
        // can probably refactor better since they're both array methods
        let bulkInsertSQLScript = data.tokens.map( tokenObj =>{
            
            return{
                inscription_number:tokenObj.inscriptionNumber,
                image_url: tokenObj.contentPreviewURI,
                satoshi_price: tokenObj.listedPrice,
                btc_price: tokenObj.listedPrice/ 100000000,
                token_name: tokenObj.displayName,
                collection_symbol: tokenObj.collectionSymbol,
                collection_name:tokenObj.collection.name
            }
        })
        .reduce((sql, item, index) => { //chatGPT helped here
            
            const values = Object.values(item).map(value => typeof value === 'string' ? `'${value}'` : value).join(', ');
            const row = `(${values})`;
            return index === 0 ? `INSERT INTO Collections (${Object.keys(item).join(', ')}) VALUES ${row}` : `${sql},\n${row}`;
        }, '');
        
        
        let [error, response] = await query(bulkInsertSQLScript)
        if(error) console.error('ERROR Fetching Employee - ', error)
        
    }catch(error){
        console.error('MAGIC EDEN API CALL NOT WORKING - ', error)
    }
    
}


module.exports = { retrieveCollection, fetchCollectionFromAPI }
