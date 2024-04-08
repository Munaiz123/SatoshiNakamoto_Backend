const query = require('/opt/executeQuery'); // takes a single string
const sql = require('../sql/CollectionsSQL.js');
const {apiHeaders} = require("utils")
const axios = require('axios')

async function retrieveCollection(sub){
    
    
    let queryString = sql.fetchCollection('cats')
    
    let [error, response] = await query(queryString)

    if(error) console.log('ERROR Fetching Employee - ', error)

     else if(response.command === 'SELECT') {
        
        console.log("Finished fetching collection =>> ", response.rows)
        return response.rows

        
    }
    
}

function fetchCollectionFromAPI(collectionSymbol){
    
    const options = {
        method: 'GET',
        url: 'https://api-mainnet.magiceden.dev/v2/ord/btc/tokens?collectionSymbol=omb',
        headers: {accept: 'application/json', Authorization: 'Bearer 50501856-572d-4d61-84d7-df5dd83259cc'}
        
    };

    axios.request(options).then(function (response) {
        
        console.log(response);
        return response
        
    })
    .catch(function (error) {
        console.error(error);
        
    });
    
}


module.exports = { retrieveCollection, fetchCollectionFromAPI }


// axios.get('https://api.github.com/user', {
//   headers: {
//     'Authorization': `token ${access_token}`
//   }
// })
// .then((res) => {
//   console.log(res.data)
// })
// .catch((error) => {
//   console.error(error)
// })
