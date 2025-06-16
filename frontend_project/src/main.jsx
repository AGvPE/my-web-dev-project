import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Faq from './Faq.jsx'
import History from './History.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IQTuneUps from './Iqtuneups.jsx'
import Contactus from './Contactus.jsx'
import Thetest from './Thetest.jsx'
import Blog from './Blog.jsx'
import Store from './Store.jsx'
import Myaccount from './Myaccount.jsx'
import Takethetest from './Takethetest.jsx'
import Cart from './Cart.jsx'
import Test1 from './Test1.jsx'
import Test2 from './Test2.jsx'
import Test3 from './Test3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/history' element={<History />} />
        <Route path='/iqtunesup' element={<IQTuneUps />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/test' element={<Thetest />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/store' element={<Store />} />
        <Route path='/myaccount' element={<Myaccount />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/taketest' element={<Takethetest />} />
        <Route path='/test1' element={<Test1 />} />
        <Route path='/test2' element={<Test2 />} />
        <Route path='/test3' element={<Test3 />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
