import React from 'react';
import { signOut } from '@aws-amplify/auth'; // ✅ Import the specific function

const Navbar = () => {
  const handleSignOut = async () => {
    try {
      await signOut(); // ✅ Use the modular function
      window.location.reload(); // Optional: force refresh or navigate to login
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav>
      <button onClick={handleSignOut}>Sign Out</button>
    </nav>
  );
};

export default Navbar;



// import React from 'react';
// import { Auth } from '@aws-amplify/auth';




// const Navbar = () => {
//   const handleSignOut = async () => {
//     try {
//       await Auth.signOut();
//       window.location.reload(); // Optional: force refresh or navigate to login
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };

//   return (
//     <nav>
//       <button onClick={handleSignOut}>Sign Out</button>
//     </nav>
//   );
// };

// export default Navbar;
