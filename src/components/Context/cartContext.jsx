import { createContext, useState, useContext } from 'react' 

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) => {
    // estados y funciones
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([
            ...cart,
            item
        ])
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    return (
        <CartContext.Provider 
            value={{
                cart,
                addToCart,
                vaciarCarrito
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
