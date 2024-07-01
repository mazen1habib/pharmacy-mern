import './App.css';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Singleproduct from './Routes/Singleproduct';
import Drags from './Routes/Drags';
import Baby from './Routes/Baby';
import Search from './Routes/Search';

function App() {
  return (
   <Fragment>
<Routes>
<Route path={'/'} element ={<Home/>} />
<Route path={'/products/:id'} element ={<Singleproduct/>}/>
<Route path={'/product/:search'} element ={<Search/>}/>
<Route path={'/Drags'} element={<Drags/>} />
<Route path={'/babycare'} element={<Baby/>} />

</Routes>
   </Fragment>
  );
}

export default App;
