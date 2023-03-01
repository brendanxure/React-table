import React, {useContext} from 'react'
import { Black, Yellow } from './Colours'
import { AppContext } from '../ContextApi/ContextApi'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'



const Header = () => {
    const {page, setPage}= useContext(AppContext)
  return (
    <div style={{width: "98%", margin: "0 auto"}}>
        <p><Link style={{textDecoration: "none", color: "black"}} to="/">Home</Link>/<span style={{backgroundColor: "#fdc936"}}>{page}</span></p>
    </div>
  )
}

export default Header