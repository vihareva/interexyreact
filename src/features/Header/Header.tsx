import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dropdown from "../Dropdown/Dropdown";
import {makeStyles} from "@material-ui/core";
import {Theme} from "@mui/material/styles";
import {drawerWidth} from "../NavigationMenu/Menu";

interface HeaderPropsType {
    openMenu: () => void
}


const useStyles = makeStyles((theme: Theme)=>{
    return {
        appbar: {
            // width: `calc(100% - ${drawerWidth}%) !important`,
             width: `calc(100% - ${drawerWidth}px) !important`,
            backgroundColor: '#fff !important'
        }
    }
})


export default function Header(props: HeaderPropsType) {
    const classes = useStyles()

    return (

            <AppBar className={classes.appbar}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={props.openMenu}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Dropdown/>
                </Toolbar>
            </AppBar>

    );
}