import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import * as React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DescriptionIcon from '@mui/icons-material/Description';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import InfoIcon from '@mui/icons-material/Info';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import {Box, Typography} from "@mui/material";
import {MenuItem} from "./MenuItem/MenuItem";
import {makeStyles} from "@material-ui/core";
import {Theme} from "@mui/material/styles";


interface MenuPropsType {
    closeMenu: () => void
    isMenuOpen: boolean
}
export const drawerWidth=200

const useStyles = makeStyles((theme: Theme)=>{
    return {
        drawer: {
            //width: `${drawerWidth}%`,
            width: drawerWidth
        },
        drawerPaper: {
            //width: `${drawerWidth}%`,
            width: drawerWidth
        },
        title: {
            padding: theme.spacing(3)
        }
        // appbar: {
        //     width: `calc(100%-${drawerWidth}%)`
        // }
    }
})

export default function Menu(props: MenuPropsType) {
    const classes = useStyles()

    return (
        <Drawer
            anchor={'left'}
            open={props.isMenuOpen}
            onClose={props.closeMenu}
            variant={"permanent"}
            className={classes.drawer}
            classes={{paper: classes.drawerPaper}}
        >
            <div>
                <Typography className={classes.title}>
                    Interexy
                </Typography>
            </div>
            <Box component={"nav"} >
                {/*<IconButton*/}
                {/*    size="large"*/}
                {/*    edge="start"*/}
                {/*    color="inherit"*/}
                {/*    aria-label="menu"*/}
                {/*    sx={{mr: 2}}*/}
                {/*    onClick={props.closeMenu}*/}
                {/*>*/}
                {/*    <CloseIcon/>*/}
                {/*</IconButton>*/}
                <List>
                    <MenuItem to={"/"} linkName={"Home"}>
                        <HomeIcon/>
                    </ MenuItem>
                    <MenuItem to={"/home"} linkName={"Products"}>
                        <ProductionQuantityLimitsIcon/>
                    </ MenuItem>
                    <MenuItem to={"/home"} linkName={"Articles"}>
                        <DescriptionIcon/>
                    </ MenuItem>
                    <MenuItem to={"/home"} linkName={"News"}>
                        <AnnouncementIcon/>
                    </ MenuItem>
                    <MenuItem to={"/home"} linkName={"About"}>
                        <InfoIcon/>
                    </ MenuItem>
                    <MenuItem to={"/contactus"} linkName={"Contact Us"}>
                        <GroupAddIcon/>
                    </ MenuItem>
                </List>
            </Box>

        </Drawer>
    );
}
