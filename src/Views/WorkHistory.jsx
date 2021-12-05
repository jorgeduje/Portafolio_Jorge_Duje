import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import "../Styles/WorkHistory.css"

import ProfesionaInfoContext from "../Context/ProfesionalInfoContext"
import RenderCard from '../components/RenderCard'

const WorkHistory = () => {

    const {Data} = useContext(ProfesionaInfoContext)

  
   

    return (
        <div className="container-history">
            <h2>Work History</h2>

            <div className="container-cards">
                {
                    Data?.workHistory.map(( value )=>
                        <RenderCard 
                            key = {value.id}
                            id = {value.id}
                            name = {value.name}
                            stage = {value.stage}
                            description = {value.description}
                            technologies = {value.technologies}
                            url1 = {value.url1}
                            url2 = {value.url2}
                            image = {value.image}
                        />
                    )
                }
            </div>


            <Link to="/about" className="back"><i class="fas fa-arrow-left"></i></Link>
        </div>
    )
}

export default WorkHistory
