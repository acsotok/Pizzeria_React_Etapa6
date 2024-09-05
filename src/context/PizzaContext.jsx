/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"

export const PizzaContext = createContext()

export const PizzaProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([])

    const consultarPizza = async () => {
        try {
        const response = await fetch("http://localhost:5000/api/pizzas")
        const data = await response.json()
        //console.log(data)
        setPizzas(data)
        } catch (error){
            console.error(error)
        }
    }
    
    useEffect(() => {
        consultarPizza()
    }, [])

    return (
        <PizzaContext.Provider value={{pizzas}}>
            {children}
        </PizzaContext.Provider>
  )
}
