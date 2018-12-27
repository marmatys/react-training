import {MemoryRouter} from 'react-router';
import React from 'react';

function withMemoryRouter(component) {
    return (
        <MemoryRouter>{component}</MemoryRouter>
    );
}

export default withMemoryRouter;
