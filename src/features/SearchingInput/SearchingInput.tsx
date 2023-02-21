import * as React from 'react';
import {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {CharacterType, getCharactersByName} from "../../api/characterApi";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/useStore";
import {fetchCharactersByName} from "../../redux/reducers/charactersReducer";
import {Box} from "@mui/material";

interface SearchingInputPropsType{
    addInfoAboutSelectedChar: (char:CharacterType)=>void
}

export default function SearchingInput(props: SearchingInputPropsType) {

    const [inputValue, setInputValue] = React.useState('');
    const [value, setValue] = React.useState('');

    const { characters } = useAppSelector((st)=>st.characters.inputCharacters);
    const { error } = useAppSelector((st)=>st.characters.inputCharacters);
    const dispatch = useAppDispatch();

    //когда мы ручками вводим в инпут буквы меняется inputValue
    useEffect(() => {
        dispatch(fetchCharactersByName(inputValue));
    }, [inputValue])

    //когда мы выбираем какойто option меняется value
    useEffect(() => {
        //при первом рендеринге value='' и будет запрашиваться по имени '' и браться с ответа где все персы первый ответ
        if(value!==''){
            getCharactersByName(value).then(resp => {
                if (resp.response) {
                    console.log(resp.response.data.error)
                } else {
                    props.addInfoAboutSelectedChar(resp[0])
                }
            })
        }
    }, [value])

    return (
        <>
            {
                characters ?
                    <Box
                        // pt={3}
                    >
                        <Autocomplete
                            sx={{width: 300}}
                            id="findCharacters"
                            noOptionsText={"No characters with this name"}
                            value={value}
                            onChange={(event: any, newValue: any) => {
                                setValue(newValue);
                            }}
                            inputValue={inputValue}
                            onInputChange={(event, newInputValue) => {
                                setInputValue(newInputValue);
                            }}
                            disableClearable
                            options={!error ? characters.map((option) => option.name): [error]}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Pick character to render"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                    </Box>
                    : null
            }
        </>

    );
}

