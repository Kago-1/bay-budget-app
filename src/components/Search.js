import React from 'react'

function Search({handleSearch}){
  return (
    <div className='search-btn'>
        <input placeholder='search item' onChange={handleSearch}></input>
    </div>
  )
}

export default Search