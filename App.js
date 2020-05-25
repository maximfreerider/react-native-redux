import React from 'react';
import Main from "./components/Main"
import {Provider} from 'react-redux'
import {ConfigureStore} from "./redux/configureStore";
import {PersistGate} from "redux-persist/es/integration/react";
import {Loading} from "./components/Loading/Loading";

const {persistor, store} = ConfigureStore();

export default function App() {
  console.disableYellowBox=true
  return (
      <Provider store={store}>
          <PersistGate persistor={persistor} loading={<Loading/>}>
              <Main/>
          </PersistGate>
      </Provider>
  );
}
