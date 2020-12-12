import React from 'react'
import { Link } from 'react-router-dom'

//State
import CART from '../context/Cart'

//Material UI
import { makeStyles, AppBar, Toolbar, Typography, Button, Badge } from '@material-ui/core'

//Material UI Icons
import HomeIcon from '@material-ui/icons/Home'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import StoreIcon from '@material-ui/icons/Store'

//Material UI Styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    icon: {
        margin: '0 10px',
        fontSize: '38px',
        color: 'white',
    }
}));

export default function Header() {

    const classes = useStyles();
    const Cart = React.useContext(CART);

    return (
        <div className={classes.root + " header"}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        <Link to='/' style={{ color: '#fff' }}>SHOE STORE</Link>
                    </Typography>
                    <Link to="/">
                        <Button>
                            <HomeIcon className={classes.icon} />
                        </Button>
                    </Link>
                    <Link to="/products">
                        <Button>
                            <StoreIcon className={classes.icon} />
                        </Button>
                    </Link>
                    <Link to="/cart">
                        <Button>
                            <Badge badgeContent={Cart.items[0].id ? Cart.items.length : 0} color='primary' className='headerBadge'>
                                <ShoppingCartIcon className={classes.icon} />
                            </Badge>
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
