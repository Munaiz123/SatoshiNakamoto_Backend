 
const headers = {'Access-Control-Allow-Origin': '*','Content-Type': 'application/json', 'Access-Control-Allow-Methods':'*'}
const multiValueHeaders = { "Access-Control-Allow-Headers": ['Content-Type','X-Amz-Date','Auth,X-Api-Key','X-Amz-Security-Token']}

const response = (body, statusCode) =>({
    
    isBase64Encoded: false,
    statusCode,
    multiValueHeaders,
    headers,
    body:JSON.stringify(body)
})
  
  
module.exports = {
    response
}
  