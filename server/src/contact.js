const AWS = require("aws-sdk");
const {v4} = require("uuid");

module.exports.handler = async (event) => {
  try {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const id = v4();
    const {name, email, msg, contact } = JSON.parse(event.body);

    const newContact = {"id": id ,"name": name, "email": email, "msg": msg, "contact": contact }

    await dynamodb.put({
      TableName: "contactTable",
      Item: newContact}).promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify({ message: "Submitted successfully!", success: true }, null, 2),
    };
  }
  catch (error) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Internal Server Error Occurred!" }, null, 2),
    };
  }
}
