import React, { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
    const [gender, setGender] = useState(1);
    const [birthday, setBirthday] = useState('');
    const [origin, setOrigin] = useState();
    const [idCountry, setIdCountry] = useState();
    const [idRegion, setIdRegion] = useState();
    const [idCity, setIdCity] = useState();


    const value = {
        setGender,
        gender,
        setBirthday,
        birthday,
        setOrigin,
        origin,
        setIdCountry,
        idCountry,
        setIdRegion,
        idRegion,
        setIdCity,
        idCity,
    }

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }