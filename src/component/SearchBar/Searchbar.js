import React, { useState } from 'react'
import './SearchBar.css'

export default function Searchbar({onSearchBtnPress}) {

  const [searchText,setSearchText] = useState('')




  return (
    <div className='searchbar'>
     <input value={searchText} onChange={(e)=>{
      setSearchText(e.target.value)
      onSearchBtnPress(e.target.value)
     }}
     className="searchbar-style" placeholder='Enter restorant name here....'/>
     {/* <button className='search-btn' name='Search' onClick={()=>{
      onSearchBtnPress();
     }}>Search</button> */}
    </div>
  )
}