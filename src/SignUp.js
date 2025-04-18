import React, { useState } from 'react';
import { signUp } from '@aws-amplify/auth'; // ✅ Modular import

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      const { userId, nextStep } = await signUp({
        username: email, // Email as username
        password,
        options: {
          userAttributes: {
            email, // Adding email as a user attribute
          },
        },
      });

      console.log('Sign-up successful:', userId, nextStep);
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message || 'Something went wrong during sign-up.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignUp;



// import React, { useState } from 'react';
// import { Auth } from 'aws-amplify';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignUp = async () => {
//     try {
//       const { user } = await Auth.signUp({
//         username: email, // Email as username
//         password: password,
//         attributes: {
//           email, // Adding email as an attribute
//         },
//       });
//       console.log('Sign-up successful:', user);
//     } catch (error) {
//       console.error('Error signing up:', error);
//       setError(error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignUp}>Sign Up</button>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default SignUp;
