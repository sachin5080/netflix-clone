import React from 'react'
import List from '../Components/List/List'
import Navbar from '../Components/Navbar'
import Feature from '../Featured/Feature'
import "./Home.scss"
export default function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Feature type="movies"/>
      <List/>
      <List/>
      <List/>
  </div>
  )
}
