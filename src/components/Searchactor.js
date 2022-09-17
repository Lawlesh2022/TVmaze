import React from 'react'
import {useState, useContext} from 'react'
import ShowsContext from '../context/shows/showsContext'
import Alert from './Alert'
const Searchactor = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const {searchShows}= useContext(ShowsContext)    
    const onSearchHandler = (e) =>{
        e.preventDefault(); 

        searchShows(searchTerm);     
        
    }
  return (
    <div className = "searchbar">
        <Alert message = "Enter people below" type = "danger" />
        <form className = "searchbar__form">
            <input type = "text" placeholder = "Search for TV Actor" 
            value = {searchTerm}
            onChange = {(e)=>setSearchTerm(e.target.value)}
            />
            <button className = "btn btn-block" onClick =
            {onSearchHandler}>SEARCH</button>
        </form>
    </div>
  )
}

export default Searchactor