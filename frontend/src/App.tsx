import { Routes,Route} from 'react-router-dom'
import './App.css'

import Login from './pages/auth/Login'
import Registration from './pages/auth/Registration'
import route from './routes'
import { Suspense } from 'react'


function App() {

  return (
    <>
        <Routes>
          <Route index element = {<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route>
              {
                route.map((routes,index)=>{
                    const {path,component:Component} = routes
                    return(
                      <Route
                       key={index}
                       path={path}
                       element = {
                        <Suspense>
                           <Component/>
                        </Suspense>
                       }

                      />
                    )
                })
              }
          </Route>
        </Routes>
    </>
  )
}

export default App
