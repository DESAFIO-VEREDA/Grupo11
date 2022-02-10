import './App.css';
import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';

import { Button, Card } from 'react-bootstrap';

function App() {
  const [pokelist, setPokeList] = useState([]);

  useEffect(() => {
    Axios.get("https://pokeapi.co/api/v2/pokemon/1")
      .then((res) => {
        setPokeList([res.data]);
        console.log(res.data)
      })
  })
  return (
    <div className='container'>
      {/* <Header /> */}

      <h1>Pokédex</h1>

      {pokelist.map((data) => (
        <React.Fragment key={data.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.sprites.front_default} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                {data.type}
              </Card.Text>
              <Button variant="primary">Detalhes</Button>
            </Card.Body>
          </Card>
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
