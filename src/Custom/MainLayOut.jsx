import React from 'react'
import Header from '../components/Header'

const MainLayOut = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default MainLayOut
