import React, { createContext } from "react"
import { Data } from "../DataStore/Data"

const ProfesionaInfoContext = createContext() //esto es el contexto

const ProfesionalProvider = ({children}) => { //esto es el componente proveedor
    
    
    const data = {
        Data
    }
   
    return (
    
        <ProfesionaInfoContext.Provider value={data}>{children}</ProfesionaInfoContext.Provider>
       
    )
}

export { ProfesionalProvider }
export default ProfesionaInfoContext



