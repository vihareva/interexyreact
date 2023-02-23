import React from 'react'
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Button, Chip, Grid} from "@mui/material";
import {NavLink} from "react-router-dom";
import {CharacterType} from "../../../api/characterApi";

const MyNavLink = React.forwardRef<any, any>((props, ref) => (
    <NavLink
        ref={ref}
        to={props.to}
        className={({ isActive }) => `${props.className} ${isActive ? props.activeClassName : ''}`}
    >
        {props.children}
    </NavLink>
));

// const StyledCard = styled(Card)`
//
// `
interface CharacterCardPropsType{
    character: CharacterType
}
export function CharacterCard(props: CharacterCardPropsType) {

    return (
                        <Card >
                            <CardHeader sx={{paddingBottom: 0}}
                                avatar={
                                    <Avatar className={"avatar"} src={props.character.image} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon/>
                                    </IconButton>
                                }
                                title={props.character.name}
                                subheader={props.character.gender}
                            />

                            <CardContent>
                                <Chip  label={props.character.status} color={props.character.status=='Alive'? 'success' : 'warning' }/>
                                <Typography variant="body2" color="text.secondary">
                                    {props.character.species}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {props.character.location.name}
                                </Typography>
                                <Button  component={MyNavLink}
                                         to={'/profile/' + props.character.id}
                                        // activeClassName={classes.activeLink}
                                    >
                                        view char profile
                                </Button>
                            </CardContent>

                        </Card>

    )

}




