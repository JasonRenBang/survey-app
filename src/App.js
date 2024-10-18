
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FirstPage from './pages/firstPage.js'
import ThirdPage from './pages/thirdPage.js'
import SecondPage from './pages/secondPage.js'
import ForthPage from './pages/forthPage.js'
import FifthPage from './pages/fifthPage.js'
import SixthPage from './pages/sixthPage.js'
import SeventhPageForWork from './pages/seventhPageForWork.js'
import SeventhPageForStudent from './pages/seventhPageForStudent.js'
import SeventhPageForGraduate from './pages/seventhPageForGraduate.js'
import EighthPage from './pages/eighthPage.js'
import NinthPage from './pages/ninethPage.js'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/thirdPage" element={<ThirdPage />} />
        <Route path="/forthPage" element={<ForthPage />} />
        <Route path="/fifthPage" element={<FifthPage />} />
        <Route path="/sixthPage" element={<SixthPage />} />
        <Route path="/seventhPageForWork" element={<SeventhPageForWork />} />
        <Route path="/seventhPageForStudent" element={<SeventhPageForStudent />} />
        <Route path="/seventhPageForGraduate" element={<SeventhPageForGraduate />} />
        <Route path="/eighthPage" element={<EighthPage />} />
        <Route path="/ninethPage" element={<NinthPage />} />



      </Routes>
    </Router>
  )
}

export default App
