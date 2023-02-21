import * as React from 'react';
import {useState} from 'react';
import {CharacterCardList} from "../CharacterCardList/CharacterCardList";


interface MainPropsType{
    handleFibonCalc:()=>void
}


export default function Main(props: MainPropsType) {

    const [fibon, setFibon] = useState<number>()

    // const worker: Worker = useMemo(
    //     () => new Worker(new URL("../workers/worker.ts", import.meta.url)),
    //     []
    // );


    return (
        <div>

            {/*<div>{fibon}</div>*/}
            {/*<button onClick={props.handleFibonCalc}>worker</button>*/}

            <CharacterCardList/>

        </div>

    );
}