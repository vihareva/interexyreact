import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CharacterType, getCharactersById, getCharactersByName} from "../../api/characterApi";
import {ActionReducerMapBuilder as AcBuilder} from "@reduxjs/toolkit/dist/mapBuilders";
import {NoInfer} from "@reduxjs/toolkit/dist/tsHelpers";


export const fetchCharactersByIds = createAsyncThunk(
    "characters/byId",
    async (data: Array<number> | number, {  }) => {
             return await getCharactersById(data);
    }
);

export const fetchCharactersByName = createAsyncThunk(
    "characters/byName",
    async (inputValue: string, { }) => {
        return await getCharactersByName(inputValue);
    }
);

export interface CharactersState {
    characters: CharacterType[] | undefined,
    inputCharacters: {
        characters: CharacterType[] | undefined,
        error: string | undefined
    }
}

const initialState:CharactersState={
    characters: undefined,
    inputCharacters: {
        characters: undefined,
        error: undefined
    }
}

const charactersSlice=createSlice({
    name: 'characters',
    initialState,
    reducers:{

    },
    extraReducers: (builder: AcBuilder<NoInfer<CharactersState>>) => {
        builder
            .addCase(fetchCharactersByIds.fulfilled, (state, { payload }) => {
              state.characters=payload
            })
            .addCase(fetchCharactersByName.fulfilled, (state, { payload }) => {
                if (payload.response) {
                    state.inputCharacters.error=payload.response.data.error
                    console.log(payload.response.data.error)
                } else {
                    console.log(payload)
                    state.inputCharacters.error=undefined
                    state.inputCharacters.characters=payload
                }
            })

    }
})


export default charactersSlice.reducer