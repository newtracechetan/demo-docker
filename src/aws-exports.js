// src/aws-exports.js
const awsconfig = {
    Auth: {
      region: 'us-east-1', // Replace with your AWS region
      userPoolId: 'your-user-pool-id', // Replace with your Cognito User Pool ID
      userPoolWebClientId: 'your-app-client-id', // Replace with your Cognito App Client ID
      mandatorySignIn: false, // Set to true if you want to force authentication
    },
  };
  
  export default awsconfig;
    