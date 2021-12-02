import React from 'react'
import '../Styles/Personalinfo.css'

const PersonalInformation = ({profilePic, name, lastName, bio}) => {
    return (
        <div className='personal-info-container'>
            <h4>Software Engineer</h4>
            <p>{bio}</p>
        </div>
    )
}

export default PersonalInformation
