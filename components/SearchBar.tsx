'use client'

import { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {

    const [manufacturere, setManufacturere] = useState('')

    const handleSearch = () => {

    }
    
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer 
                    manufacturer={manufacturere}
                    setManufacturer={setManufacturere}
                />
            </div>
        </form>
    )
}

export default SearchBar