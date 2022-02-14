import React from 'react';

function SearchBox({onSearchChange,allowSearch}) {
        return (
        <div className={`pa2`}>
            {allowSearch === true ?
                <input onChange={onSearchChange} type="search" placeholder="search robots"
                       className={`pa2 ba b---green bg-lightest-blue`} aria-label='search robots'/>:
                <input onChange={onSearchChange} type="search" placeholder="search robots"
                       className={`pa2 ba b---green bg-lightest-blue`} disabled/>
            }
        </div>
    );
}

export default SearchBox;