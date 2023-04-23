import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, ListGroup, ProgressBar } from "react-bootstrap";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemon();
  }, [id]);

  const renderStats = () => {
    return (
      <>
        <h3>Stats</h3>
        {pokemon.stats.map((stat) => (
          <div key={stat.stat.name}>
            <div className="d-flex justify-content-between align-items-center">
              <div>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</div>
              <div>{stat.base_stat}</div>
            </div>
            <ProgressBar variant="success" now={stat.base_stat} max={255} />
          </div>
        ))}
      </>
    );
  };

  const renderPokemon = () => {
    return (
      <>
        <Card.Title>
          <h1 class="display-4">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h1>
          <span className="badge bg-secondary">#{pokemon.id}</span>
        </Card.Title>
        <div className="d-flex justify-content-center">
        Classic
          <Card.Img
            style={{ width: "20rem" }}
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          /> Shiny
          <Card.Img
            style={{ width: "20rem" }}
            src={pokemon.sprites.other["official-artwork"].front_shiny}
            alt={pokemon.name}
          /> 
        </div>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Types:</strong>{" "}
            {pokemon.types.map((type) => type.type.name).join(", ")}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Height:</strong> {pokemon.height} cm
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Weight:</strong> {pokemon.weight} kg
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Abilities:</strong>{" "}
            {pokemon.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
          </ListGroup.Item>
          
        </ListGroup>
        {renderStats()}
      </>
    );
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={8}>
          <Card>
            {loading ? <Card.Body>Loading...</Card.Body> : renderPokemon()}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PokemonPage;
