import React from 'react'

import "../Styles/RenderCard.css"

const RenderCard = ( {name, stage, description, technologies, url1, url2, image, id} ) => {
    return (
        <div className="card">
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h5>{stage}</h5>
            <h4>{description}</h4>
            <h5>{technologies}</h5>
            <div className="container-links">
                <a href={url1}>Deploy</a>
                <a href={url2}>github repositorie</a>
            </div>
        </div>
    )
}

export default RenderCard
