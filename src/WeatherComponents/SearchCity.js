import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const SearchCity = ({ submit, value, change}) => {
    return (
        <div>
           <form className='searchBar' onSubmit={submit}>
               <input className='searchInput' type="text" value={value} placeholder="Enter city" onChange={change}/>
               <span className='searchIcon'>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
            </form>
        </div>
    )
}
