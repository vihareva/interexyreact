import $api from '../api'

export interface CharacterType {
    "id": number,
    "name": string,
    "status": string,
    "species": string,
    "type": string,
    "gender": string,
    "origin": {
        "name": string,
        "url": string
    },
    "location": {
        "name": string,
        "url": string
    },
    "image": string,
    "episode": [
        string
    ],
    "url": string,
    "created": string
}

export const getCharactersById = async (ids:  Array<number> | number) => {
    try{
        const { data } = await $api.get(`character/${ids}`)
        return data
    }catch (e) {
        console.log('error')
    }

};

export const getAllCharacters = async () => {
    try {
        const {data} = await $api.get(`character`)
        return data.results
    }catch (e) {
        console.log('error')
    }
};

export const getCharactersByName = async (name:string) => {
    try {
        const { data } = await $api.get(`character/?name=${name}`)
        if(data.results){
            return data.results
        }

    } catch (error:any) {
        //console.log(error.response.data.error)
       //return error.response.data.error
        return error
    }
};