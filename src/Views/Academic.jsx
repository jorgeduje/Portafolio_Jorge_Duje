import React, { useContext } from 'react'
import ProfesionaInfoContext from '../Context/ProfesionalInfoContext'
import { Link } from 'react-router-dom'


// Estilos
import "../Styles/Academic.css"

const Academic = () => {

    const {Data} = useContext(ProfesionaInfoContext)

    return (
        <div className="container-academic">
            
           
            <div className='academic-information'>
                    <ul>
                        <div>
                            <span>
                            <i class="fas fa-award"></i>
                            </span>
                            <h4>Bachelor Degree</h4>
                            <h6>Inicio: 12/21/2020 / finalizacion: 12/12/3123</h6>
                        </div>
                        <div>
                            <span>
                            <i class="fas fa-award"></i>
                            </span>
                            <h4>Bachelor Degree</h4>
                            <h6>Inicio: 12/21/2020 / finalizacion: 12/12/3123</h6>
                        </div>
                        <div>
                            <span>
                            <i class="fas fa-award"></i>
                            </span>
                            <h4>Bachelor Degree</h4>
                            <h6>Inicio: 12/21/2020 / finalizacion: 12/12/3123</h6>
                        </div>
                        <div>
                            <span>
                            <i class="fas fa-award"></i>
                            </span>
                            <h4>Bachelor Degree</h4>
                            <h6>Inicio: 12/21/2020 / finalizacion: 12/12/3123</h6>
                        </div>
                        <div>
                            <span>
                            <i class="fas fa-award"></i>
                            </span>
                            <h4>Bachelor Degree</h4>
                            <h6>Inicio: 12/21/2020 / finalizacion: 12/12/3123</h6>
                        </div>
                    </ul>
                </div>
                <Link to="/about" className="backk"><i class="fas fa-arrow-left"></i></Link>
          
        </div>
    )
}

export default Academic

