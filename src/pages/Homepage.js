import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Pagination } from 'react-bootstrap';

// Components
import Pokemon from '../components/Pokemon';
import Loader from '../components/Loader';

const Homepage = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(20);

    const getPokemonList = async () => {
        let pokemonArray = [];
        for(let i = 1; i <= 1010; i ++){
            pokemonArray.push(await getPokemonData(i));
        }
        setPokemon(pokemonArray);
        setLoading(false);
    }

    const getPokemonData = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return res;
    }

    useEffect(() => {
        getPokemonList();
    })

    // Get current pokemons
    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Determine the number of pages to show in the pagination
    const pageRange = 5;
    const totalPages = Math.ceil(pokemon.length / pokemonsPerPage);
    const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    const endPage = Math.min(totalPages, startPage + pageRange - 1);

    return (
        <>
        {loading ? (
            <Loader />
        ) : (
            <>
            <Row>
                {currentPokemons.map( p =>(
                    <Col key={p.data.name} xs={12} sm={12} md={6} lg={4} xl={3}>
                        <Pokemon pokemon={p.data} />
                    </Col>
                ))}
            </Row>
            <div className="mt-3 d-flex justify-content-center">
                <Pagination>
                    {startPage > 1 && <Pagination.Prev onClick={() => paginate(startPage - 1)} />}
                    {[...Array(endPage - startPage + 1)].map((_, i) => (
                        <Pagination.Item maxButtons={5} key={startPage + i} active={startPage + i === currentPage} onClick={() => paginate(startPage + i)}>
                            {startPage + i}
                        </Pagination.Item>
                    ))}
                    {endPage < totalPages && <Pagination.Next onClick={() => paginate(endPage + 1)} />}
                </Pagination>
            </div>
            </>
        )}
        </>
    )
}

export default Homepage;