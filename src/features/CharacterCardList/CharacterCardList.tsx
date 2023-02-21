import React, {useEffect, useState} from 'react'
import {CharacterType} from "../../api/characterApi";
import {Box, Grid} from "@mui/material";
import SearchingInput from "../SearchingInput/SearchingInput";
import {CharacterCard} from "./CharacterCard/CharacterCard";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useStore";
import {fetchCharactersByIds} from "../../redux/reducers/charactersReducer";



export function CharacterCardList() {
    const [selectedChar, setSelectedChar] = useState<CharacterType | undefined>(undefined)
    const dispatch = useAppDispatch();
    const { characters } = useAppSelector((st)=>st.characters);


    useEffect(() => {
        // getCharactersById([1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12]).then(chars => {
        //     console.log(chars)
        //     setCharacters(chars)
        // })

        dispatch(fetchCharactersByIds([1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12]));

    }, [])


    function addInfoAboutSelectedChar(char:CharacterType){
        setSelectedChar(char)
        console.log(char)
    }

    return (<Box >
        <SearchingInput addInfoAboutSelectedChar={addInfoAboutSelectedChar}/>
        <Grid py={3} container alignItems="stretch" spacing={2}>
            {characters ?
                characters.map((char) => {
                    return <CharacterCard character={char}/>
                })
                :
                <div>no chars</div>
            }
            {selectedChar ?
                <CharacterCard character={selectedChar}/>
            :null
            }
        </Grid>
    </Box>)

}




