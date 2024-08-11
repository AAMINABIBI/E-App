import React from 'react'
import { StatusBar } from 'react-native'

const BarStatus = () => {
  return (
    <StatusBar 
    backgroundColor={"blue"}
    hidden={false}
    barStyle={"dark-content"}/>
  )
}

export default BarStatus
