const query = require('/opt/executeQuery'); // takes a single string
const sql = require('../sql/CollectionsSQL.js');


async function retrieveCollection(sub){
    
    let queryString = sql.fetchCollection('cats')
    
    let [error, response] = await query(queryString)

    if(error) console.log('ERROR Fetching Employee')

     else if(response.command === 'SELECT') {
        
        console.log("Finished fetching collection =>> ", response.rows)
        return response.rows

        
    }
    
}


module.exports = { retrieveCollection }