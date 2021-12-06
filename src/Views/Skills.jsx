import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Skills.css"

const Skills = () => {
    return (
        <div className="container-skills">
            <h2>Welcome to skills</h2>
            <Link to="/about" className="back"><i class="fas fa-arrow-left"></i></Link>
        </div>
    )
}

export default Skills
