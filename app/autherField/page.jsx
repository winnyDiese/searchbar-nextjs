import React, { useEffect, useState } from 'react';

const AutherBar = ({list,setList,filterField = item => item,...props}) => {
    const [value, setValue] = useState('')

    useEffect(()=>{
        if(value) {
            setList(filterList())
        }else setList(list)
    },[value])

    const filterList = ()=>{
        return list.filter(item => filterField(item).toLowerCase().includes(value.toLocaleLowerCase()))
    }

    const handleChange = event => {
        setValue(event.target.value)
        setList(filterList)
    }


    return (
        <div>
            <input type="text" placeholder='Search...' name="search" onChange={handleChange} value={value} {...props} className='border border-black' />
        </div>
    );
}

export default AutherBar;
