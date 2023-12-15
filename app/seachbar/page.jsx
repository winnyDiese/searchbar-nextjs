"use client"

import { useEffect, useState } from "react"

const SearchBar = ({list,setList,filterField = item => item,...props}) => {
    const [value,setValue] = useState('')

    useEffect(()=>{
        if(value) setList(filterList)
        else setList(list)
    },[value])

    const filterList = ()=>{
        return list.filter(
            item => filterField(item).toLowerCase().includes(value.toLocaleLowerCase())
        )
    }

    const handleChange = (e)=>{
        setValue(e.target.value)
        setList(filterList)
    }

    return (
        <div>
            <input 
                type="text"  
                name="search"
                placeholder='Search...'
                onChange={handleChange}
                value={value}
                className='border border-black p-1'
                {...props}
            />
        </div>
    );
}

export default SearchBar;
