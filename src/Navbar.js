import React from 'react';
import { Auth } from 'aws-amplify';

const Navbar = () => {
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
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
