import {respond} from "./utils.js"
import CollectionsProcessor from"./processors/CollectionsProcessor.js"

// exports.handler = async function (event, context){} --> explain difference in .mjs vs .js files

export const handler = async (event) => {
  
  if(event.httpMethod === "GET" ){
    let {collectionName} = event.pathParameters
    
    
    let dbResponse = await CollectionsProcessor.retrieveCollection(collectionName);
    let msg =  `Hello, ${collectionName} !!`
    
    let body = {
      dbResponse,
      msg
    }
    
    return respond(body, 200)
  } 
  
  
  else if(event.queryStringParameters.fetchCollection !== undefined) await CollectionsProcessor.fetchCollectionFromAPI(event.queryStringParameters.fetchCollection);
}
  