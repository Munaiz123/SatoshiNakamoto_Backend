import {respond} from "./utils.js"
import {retrieveCollection} from"./processors/CollectionsProcessor.js"

// exports.handler = async function (event, context){} --> explain difference in .mjs vs .js files

export const handler = async (event) => {
  console.log('EVENT => ', event)
  
  if(event.httpMethod === "GET"){
    let {collectionName} = event.pathParameters
    
    
    let dbResponse = await retrieveCollection(collectionName)
    let msg =  `Hello, ${collectionName} !!`
    
    let body = {
      dbResponse,
      msg
    }
    
    return respond(body, 200)
  
    
  }
  
  
  
 

};
