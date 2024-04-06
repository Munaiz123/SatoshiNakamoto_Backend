import {response} from "./utils.js"

// exports.handler = async function (event, context){} --> explain difference in .mjs vs .js files

export const handler = async (event) => {
  
  console.log('EVENT ==> ', event)
  
  let msg =  `Hello, ${event.pathParameters.collectionName} !!`
  
  return response(msg, 200)

};
