import React, { useContext } from 'react'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'


// Estilos
import "../Styles/Academic.css"

const Academic = () => {

    const {Data} = useContext(ProfesionaInfoContext)

    return (
        <div className="container-academic">

            <article className="image-academic">
                <img src={Data.images.avatar} alt="" />
            </article>

            <article className="information-academic">
                <h4>otra cosita</h4>
            </article>

        </div>
    )
}

export default Academic
