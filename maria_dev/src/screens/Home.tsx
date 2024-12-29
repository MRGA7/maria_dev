/* import React from 'react';
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

export default Home; */

import useWindowSize from "../util/useWindowSize";

const Home = () => {
    const { width } = useWindowSize();

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            {/* Header */}
            <header
                style={{
                    backgroundColor: "#4CAF50",
                    padding: "10px",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <h1>{width > 768 ? "Bienvenido a la Web" : "Bienvenido"}</h1>
            </header>

            {/* Body */}
            <main
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: width > 768 ? "row" : "column",
                    padding: "20px",
                    gap: "20px",
                    backgroundColor: "#f0f0f0",
                }}
            >
                <section
                    style={{
                        flex: 1,
                        backgroundColor: "#ffffff",
                        padding: "15px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h2>Sección 1</h2>
                    <p>Contenido de la primera sección.</p>
                </section>
                <section
                    style={{
                        flex: 1,
                        backgroundColor: "#ffffff",
                        padding: "15px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <h2>Sección 2</h2>
                    <p>Contenido de la segunda sección.</p>
                </section>
            </main>

            {/* Footer */}
            <footer
                style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    textAlign: "center",
                    padding: "10px",
                }}
            >
                <p>{width > 768 ? "Versión web" : "Versión móvil"}</p>
            </footer>
        </div>
    );
};

export default Home;
