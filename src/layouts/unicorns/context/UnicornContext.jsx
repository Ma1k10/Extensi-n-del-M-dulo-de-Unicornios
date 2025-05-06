import { createContext, useState, useEffect } from "react";

export const UnicornContext = createContext()

export const UnicornProvider = ({ children }) => {
    const [unicorns, setUnicorns] = useState([])

    const getUnicorns = async () => {
        const response = await fetch('https://crudcrud.com/api/c876dc18b17b44a7bfd515cb6b3d5e62/unicorns')
        const data = await response.json()
        setUnicorns(data)
    }

    useEffect(() => {
        getUnicorns()
    }, [])

    const editUnicorn = () => {
        console.log("editar unicornio")
    }

    return (
        <UnicornContext.Provider value={{ unicorns, getUnicorns, editUnicorn }}>
            {children}
        </UnicornContext.Provider>
    )

}