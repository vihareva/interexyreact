import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'
import userReducer from "./reducers/charactersReducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        characters: userReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

console.log(store.getState())


// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch