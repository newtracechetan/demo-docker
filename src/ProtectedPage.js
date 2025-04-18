import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

const ProtectedPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  if (!user) {
    return <div>You must be signed in to access this page.</div>;
  }

  return <div>Welcome, {user.username}!</div>;
};

export default ProtectedPage;
