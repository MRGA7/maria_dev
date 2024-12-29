import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import { incrementar, decrementar } from '../store/store';
import { RootState } from '../store/store';

const Home: React.FC = () => {
  const valor = useSelector((state: RootState) => state.ejemplo.value);
  const dispatch = useDispatch();

  return (
    <IonPage>
      <IonContent>
        <h1>Contador: {valor}</h1>
        <IonButton onClick={() => dispatch(incrementar())}>Incrementar</IonButton>
        <IonButton onClick={() => dispatch(decrementar())}>Decrementar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;