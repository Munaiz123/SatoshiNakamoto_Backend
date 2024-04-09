import {respond} from "./utils.js"
import CollectionsProcessor from"./processors/CollectionsProcessor.js"

// exports.handler = async function (event, context){} --> explain difference in .mjs vs .js files

export const handler = async (event) => {
  
  if(event.httpMethod === "GET"){
    let symbol = event.pathParameters.collectionSymbol
    return respond(await CollectionsProcessor.retrieveCollection(symbol),200)
  }
  
  else if(event.queryStringParameters.fetchCollection !== undefined){
    await CollectionsProcessor.fetchCollectionFromAPI(event.queryStringParameters.fetchCollection)
  }
}
  