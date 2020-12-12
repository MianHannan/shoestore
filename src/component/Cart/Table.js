import React from 'react'

//Material UI Component
import {
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    Button,
    Typography
} from '@material-ui/core';

//Material UI Icon
import {
    Add,
    Close,
    Remove
} from '@material-ui/icons'

//State
import CART from '../../context/Cart'

//Data
import data from '../../context/data'

const CartTable = () => {
    const Cart = React.useContext(CART);

    return (
        <TableContainer component={Paper}>
            <Table style={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow style={{ backgroundColor: '#0a0' }}>
                        <TableCell style={{ color: '#fff', fontSize: '20px' }}>
                            Product
                        </TableCell>
                        <TableCell style={{ color: '#fff', fontSize: '20px' }}>
                            Quantity
                        </TableCell>
                        <TableCell style={{ color: '#fff', fontSize: '20px' }}>
                            Price
                        </TableCell>
                        <TableCell style={{ color: '#fff', fontSize: '20px' }} />
                    </TableRow>
                </TableHead>

                {
                    Cart.items[0] !== "" &&
                    <TableBody>
                        {
                            Cart.items.map(member =>
                                <TableRow key={member.id}>
                                    <TableCell>{member.name}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => {
                                            member.qty > 1 && Cart.setItems({ type: 'EDIT', id: member.id, qty: --member.qty });
                                        }
                                        }>
                                            <Remove />
                                        </Button>
                                        <span className='cartTableQtyNumber'>
                                            {member.qty}
                                        </span>
                                        <Button onClick={() => {
                                            Cart.setItems({ type: 'EDIT', id: member.id, qty: ++member.qty })
                                        }
                                        }>
                                            <Add />
                                        </Button>
                                    </TableCell>
                                    <TableCell>{`$` + member.qty * member.price}</TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => {
                                            Cart.setItems({ type: 'DEL', id: member.id })
                                        }
                                        }>
                                            <Close />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                }

            </Table>

            {
                Cart.items[0] === "" &&
                <div style={{ textAlign: 'center' }}>
                    <Typography variant='h5'> Cart is Empty</Typography>
                </div>
            }
        </TableContainer>
    )
}

export default CartTable
