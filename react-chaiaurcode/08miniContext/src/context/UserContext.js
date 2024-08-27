import React from 'react'

const UserContext = React.createContext()

export default UserContext;


/* 
(its like a global variable used to hold different variables like a wrappers using provider)
createContext returns a context object.
The context object itself does not hold any information. It represents which context other components read or provide. Typically, you will use SomeContext.Provider in components above to specify the context value, and call useContext(SomeContext) in components below to read it. 
*/