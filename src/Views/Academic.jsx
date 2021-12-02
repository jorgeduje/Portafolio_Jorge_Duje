import React, { useContext, useState } from 'react'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'


// Imagenes 


// Estilos
import "../Styles/Academic.css"

const Academic = () => {

    const {Data} = useContext(ProfesionaInfoContext)

    return (
        <div className="container-academic">

            <div className="zoom">
                {/* <img src={Data.} alt="" id="img1"/> */}
                <img src="" alt="" id="img2"/>
                <img src="" alt="" id="img3"/>

            </div>
         
        </div>
    )
}

export default Academic
