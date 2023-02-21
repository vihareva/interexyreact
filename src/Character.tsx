import React, {useEffect, useState} from "react";
import {CharacterType, getCharactersById} from "./api/characterApi";
import {Box, Button, Card, Grid} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {NavLink, useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core";
import {Theme} from "@mui/material/styles";



export function Character() {

    const params = useParams();
    const id = params.charId;

    const [character, setCharacter] = useState<CharacterType | undefined>(undefined)


    // const classes = useStyles();

    useEffect(() => {
        getCharactersById([Number(id)]).then(char => {
            console.log(char)
            setCharacter(char)
        })

    }, [])

    return (<Box>
        <Grid container spacing={2}>
            {character ?
                <Grid item xs={3}>
                    <Card sx={{maxWidth: 345}}>
                        <CardHeader
                            avatar={
                                <Avatar className={"avatar"} src={character.image} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon/>
                                </IconButton>
                            }
                            title={character.name}
                            subheader={character.gender}
                        />

                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {character.species}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {character.location.name}
                            </Typography>
                            <Button>
                                <NavLink to={'/profile/' + character.id}>

                                </NavLink>
                            </Button>
                        </CardContent>

                    </Card>
                </Grid>
                :
                <div>no chars</div>
            }
        </Grid>
    </Box>)

}