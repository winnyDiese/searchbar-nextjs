"use client"
import { useState } from 'react'
import SearchBar from './seachbar/page'
import AutherBar from './autherField/page'

export default function Home() {
  const dataArray = [
      "John",
      "Matthieu",
      "Richard",
      "Paul"
  ]

  const dataObject = [
      {name:"Mukongo", details:{age:25,type:"student"}},
      {name:"Swahili", details:{age:54,type:"pasteur"}},
      {name:"Mukongo", details:{age:22,type:"student"}},
      {name:"Mukongo", details:{age:43,type:"informaticien"}},
  ]

  const [data,setData] = useState(dataArray)
  const [data2,setData2] = useState(dataObject)

  return (
    <div className='p-5 text-sm'>
      <h1 className='text-xl uppercase'>data Array</h1>
      <SearchBar list={dataArray} setList={setData} />
      {data.map((item,index)=>(
         <p key={index}>{item}</p>
         ))}

      <hr className='mt-5'/>
      <h1 className='text-xl uppercase'>data Object</h1>
      <SearchBar placeholder={"filter by age"} filterField={item=>item.details.age.toString()} list={dataObject} setList={setData2} />
      {data2.map((item,index)=>(
        <p key={index}>{item.name} | {item.details.age} ans | {item.details.type} </p>
      ))}

    </div>
  )
}
