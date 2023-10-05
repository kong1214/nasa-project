import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthUserContextProvider } from './Context/AuthUserContext';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ModalProvider, Modal } from './Context/Modal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="325756238748-aae5l82g9frot63p2nau2ofpvdp1nfvo.apps.googleusercontent.com">
      <ModalProvider>
        <AuthUserContextProvider>
          <App />
          <Modal />
        </AuthUserContextProvider>
      </ModalProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
