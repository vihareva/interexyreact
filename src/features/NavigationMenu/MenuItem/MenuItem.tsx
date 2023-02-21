import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {createStyles, makeStyles} from "@mui/styles";
import {Theme} from "@mui/material/styles";
import {NavLink} from "react-router-dom";


interface MenuItemPropsType {
    to: string
    linkName: string
}

const MyNavLink = React.forwardRef<any, any>((props, ref) => (
    <NavLink
        ref={ref}
        to={props.to}
        className={({ isActive }) => `${props.className} ${isActive ? props.activeClassName : ''}`}
    >
        {props.children}
    </NavLink>
));



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        activeLink: {
            backgroundColor: '#19ABC0 !important',
            color: '#FFFFFF !important',
            '& .MuiSvgIcon-root': {
                color: '#FFFFFF',
                stroke: '#FFFFFF',
                fill: '#19ABC0',
            },
        },
    })
);

export const MenuItem: React.FC<MenuItemPropsType> =(props)=> {

    const classes = useStyles();

    return (
        <ListItem disablePadding>
            <ListItemButton
                component={MyNavLink}
                to={props.to}
                activeClassName={classes.activeLink}
            >
                <ListItemIcon>
                    {props.children}
                </ListItemIcon>
                <ListItemText primary={props.linkName} />
            </ListItemButton>
        </ListItem>

    );
}
