import React from 'react'

//Material UI
import { Card, CardActions, Typography, Grid, Button } from '@material-ui/core'
import { Done, AddShoppingCart } from '@material-ui/icons';

//States
import CART from '../../context/Cart'

//Functional Component
const Product = (props) => {

    const Cart = React.useContext(CART);
    const [isAdded, setIsAdded] = React.useState(
        Cart.items.findIndex(
            member => member.id === props.id
        )
    );

    return (
        <Card className="storeCard">
            <img className='storeCardImg' src={props.img} alt={props.name} />
            <CardActions >
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='h6'> {props.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h5' style={{ fontSize: '27px' }}> {`$${props.price}`}</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: 'right' }} >
                        <Button style={{ backgroundColor: '#0a0', color: '#fff' }} onClick={() => {
                            if (isAdded === -1) {
                                Cart.setItems({
                                    type: 'ADD',
                                    obj: {
                                        id: props.id,
                                        name: props.name,
                                        price: props.price,
                                        qty: 1,
                                    }
                                });
                                setIsAdded(true);
                            }
                        }
                        }>
                            {
                                isAdded === -1 ?
                                    <AddShoppingCart /> : <Done />
                            }
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default Product
