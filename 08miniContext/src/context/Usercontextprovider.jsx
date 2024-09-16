/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import UserContext from './Usercontext'
import { useState } from 'react'

function Usercontextprovider({children}) {
    const [user , setuser] = useState(null)
    return (
        <UserContext.Provider value={{user , setuser}}>
        {children}
        </UserContext.Provider>
    )
}

export default Usercontextprovider


