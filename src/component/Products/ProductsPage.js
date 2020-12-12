import React from 'react'
import data from '../../context/data'
import Product from './Product'

//States
import CART from '../../context/Cart'

export default function ProductsPage() {

    const Cart = React.useContext(CART);

    let inCart = {};

    // Cart.items.map(item => { if (item.id) { inCart[item.id] = true } })

    return (
        <div className='storeCardContainer'>
            {Object.entries(data).map(key =>
                <Product
                    key={key[0]}
                    id={key[0]}
                    img={key[1].img}
                    name={key[1].name}
                    price={100}
                    isAdded={inCart[key[0]] ? true : false}
                />
            )}
        </div>
    )
}
