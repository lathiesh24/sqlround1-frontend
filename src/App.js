import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Authentication from './components/Authentication';
import QuizSection from './components/QuizSection';

const App = () => {
  return (
    <div>
      <Routes>
       <Route exact path="/" element={<Authentication/>}/>
       <Route exact path="/sqlquiz" element={<QuizSection/>}/>
      </Routes>
    </div>
  )
}

export default App