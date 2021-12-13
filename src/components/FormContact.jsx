import emailjs from "emailjs-com"
import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "../Styles/FormContact.css"

const FormContact = () => {

    const [ mailSend, setMailSend ] = useState(false)

    const handlerDiv = ()=>{
        setMailSend(false)
    }

    const handlerMailSend = ( e )=>{
        e.preventDefault()
        emailjs.sendForm( "service_1jmny2t", "template_fa476kg", e.target, "user_r5y4dz9U8LPO02jOTjkPZ" )
        .then( res =>{
            console.log(res)
        }).catch(err =>{
            console.log(err)
        })

        e.target.reset()
        setMailSend(true)
    }


    return (
        <div className='form-container'>

                <h2>Send Me an Email</h2>
        
                    <form onSubmit={handlerMailSend}>
                        <input type="text" placeholder='Name' name="name"/>
                        <input type="text" placeholder='Email' name="email"/>
                        <input type="text" placeholder='Phone' name="phone"/>
                        <textarea name="" id="" cols="30" rows="10" name="message"></textarea>
                        <div className='container-buttons'>
                            <button type='submit'>Email</button>
                            <button>Whatsapp</button>
                        </div>
                    </form> 

                    <div className={mailSend ? "modal" : "modal2"}>
                        <h2>Enviado exitosamente</h2>
                        <h3>Gracias por contactarte conmigo, respodere a tu consulta a la brevedad</h3>
                    </div>

                    {
                        mailSend ? 
                        <div className="transparente" onClick={handlerDiv}></div>
                        :
                        ""
                    }

            <Link to="/" className="back"><i class="fas fa-arrow-left"></i></Link>
        </div>
    )
}

export default FormContact
