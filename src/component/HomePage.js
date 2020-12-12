import React from 'react'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className='home'>
            <Grid container>
                <Grid item xs={6}>
                    <Typography variant='h1'><a href="/store">Shop</a></Typography>
                    <Typography variant='h3'>The Best</Typography>
                    <Typography variant='h1'>At</Typography>
                    <Typography variant='h3'><a href="/">SHOE STORE</a></Typography>
                    <Typography variant='h1'>ONLY</Typography>
                    <Button style={{ backgroundColor: '#0a0', color: '#fff', fontSize: '20px' }}>
                        <Link to="/products" style={{ color: '#fff' }}>SHOP NOW</Link>
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} style={{ width: '400px', height: '400px', backgroundColor: '#0a0', borderRadius: '50%', margin: '50px auto 20px auto' }}>
                        <img className='homeShoe' src='/img/CT8532_104_A_PREM.png' alt='Shoes'></img>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
