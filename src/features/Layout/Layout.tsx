import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core";
import Menu from "../NavigationMenu/Menu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const useStyles = makeStyles((theme: any) => {
    return {
        root: {
            display: 'flex'
        },
        toolbar: theme.mixins.toolbar,
        page: {
            background: "#f9f9f9",
            width: "100%",
            padding: theme.spacing(3)
        }
    }

})

export const Layout: React.FC = (props) => {
    const classes = useStyles()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true)

    return (<div className={classes.root}>

            <Header openMenu={() => {
                setIsMenuOpen(true)
            }}/>

            <Menu isMenuOpen={isMenuOpen} closeMenu={() => {
                setIsMenuOpen(false)
            }}/>

            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {props.children}
                <Footer/>
            </div>
        </div>

    );
}

