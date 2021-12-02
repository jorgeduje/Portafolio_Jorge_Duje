import React, { useContext } from 'react'
import '../Styles/Header.css'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'



const Header = () => {
    const { Data } = useContext(ProfesionaInfoContext)

    return (
        <>
            <nav className='header-container'>
                <h3>Kike Vanegas</h3>
                <ul>
                    <li><a href={Data.personal.social.facebook} target="_blank" className="fab fa-facebook-f"></a></li>
                    <li><a href={Data.personal.social.twitter} target="_blank" className="fab fa-twitter"></a></li>
                    <li><a href={Data.personal.social.YouTuBe} target="_blank" className="fab fa-youtube"></a></li>
                    <li><a href={Data.personal.social.LinkedIn} target="_blank" className="fab fa-linkedin"></a></li>
                    <li><a href={Data.personal.social.instagram} target="_blank" className="fab fa-instagram"></a></li>
                    <li><a href={Data.personal.social.WhatsApp} target="_blank" class="fab fa-whatsapp"></a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header
