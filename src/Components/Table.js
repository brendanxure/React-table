import React, { useEffect, useState, useContext } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Api from '../Api/Api';
import "./Table.css"
import { AppContext } from '../ContextApi/ContextApi';
import { Prodheader } from '../Data/Prodheader';
import { Usersheader } from '../Data/Usersheader';
import { InputText } from 'primereact/inputtext';
import {FilterMatchMode} from "primereact/api" 

const Table = () => {
    const {payload, setPayload, page, setPage, userTable, setUserTable, loading, setLoading, apiType, setFetchUsers, search, setSearch, findName, findEmail, findDOB} = useContext(AppContext)
    
    const user = payload.map((eachUser, id)=> eachUser)
    

    const [filter, setFilter] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    })

    useEffect(()=>{
        const fetchData = async() => {
            try {
                setLoading(true)
                const response = await Api.get(apiType);
                if (apiType === "/users" && response) {
                    setPage("Users")
                    setUserTable(Usersheader)
                    setFetchUsers(true)
                    setLoading(false)
                    console.log(response.data.users)
                    setPayload(response.data.users)
                } else if (apiType === "/products" && response) {
                    setPage("Products")
                    setUserTable(Prodheader)
                    setFetchUsers(false)
                    setLoading(false)
                    console.log(response.data)
                    setPayload(response.data.products)
                }
            } catch (error) {
               console.log(error) 
            } finally {
                setLoading(false)
            }
        }  
        fetchData()   
    },[apiType, findEmail, findDOB, findName])
    const Table1 = userTable.map((eachUserHeader, index) => (
        <Column key={index} field={eachUserHeader.field} header={eachUserHeader.header} style={{width: '8%', textAlign: "center"}}></Column>
    ))

  return (
    <div className="Table">
        {loading && <div className='alert alert-info'>....Loading</div>}
        {findName && <> <div style={{display: search === true ? "flex": "none", alignItems: "center"}}><span className="p-input-icon-left"><i className="pi pi-search" /><InputText placeholder='search' className='searchdrop' onInput={(e)=> setFilter({global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS},})} /></span> <i onClick={()=>setSearch(false)} className="pi pi-times"></i></div>
        <DataTable filters={filter} responsiveLayout="scroll" value={findName} showGridlines paginator rows={5} rowsPerPageOptions={[5, 10, 20, 50]}>
            {Table1}
        </DataTable></>}
        {findEmail  && <>  <div style={{display: search === true ? "flex": "none", alignItems: "center"}}><span className="p-input-icon-left"><i className="pi pi-search" /><InputText placeholder='search' className='searchdrop' onInput={(e)=> setFilter({global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS},})} /></span> <i onClick={()=>setSearch(false)} className="pi pi-times"></i></div>
        <DataTable filters={filter} responsiveLayout="scroll" value={findEmail} showGridlines paginator rows={5} rowsPerPageOptions={[5, 10, 20, 50]}>
            {Table1}
        </DataTable> </>
        }
        {findDOB && <> <div style={{display: search === true ? "flex": "none", alignItems: "center"}}><span className="p-input-icon-left"><i className="pi pi-search" /><InputText placeholder='search' className='searchdrop' onInput={(e)=> setFilter({global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS},})} /></span> <i onClick={()=>setSearch(false)} className="pi pi-times"></i></div>
        <DataTable filters={filter} responsiveLayout="scroll" value={findDOB} showGridlines paginator rows={5} rowsPerPageOptions={[5, 10, 20, 50]}>
            {Table1}
        </DataTable></>}
        {payload && !loading && !findName && !findEmail && !findDOB && <> <div style={{display: search === true ? "flex": "none", alignItems: "center"}}><span className="p-input-icon-left"><i className="pi pi-search" /><InputText placeholder='search' className='searchdrop' onInput={(e)=> setFilter({global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS},})} /></span> <i onClick={()=>setSearch(false)} className="pi pi-times"></i></div>
        <DataTable filters={filter} responsiveLayout="scroll" value={payload} showGridlines paginator rows={5} rowsPerPageOptions={[5, 10, 20, 50]}>
            {Table1}
        </DataTable></>}
    </div>
  )
}

export default Table