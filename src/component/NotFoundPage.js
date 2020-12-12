import { Typography } from '@material-ui/core'
import React from 'react'

export default function NotFoundPage() {
    return (
        <Typography variant='h1' style={{ textAlign: 'center', margin: '60px auto' }}>
            404 Error<br />
            <Typography variant='h2'>
                The Page <br />You have Requested<br /> is Not Found
            </Typography>
        </Typography>
    )
}
