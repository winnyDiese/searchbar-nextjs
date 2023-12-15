import Image from 'next/image'

export default function Home() {
  const dataArray = [
      "John",
      "Matthieu",
      "Richard"
  ]

  const dataObject = [
      {name:"Mukongo", details:{age:25,type:"student"}},
      {name:"Swahili", details:{age:54,type:"pasteur"}},
      {name:"Mukongo", details:{age:22,type:"student"}},
      {name:"Mukongo", details:{age:43,type:"informaticien"}},
  ]

  return (
    <div className='p-5 text-sm'>
      <h1 className='text-xl uppercase'>data Array</h1>
      {dataArray.map(item=>(
        <p>{item}</p>
      ))}

      <hr className='mt-2'/>
      <h1 className='text-xl uppercase'>data Object</h1>
      {dataObject.map(item=>(
        <p>{item.name} | {item.details.age} ans | {item.details.type} </p>
      ))}

    </div>
  )
}
