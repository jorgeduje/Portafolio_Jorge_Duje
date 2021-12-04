import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'
import '../Styles/Home.css'
import HojaDeVida from "../imgs/HojaDeVida.pdf"


const Home = () => {
    const { Data } = useContext(ProfesionaInfoContext)

    const [flag, setFlag] = useState(false)

    const handlerFlag = ()=>{
        setFlag(!flag)
    }
    
    return (
        <div className="container-home">
            <div className='home-image'>
                <img src={Data.images.avatar} alt="" />
            </div>
            <div className='home-text'>
                <Link to={flag ? "/about" : "#"} onMouseOver={handlerFlag} className={flag ? "is-true" : "is-false"}>{ flag ? "ir al about" : "home"}</Link>
                <h3 className="maquina">Hello Jayder, My Friend..<span className="span">&#160;</span></h3>
                <h3>Jorge</h3>
                <a href={HojaDeVida} download="CV Jorge Duje" className="cv">Descargar CV</a>
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
