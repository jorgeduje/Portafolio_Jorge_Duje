import emailjs from "emailjs-com"
import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "../Styles/FormContact.css"

const FormContact = () => {

    const [ mailSend, setMailSend ] = useState(false)
    const [ text, setText ]  = useState({name:"", email:"", phone:"", textarea:""})
    const [ error, setError] = useState({displayError:""})
    const [ isName, setIsName] = useState(false) 
    const [ isEmail, setIsEmail] = useState(false) 
    const [ isPhone, setIsPhone] = useState(false) 
    const [ isText, setIsText] = useState(false) 




    const handlerDiv = ()=>{
        setMailSend(false)
    }

    const handlerMailSend = ( e )=>{

        e.preventDefault()
        if(text.name.length !== 0){

            setIsName(true)
            
        }else{
            setError({displayError:"Please, complete this area"})
        }
        if(text.email.length !== 0){

            setIsEmail(true)
            
        }else{
            setError({displayError:"Please, complete this area"})
        }
        if(text.phone.length !== 0){

            setIsPhone(true)
            
        }else{
            setError({displayError:"Please, complete this area"})
        }
        if(text.textarea.length !== 0){

            setIsText(true)
            
        }else{
            setError({displayError:"Please, complete this area"})
        }
        
        if(  isName && isEmail && isPhone && isText){

            emailjs.sendForm( "service_1jmny2t", "template_fa476kg", e.target, "user_r5y4dz9U8LPO02jOTjkPZ" )
            .then( res =>{
                console.log(res)
            }).catch(err =>{
                console.log(err)
            })
            setMailSend(true)

            e.target.reset()

            setError({displayError:""})
        }

    }

    let consultation = ` ${text.name} ${text.email} ${text.textarea} `
    const whtasappLink = `https://api.whatsapp.com/send?phone=543544563586&text=${consultation}`


    return (
        <div className='form-container'>

                <h2>Send Me an Email</h2>
        
                    <form onSubmit={handlerMailSend}>
                        <input type="text" placeholder={error.displayError.length >0 ? error.displayError : 'Name'} name="name" onChange={(e)=> setText({...text, name: e.target.value})}/>
                        <input type="email" placeholder={error.displayError.length >0 ? error.displayError : 'Email'} name="email" onChange={(e)=> setText({...text, email: e.target.value})}/>
                        <input type="text" placeholder={error.displayError.length >0 ? error.displayError : 'Phone'} name="phone" onChange={(e)=> setText({...text, phone: e.target.value})}/>
                        <textarea name="" id="" cols="30" rows="10" name="message" placeholder={error.displayError.length >0 ? error.displayError : 'Question:'} onChange={(e)=> setText({...text, textarea: e.target.value})}></textarea>
                        <div className='container-buttons'>
                            <button type='submit'>Email</button>
                           <a href={whtasappLink} target="_blank" className="a">Whastapp</a>
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
