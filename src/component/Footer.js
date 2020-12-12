import React from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer'>
            <footer>
                <Typography variant='h6'>
                    <Link to='/'>
                        ShoeStore
                </Link>
                    {' '} Created With{' '}
                    <span>❤</span>
                    {' '}By {' '}
                    <a href='https://github.com/mianhannan'>
                        Mian Hannan
                </a>
                </Typography>
            </footer>
        </div>
    )
}
