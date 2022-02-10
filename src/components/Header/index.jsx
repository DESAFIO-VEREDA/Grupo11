import React from 'react';
import background from '../../asssets/Top.png';
import pokeball from '../../asssets/pokeball-png.png';
import './style.scss';

const Header = () => {
    return (
        <div className='header'>
            <img className="bg-double" src={background} alt="Pokedex"/>
            <img className="bg-pokeball" src={pokeball} alt="Pokedex"/>
        </div>
    )
}

export default Header;