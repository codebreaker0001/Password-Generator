import { useCallback, useEffect, useState } from 'react'
import clipboardCopy from 'clipboard-copy';


import './App.css'
import CopyToClipboardButton from './copyToClipBoard';

function App() {
  // const [count, setCount] = useState(0)
  let [length,setLength] = useState(8)
  let [number,setNumber] = useState(false)
  let [char,setChar] = useState(false)
  let [password,setPassword]  = useState(null)
  let [text,setText] = useState("")

  const PasswordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ASDFGHJKLOPIYTREWQZXCVBNMasdfgjklouuytreewqvcbmxbgfcn"
    if(number) str+="1234567890"
    if(char) str+="!@#$%^&*()}{][|"

    for(let i = 1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char)
    }
    setPassword(pass);
    console.log(password);
    setText(pass)

  },[length,number,char,setPassword])

  // PasswordGenerator()

  useEffect(()=>{
    PasswordGenerator()

  },[length,number,char,PasswordGenerator])

  
  return (
    <>  
      {/* <h1 className="text-4xl text-center text-white ">{a}</h1> */}
      {/* <CopyToClipboardButton textToCopy={text}/> */}
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-white-300 bg-red-400 text-center  ">
        <h1 className=' text-center text-white my-6'> Password Generator</h1>
          <div className="flex shadow-sm rounded-lg overflow-hidden mb-4">
            <input type="text" value={password}
            className="outline-none w-full py-1 px-3"
            placeholder='Password'
            readOnly />
            {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={(e) =>setText(e.target.password) }>
              Copy
            </button> */}
                  <CopyToClipboardButton textToCopy={text}/>

          </div>
          <div className="flex text-sm gap-x-3">
            <div className=' flex items-center gap-x-2'>
              <input type="range" min={6} max={50} value={length} className=' cursor-pointer' onChange={(e) =>{setLength(e.target.value)}}/>
              <label  >Length:{length}</label>
              <input type="checkbox" id='numberInput' onChange={()=>{setNumber((prev) =>(!prev) )}} />
              <label htmlFor="">Add Numbers</label>
              <input type="checkbox" id='numberInput' onChange={()=>{setChar((prev) =>(!prev) )}} />
              <label >Add Characters</label>
            </div>

          </div>
          {/* hello */}
      </div>
    </>
  )
}

export default App
