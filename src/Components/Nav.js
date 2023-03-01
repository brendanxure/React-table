import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { InputText } from 'primereact/inputtext';
import { AppContext } from '../ContextApi/ContextApi';
import Api from '../Api/Api';

const Navigation = () => {
const {fetchUsers, setSearch, payload, setFindName, searchName, setSearchName, searchEmail, setSearchEmail, setFindEmail, searchDOB, setSearchDOB, apiType, setFindDOB} = useContext(AppContext)
   
const searchClick = () => {
    setSearch(true)
}
const loadPayLoad = () => {
    setFindEmail("")
    setFindDOB("")
    setFindName("")
    setSearch(false)
    setSearchName("")
    setSearchEmail("")
    setSearchDOB("")
}

const searchNameClick = async() =>{
    const Name = payload.filter((eachone, index) => eachone.firstName == searchName || eachone.maidenName == searchName || eachone.lastName == searchName || eachone.title === searchName )
    console.log(Name[0].id)
    try {
      setSearchName("")
      const response =  await Api.get(`${apiType}/${Name[0].id}`) 
      console.log([response.data])
      setFindName([response.data])
    } catch (error) {
        console.log(error)
    }
}

const searchEmailClick = async() => {
    const Email = payload.filter((eachone, index) => eachone.email == searchEmail)
    const Brand = payload.filter((eachone, index) => eachone.brand == searchEmail)
    console.log(Email)
    console.log(Brand)
    if (Email.length) {
      try {
        const response = await Api.get(`${apiType}/${Email[0].id}`)
        setSearchEmail("");
        console.log([response.data])
        setFindEmail([response.data])
    } catch (error) {
        console.log(error)
    }
    } else {
      try {
        const response = await Api.get(`${apiType}/${Brand[0].id}`)
        setSearchEmail("");
        console.log([response.data])
        setFindEmail([response.data])
    } catch (error) {
        console.log(error)
    }
    }
    
}

const searchDOBClick = async() => {
    const DOB = payload.filter((eachone, index)=> eachone.birthDate == searchDOB)
    const Cat = payload.filter((eachone, index) => eachone.category == searchDOB)
    console.log(DOB)
    console.log(Cat)
    if (DOB.length) {
      try {
        const response = await Api.get(`${apiType}/${DOB[0].id}`)
        setSearchDOB("")
        console.log([response.data])
        setFindDOB([response.data]) 
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const response = await Api.get(`${apiType}/category/${searchDOB}`)
        setSearchDOB("")
        console.log(response.data.products)
        setFindDOB(response.data.products)
      } catch (error) {
        console.log(error)
      }
    }
}


  return (
    <div>
        <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="" onClick={loadPayLoad}>{fetchUsers ? "Entries" : "All"}</Nav.Link>
            <Nav.Link href=""><span onClick={searchClick}  className="pi pi-search"></span></Nav.Link>
            <NavDropdown onClick={loadPayLoad} title={fetchUsers ? "Name" : "Title"} id="basic-nav-dropdown">
                <span onClick={searchNameClick} className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" value={searchName} onChange={(e)=> setSearchName(e.target.value)} />
                </span>
            </NavDropdown>
            <NavDropdown onClick={loadPayLoad} title={fetchUsers ? "Email" : "Brand"} id="basic-nav-dropdown">
            <span onClick={searchEmailClick} className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" value={searchEmail} onChange={(e)=> setSearchEmail(e.target.value)} />
                </span>
            </NavDropdown>
            <NavDropdown onClick={loadPayLoad} title={fetchUsers ? "Birth Date" : "Category"} id="basic-nav-dropdown">
                <span onClick={searchDOBClick} className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" value={searchDOB} onChange={(e)=>setSearchDOB(e.target.value)} />
                </span>
            </NavDropdown>
            <Nav.Link  href="">{fetchUsers ? "Gender" : "Laptop"}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation