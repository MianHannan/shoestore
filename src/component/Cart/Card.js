import React from 'react'

//Material UI
import {
    Button,
    Card,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Typography
} from '@material-ui/core'

//State
import CART from '../../context/Cart'

//Functional Component
const DetailCard = () => {
    const Cart = React.useContext(CART);

    let tex = 10;
    let totalPrices = [];
    let subtotal = 0;

    Cart.items.map(member => totalPrices.push(member.price * member.qty));
    subtotal = totalPrices.reduce((total, num) => total + num);

    if (isNaN(subtotal)) {
        subtotal = 0;
        tex = 0;
    }

    return (
        <div>
            <Card className='cartCard'>
                <Typography variant='h4'>Details</Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Subtotal</TableCell>
                            <TableCell align='right'>{`$${subtotal}`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tax</TableCell>
                            <TableCell align='right'>{`$${tex}`}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total</TableCell>
                            <TableCell align='right'>{'$' + (subtotal + tex)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div style={{ textAlign: "right" }}>
                    <Button style={{ color: "#fff", backgroundColor: "#0a0", marginTop: "10px" }}>
                        <Typography >Checkout</Typography>
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default DetailCard
