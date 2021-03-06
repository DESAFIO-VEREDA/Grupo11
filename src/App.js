import './App.css';
import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    useEffect(() => {
      Axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {console.log(res)})
    })
  return (
    <div className='container'>
      <Header />
      <SearchBar />
    </div>
     );
}

export default App;
