import React from 'react';
import './style.scss';
import lupa from '../../asssets/lupa.png';

const SearchBar = () => {
    return (
        <div className="sb-container">
            <input className="search-bar" />
            <img className="lupa" src={lupa} alt="pesquisar" />
        </div>
    )
}

export default SearchBar;