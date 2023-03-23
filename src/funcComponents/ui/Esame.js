import React from 'react';
import './Esame.css';
import PropTypes from 'prop-types';


function Esame() {
    return (
        <div className="exam">
            <div className='title'>
                <h4>nome esame</h4>
            </div>
            <hr></hr>
            <div className='element'><p>Voto: numero</p></div>
            <div className='element'><p>Data: Data</p></div>
            <div className='element'><p>superato</p></div>


        </div>
    );
};

export default Esame
