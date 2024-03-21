import React, { useState } from 'react'

// component defn
// component name must be capital
// to maintain data in react into 2 ways
// 1.state ---component inside
// 2.props---pass data as properties from one component to another component
// Hook --useState()--to craete state
// const arr=[1,2,3,4]
// const [a,b]=arr
// const [state,setState]=useState(initial value)
// state---current state of value
// setState()--informs react to update state --to re-render(return re-run)
// ------------------------------------------------------------
function AddColor() {
    const [user,setUser]=useState("Aravind")
    const [color,setColor]=useState("red")
    const [colorList,setColorList]=useState([])
    const sty={backgroundColor:color} 

    function add()
    {
        setColorList([...colorList,color])
    }
    // JSX starts
  return (
    <div className='addcolor'>
        <h1>{user}</h1>
        <input style={sty} onChange={e=>setColor(e.target.value)}/>
        <button onClick={add}>Addcolor</button>
        {
            colorList.map(c=><ColorBox color={c}/>)
        }
    </div>
  )
  //JSX ends
}

function ColorBox({color})
{
    return(
        <div style={{backgroundColor:color,width:'80%',height:'30px'}}>react</div>
    )
}

export default AddColor