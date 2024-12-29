import React from 'react';
import ReactDOM from 'react-dom/client';
import { IonReactRouter } from '@ionic/react-router';
import { setupIonicReact } from '@ionic/react';
import App from './App';
import './index.css';

// Inicializar Ionic
setupIonicReact();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IonReactRouter>
      <App />
    </IonReactRouter>
  </React.StrictMode>
);