// import React, {useMemo} from 'react'
// import './App.css';
// import {CharacterCardList} from './features/CharacterCardList/CharacterCardList';
// import {NavLink, Route, Routes} from "react-router-dom";
// import {Character} from "./Character";
// import Menu from "./features/NavigationMenu/Menu";
// import Main from "./features/Main/Main";
// import Counter from "./Counter/Counter";
// import {ContactForm} from "./features/ContactForm";
//
// type NumbersType = {
//     num: number
//     cl: string
// }
// export type NumberListType = {
//     numbers: NumbersType[]
//
// }
//
// // class App extends React.Component<{}, NumberListType> {
// //     // @ts-ignore
// //     id: Timeout | undefined
// //
// //     constructor(props: any) {
// //         super(props);
// //         this.state = {
// //             numbers: [{num: 1, cl: "cl1"}, {num: 2, cl: "cl2"}, {num: 3, cl: "cl3"}, {num: 4, cl: "cl4"}, {
// //                 num: 5,
// //                 cl: "cl5"
// //             }],
// //         }
// //     }
// //
// //
// //     componentDidMount() {
// //         this.id = setTimeout(() => {
// //             this.setState((state) => {
// //                 return {numbers: [...state.numbers, {num: 6, cl: "cl6"}]}
// //             })
// //         }, 3000)
// //
// //     }
// //
// //     componentWillUnmount() {
// //         clearTimeout(this.id)
// //     }
// //
// //     render() {
// //         return (
// //             <div className="App">
// //                 <CharacterCardList numbers={this.state.numbers}/>
// //             </div>
// //         )
// //
// //     }
// // }
//
// function App() {
//
//
//
//     // const fibonachi: Worker = useMemo(
//     //     () => new Worker(new URL("features/workers/worker.ts")),
//     //     []
//     // );
//     function handleFibonCalc() {
//         // if (window.Worker) {
//         //
//         //     fibonachi.postMessage(45)
//         //
//         //     fibonachi.onmessage = function (message) {
//         //         console.log(message.data);
//         //     }
//         // }
//
//     }
//     return (<div>
//             <Routes>
//                 <Route path="/" element={<Main handleFibonCalc={handleFibonCalc} />}/>
//                 <Route path="/contactus" element={<ContactForm />}/>
//                 <Route path='/profile/:charId'
//                        element={<Character />}/>
//             </Routes>
//             {/*<Counter/>*/}
//
//         </div>
//
//     );
// }
//
// export default App;
// class App extends React.Component<{}, NumberListType> {
//     // @ts-ignore
//     id: Timeout | undefined
//
//     constructor(props: any) {
//         super(props);
//         this.state = {
//             numbers: [{num: 1, cl: "cl1"}, {num: 2, cl: "cl2"}, {num: 3, cl: "cl3"}, {num: 4, cl: "cl4"}, {
//                 num: 5,
//                 cl: "cl5"
//             }],
//         }
//     }
//
//
//     componentDidMount() {
//         this.id = setTimeout(() => {
//             this.setState((state) => {
//                 return {numbers: [...state.numbers, {num: 6, cl: "cl6"}]}
//             })
//         }, 3000)
//
//     }
//
//     componentWillUnmount() {
//         clearTimeout(this.id)
//     }
//
//     render() {
//         return (
//             <div className="App">
//                 <CharacterCardList numbers={this.state.numbers}/>
//             </div>
//         )
//
//     }
// }
import React, {useState} from 'react'
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Character} from "./Character";
import Main from "./features/Main/Main";
import {ContactForm} from "./features/ContactForm/ContactForm";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./styles/theme";
import {Layout} from "./features/Layout/Layout";

type NumbersType = {
    num: number
    cl: string
}
export type NumberListType = {
    numbers: NumbersType[]
}

function App() {
    // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true)

    // const fibonachi: Worker = useMemo(
    //     () => new Worker(new URL("./features/workers/worker.ts", import.meta.url)),
    //     []
    // );

    function handleFibonCalc() {
        // if (window.Worker) {
        //
        //     fibonachi.postMessage(45)
        //
        //     fibonachi.onmessage = function (message) {
        //         console.log(message.data);
        //     }
        // }
    }

    return (<ThemeProvider theme={theme}>
            <div>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Main handleFibonCalc={handleFibonCalc}/>}/>
                        <Route path="/contactus" element={<ContactForm/>}/>
                        <Route path='/profile/:charId'
                               element={<Character/>}/>
                    </Routes>
                </Layout>
            </div>
            {/*<Counter/>*/}
        </ThemeProvider>
    );
}

export default App;
