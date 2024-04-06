
// exports.handler = async function (event, context){} --> explain difference in .mjs vs .js files

export const handler = async (event) => {
    // TODO implement
    console.log('EVENT ==> ', event)
    const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
  };
  