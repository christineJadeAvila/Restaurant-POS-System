import { useState, useEffect } from "react"

function Search({ searchQuery, setSearchQuery }) {
    
    return (
        <>
            <input 
                type="search"
                className="search--bar"
                placeholder="Search something..."    
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </>
    )
}

export default Search