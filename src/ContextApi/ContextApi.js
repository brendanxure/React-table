import React, { useState } from 'react'
import { Usersheader } from '../Data/Usersheader'



export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [page, setPage] = useState("")
    const [payload, setPayload] = useState([])
    const [loading, setLoading] = useState(false)
    const [fetchUsers, setFetchUsers] = useState(false)
    const [search, setSearch] = useState(false)
    const [searchName, setSearchName]= useState("")
    const [searchEmail, setSearchEmail] = useState("")
    const [searchDOB, setSearchDOB] = useState("")
    const [apiType, setApiType] = useState("")
    const [userTable, setUserTable] = useState(Usersheader)
    const [findName, setFindName] = useState()
    const [findEmail, setFindEmail] = useState()
    const [findDOB, setFindDOB] = useState()
    return (
        <AppContext.Provider value={{page, setPage, payload, setPayload, userTable, setUserTable, apiType, setApiType, fetchUsers, setFetchUsers, search, setSearch, setFindName, findName, searchName, setSearchName, searchEmail, setSearchEmail, findEmail, setFindEmail, searchDOB, setSearchDOB, findDOB, setFindDOB, loading, setLoading}}>
            {children}
        </AppContext.Provider>
    )
}