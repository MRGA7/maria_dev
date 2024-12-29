import { configureStore, createSlice } from '@reduxjs/toolkit';

// Tipos para el estado
interface EjemploState {
  value: number;
}

// Estado inicial
const initialState: EjemploState = {
  value: 0,
};

// Crear slice
const ejemploSlice = createSlice({
  name: 'ejemplo',
  initialState,
  reducers: {
    incrementar: (state) => {
      state.value += 1;
    },
    decrementar: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementar, decrementar } = ejemploSlice.actions;

// Configurar el store
export const store = configureStore({
  reducer: {
    ejemplo: ejemploSlice.reducer,
  },
});

// Tipos de ayuda
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;