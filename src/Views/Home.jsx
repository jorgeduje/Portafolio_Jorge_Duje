import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Typical from "react-typical"
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'
import '../Styles/Home.css'
import HojaDeVida from "../imgs/HojaDeVida.pdf"
import Icon from '../components/Icon'


const Home = () => {
    const { Data, width } = useContext(ProfesionaInfoContext)
    const navigate = useNavigate()

    const [flag, setFlag] = useState(false)
    const [type, setType] = useState(true)

    const handlerFlag = ()=>{
        setFlag(!flag)
        setType(!type)
    }
    
    return (
        <div className="container-home">
            <div className='home-image'>
                <img src={Data.images.avatar} alt="" />
            </div>
            <div className='home-text'>
                {
                    width > 650 ?
                        flag ? 
                        <h2 onMouseLeave={handlerFlag} onClick={()=>navigate("/about")}>About Me</h2> 
                        : 
                        <h2 onMouseEnter={handlerFlag}>Home</h2>
                        :
                    <h2 onClick={()=>navigate("/about")}>Click Here to navigate</h2>
                }
                <h3>My name is Jorge Duje</h3>
               {
                   type ?
                <p>
                   I am {" "}
                   <Typical 

                       loop={Infinity}
                       wrapper="b"
                       steps={[
                           "a web developer",
                           1500,
                           "a devoted family man",
                           1500,
                           "into going fishing",
                           1500,
                           "a team member",
                           1500
                       ]}

                   />
               </p> : 
                <p>
               
                    <Typical 

                        wrapper="b"
                        steps={[
                            "Welcome to my Website",
                            2500,
                        
                        ]}

                    />
                </p>
               }

                <Link to="/contact" className='cv'>Contact me</Link>
                <a href={HojaDeVida} download="CV Jorge Duje" className="cv">Download CV</a>
            </div>
            <aside className='home-social'>
                <ul>
                    <li><a href={Data.personal.social.twitter} target="_blank" rel="noreferrer" className="fab fa-twitter"></a></li>
                    <li><a href={Data.personal.social.LinkedIn} target="_blank" rel="noreferrer" className="fab fa-linkedin"></a></li>
                    <li><a href={Data.personal.social.instagram} target="_blank" rel="noreferrer" className="fab fa-instagram"></a></li>
                    <li><a href={Data.personal.social.WhatsApp} target="_blank" rel="noreferrer" className="fab fa-whatsapp"></a></li>
                    <li><Link to="/contact"><Icon /></Link></li>
                </ul>
            </aside>
        </div>
    )
}

export default Home
