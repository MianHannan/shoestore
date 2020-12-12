import React from 'react'

const initialItems = [
    // { id: 'first', name: 'First Test Product', qty: 1, price: 100 },
    // { id: 'second', name: 'Second Test Product', qty: 2, price: 200 },
    // { id: 'third', name: 'Third Test Product', qty: 3, price: 300 }
    ""
];

const CART = React.createContext(initialItems);

export const CartProvider = ({ children }) => {

    //Items State
    const [items, setItems] = React.useReducer((prevItems, args) => {
        switch (args.type) {
            case 'ADD':
                if (!prevItems[0].id) {
                    return [args.obj];
                } else {
                    return [...prevItems, args.obj];
                }
            case 'EDIT':
                prevItems[prevItems.findIndex(member => member.id === args.id)].qty = args.qty;
                return [...prevItems];
            case 'DEL':
                {
                    let newItems = prevItems.filter(member => member.id !== args.id);
                    if (newItems.length === 0) {
                        return [""]
                    } else {
                        return newItems;
                    }
                }
            default:
                return prevItems;
        }
    }, [...initialItems]);


    return (
        <CART.Provider value={
            {
                items,
                setItems
            }
        }>
            {children}
        </CART.Provider>
    )
}

export default CART;