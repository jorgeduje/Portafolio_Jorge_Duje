import React from 'react'
import { useNavigate } from 'react-router-dom'

const Icon = () => {

    const navigate = useNavigate()

    const handlerShowIcon = ()=>{
      
        navigate('/contact')
    }

    return (
        <div className="icon">
       
            <i onClick={handlerShowIcon} className="far fa-envelope"></i>
        
    </div>
    )
}

export default Icon


