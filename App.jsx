import React from 'react'
import { Provider } from 'react-redux'
import RouteDavisScreen from './RoutesDavis/RouteDavisScreen'
import Todo from './src/Todo'
import TopCourses from './TopCourses/TopCourses'
import AuthApp from './tuto/AuthApp/AuthApp'
import Leboncoin from './tuto/leBonCoin/Leboncoin'
import Tuto from './tuto/Tuto'
import { store } from './Redux/store'

const App = () => {


  return (

      // <AuthApp/>
      // <TopCourses/>
      <Provider store = {store}>
      <RouteDavisScreen/>
      
      </Provider>
  )
}

export default App