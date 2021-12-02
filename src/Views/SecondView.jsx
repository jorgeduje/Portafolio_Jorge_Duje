import React, { useContext } from 'react';

import ProfesionaInfoContext from '../Context/ProfesionalInfoContext';

const SecondView = () => {
   const data = useContext(ProfesionaInfoContext)
   console.log(data)
    return (
        <div>
            <h4>Greetings from second view</h4>
        </div>
    )
}

export default SecondView
