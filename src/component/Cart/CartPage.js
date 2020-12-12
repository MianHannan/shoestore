import React from 'react'
import { Grid, Typography } from '@material-ui/core'

//Component
import Table from './Table'
import Card from './Card'

const CartPage = () => {
    return (
        <div style={{ margin: '10px auto 0 auto' }}>
            <div style={{ textAlign: 'center', margin: '10px auto' }}>
                <Typography variant='h3'>Cart Items</Typography>
            </div>
            <Grid container>
                <Grid item xs={8}>
                    <Table />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
            </Grid>
        </div>
    )
}

export default CartPage
