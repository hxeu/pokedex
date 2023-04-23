import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {

  return (
    <Card className={`texshadow-sm mb-5 ${pokemon.types[0].type.name}`} style={{ border: 'none', backgroundColor: '#f5f5f5' }}>
      <Link to={`/pokemon/${pokemon.id}`}>
        <Card.Img style={{ width: '8rem' }} src={pokemon.sprites.front_default} variant='top'/>
      </Link>
      <Card.Body className={`rounded text-white ${pokemon.types[0].type.name}`} style={{ backgroundColor: `${pokemon.types[0].type.name}` }}>
        <Link to={`/pokemon/${pokemon.name}`} className='link-name'>
          <Card.Title as='div'><strong>#{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</strong></Card.Title>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Pokemon;
