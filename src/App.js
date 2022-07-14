import React from 'react';
import firebase from 'firebase/App';
import 'firebase/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';


const firebaseConfig = {
  apiKey: "AIzaSyAvPdXCX0hnFdWq0DXfiN_mgASPp3z8HyE",
  authDomain: "mrdonalds-f81ad.firebaseapp.com",
  databaseURL: "https://mrdonalds-f81ad-default-rtdb.firebaseio.com",
  projectId: "mrdonalds-f81ad",
  storageBucket: "mrdonalds-f81ad.appspot.com",
  messagingSenderId: "446077186157",
  appId: "1:446077186157:web:44f87821bdd04a0a400f64"
};

firebase.initializeApp(firebaseConfig);

function App() {

const openItem = useOpenItem();
const orders = useOrders();


  return (
    <>
     <GlobalStyle/>
     <NavBar/>
     <Order {...orders} {...openItem} />
     <Menu {...openItem}/>
     { openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </>
  );
}

export default App;