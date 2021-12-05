import React from 'react'
import { Link } from 'react-router-dom'


// Estilos
import "../Styles/Academic.css"

const Academic = () => {

    

    return (
        <div className="container-academic">
            
           
            <div className='academic-information'>
                    <ul>
                        <div>
                            <span>
                            <i className="fas fa-award"></i>
                            </span>
                            <h4>Html and modern css</h4>
                            <h6>Date: January / 2020</h6>
                        </div>
                        <div>
                            <span>
                            <i className="fas fa-award"></i>
                            </span>
                            <h4>University Javascript</h4>
                            <h6>Date: March / 2020</h6>
                        </div>
                        <div>
                            <span>
                            <i className="fas fa-award"></i>
                            </span>
                            <h4>React js, Redux</h4>
                            <h6>Date: August / 2020</h6>
                        </div>
                        <div>
                            <span>
                            <i className="fas fa-award"></i>
                            </span>
                            <h4>Node.js</h4>
                            <h6>Date: October / 2021</h6>
                        </div>
                        <div>
                            <span>
                            <i className="fas fa-award"></i>
                            </span>
                            <h4>Computer science</h4>
                            <h6>Date: Currently</h6>
                        </div>
                    </ul>
                </div>
                <Link to="/about" className="backk"><i class="fas fa-arrow-left"></i></Link>
          
        </div>
    )
}

export default Academic

