import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();


const ContextProvider = ({ children }) => {
    const [regInfo, setRegInfo] = useState({})
    const [user, setUser] = useState({})
    const userEmail = localStorage.getItem('email')

    //get single user
    useEffect(() => {
        fetch(`http://localhost:3000/user/${userEmail}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then((data) => {
                setUser(data); // Assuming the response contains user data
            })
            .catch((error) => {
                console.error('There was a problem fetching user data:', error);
                // Handle error (e.g., display an error message)
            });
    }, [userEmail])




    const contextInfo = {
        setRegInfo,
        regInfo,
        user
    }
    return (
        <DataContext.Provider value={contextInfo}>
            {children}
        </DataContext.Provider>
    )
}

export default ContextProvider