import React, { useContext, useEffect, useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Canvas from '../modules/entry_page/canvas'
import SignUp from '../modules/sign_up_page/sign_up'
import { GlobalContext } from '../shared/global'
import SignIn from '../modules/sign_in_page/sign_in'
import MainPage from '../modules/main_page/main_page'

const initial = {
  username: '',
  email: '',
  password: '',
  receive_updates: false,
  country: '',
}

function App() {
  const [globalState, setGlobalState] = useState(initial)

  return (
    <>
      <GlobalContext.Provider value={[globalState, setGlobalState]}>
      <Routes>
         <Route path='/' element={<Canvas />} />
         <Route path='/sign-up' element={<SignUp />} />
         <Route path='/sign-in' element={<SignIn />} />
         <Route path='/main' element={<MainPage />} />
      </Routes>
      </GlobalContext.Provider>
    </>
  )
}

export default App
