import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ProtectedPage from './ProtectedPage';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </Router>
  );
}

export default App;




// // App.js

// import { useAuth } from "react-oidc-context";

// function App() {
//   const auth = useAuth();

//   const signOutRedirect = () => {
//     const clientId = "228han1i9rul003a3s8bhtu10f";
//     const logoutUri = "<http://localhost:3000/>";
//     const cognitoDomain = "https://<user pool domain>";
//     window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
//   };

//   if (auth.isLoading) {  
//     return <div>Loadings...</div>;
//   }

//   if (auth.error) {
//     return <div>Encountering error... {auth.error.message}</div>;
//   }

//   if (auth.isAuthenticated) {
//     return (
//       <div>
//         <pre> Hello: {auth.user?.profile.email} </pre>
//         <pre> ID Token: {auth.user?.id_token} </pre>
//         <pre> Access Token: {auth.user?.access_token} </pre>
//         <pre> Refresh Token: {auth.user?.refresh_token} </pre>

//         <button onClick={() => auth.removeUser()}>Sign out</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <button onClick={() => auth.signinRedirect()}>Sign in</button>
//       <button onClick={() => signOutRedirect()}>Sign out</button>
//     </div>
//   );
// }

// export default App;