import React from 'react';

import './styles.css'

export default function Header(){
    return(
        <header>
            <h1>Clínica Yama</h1>
            <div className='menu'>
                <h3>Pacientes</h3>
                <h3>Receitas</h3>
                <h3>Consultas</h3>
                <h3>Bands</h3>
            </div>
        </header>
    )
}