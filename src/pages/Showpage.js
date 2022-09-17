import React from "react"
import{useContext} from 'react'
import ShowsContext from '../context/shows/showsContext'
import Searchshow from '../components/Searchshow'
import Listitem from '../components/Listitem'
const Showpage = () => {
  const showsContext = useContext(ShowsContext);
  const {loading, shows} = showsContext
  return (
    <div className = "homepage">
      <Searchshow/>
      {loading ? (<h2>Loading...</h2>) : (
      <div className = "homepage__list">
        {shows.map((item)=>(<Listitem
         key = {item.show.id}
         id = {item.show.id}
         image ={item.show.image ? item.show.image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
         name = {item.show.name}
         rating = {item.show.rating.average ? item.show.rating.average : "No rating"}
        />))}
      </div>
      )}
    </div>
  )
}

export default Showpage