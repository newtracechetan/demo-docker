const awsconfig = {
  Auth: {
    region: 'us-east-1', // your AWS region
    userPoolId: 'us-east-1_xxxxxxxxx', // your user pool ID
    userPoolWebClientId: 'xxxxxxxxxxxxxxxxxxxxxxxxxx', // your client ID
  },
  // You can add other categories here, like API, Storage, etc.
};

export default awsconfig;



// // src/aws-exports.js
// const awsconfig = {
//     Auth: {
//       region: 'us-east-1', // Replace with your AWS region
//       userPoolId: 'us-east-1_fk2JgrDSX', // Replace with your Cognito User Pool ID
//       mandatorySignIn: false, // Set to true if you want to force authentication
//     },
//   };
  
//   export default awsconfig;
      