import { configureStore } from '@reduxjs/toolkit'

import securityMiddleware from '../middlewares/securityMiddleware'
import appMiddleware from '../middlewares/appMiddleware'
import historyMiddleware from 'app/middlewares/historyMiddleware'

import rootReducer from 'app/reducers'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
          securityMiddleware,
          appMiddleware,
          historyMiddleware,
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ],
  devTools: true
 })

 export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch