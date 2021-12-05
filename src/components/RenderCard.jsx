import React, { useState } from 'react'

import "../Styles/RenderCard.css"

const RenderCard = ( {name, stage, description, technologies, url1, url2, image, id} ) => {

    const [seeMore, setSeeMore] = useState(false)

    const handleSeeMore = ()=>{
        setSeeMore(!seeMore)
    }

    return (
        <div className="card">
            <img src={image} alt="" />
           {
               seeMore ? "" :  <h2>{name}</h2>
           }
            {
                seeMore ? "" : <h5>{technologies}</h5>
            }
            {
                seeMore ? "" : <h5>{stage}</h5>
            }
           {
               seeMore?  <p>
                {description} 
                    <i 
                        onClick={handleSeeMore}
                        className="fas fa-undo-alt">    
                    </i>
                </p> : <h4 onClick={handleSeeMore}  className="cursor">See More</h4>
           }
            <div className="container-links">
                <a href={url1}>Deploy</a>
                <a href={url2}>Github</a>
            </div>
        </div>
    )
}

export default RenderCard
