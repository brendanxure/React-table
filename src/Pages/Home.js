import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import "../App.css"
import { AppContext } from '../ContextApi/ContextApi'

const Home = () => {
    const {apiType, setApiType, setFindDOB, setFindEmail, setFindName } = useContext(AppContext)
    window.onload = function() {
        if(!window.location.hash) {
          window.location = window.location + '#loaded';
          window.location.reload();
        }}
      
      useEffect(()=>{
        setApiType("")  
        setFindEmail("")
        setFindDOB("")
        setFindName("")
    
      })
  return (
    <div className='App'>
        <h1>CLICK ANY BUTTON BELOW TO GET YOUR DESIRED DATA</h1>
        <div className='Buttons'>
        <LinkContainer to="/users" onClick={()=>setApiType("/users")}><Button>Users</Button></LinkContainer>
        <LinkContainer to="products" onClick={()=> setApiType("/products")}><Button>Products</Button></LinkContainer>
        </div>
    </div>
  )
}

export default Home
