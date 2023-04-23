import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center mt-5' style={{ height: '100vh' }}>
            <Spinner animation="border" variant="primary" role='status' style={{ height: '5rem', width: '5rem' }}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <div className='mt-3 fw-bold fs-5 text-primary'>Loading Pokemons...</div>
        </div>
    )
}

export default Loader;
