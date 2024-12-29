import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';
import Home from './screens/Home';

const App: React.FC = () => (
  <IonApp>
    <IonRouterOutlet>
      <Route exact path="/" component={Home} />
    </IonRouterOutlet>
  </IonApp>
);

export default App;