import React, { useContext } from 'react'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'
import '../Styles/Home.css'
import HojaDeVida from "../imgs/HojaDeVida.pdf"


const Home = () => {
    const { Data } = useContext(ProfesionaInfoContext)
    
    return (
        <div className="container-home">
            <div className='home-image'>
                <img src={Data.images.avatar} alt="" />
            </div>
            <div className='home-text'>
                <h3>Hello</h3>
                <h3>I am</h3>
                <h3>Kike</h3>
                <a href={HojaDeVida} download="CV Jorge Duje">Descargar CV</a>
            </div>
            <aside className='home-social'>
                <ul>
                    <li><a href={Data.personal.social.twitter} target="_blank" className="fab fa-twitter"></a></li>
                    <li><a href={Data.personal.social.LinkedIn} target="_blank" className="fab fa-linkedin"></a></li>
                    <li><a href={Data.personal.social.instagram} target="_blank" className="fab fa-instagram"></a></li>
                    <li><a href={Data.personal.social.WhatsApp} target="_blank" class="fab fa-whatsapp"></a></li>
                </ul>
            </aside>
        </div>
    )
}

export default Home
