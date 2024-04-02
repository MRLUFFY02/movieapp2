import {useState,useEffect} from 'react'
function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    // mounting phse--componentDidmount
    useEffect(
      () => {
       setTimeout(()=>setCount(10),2000)
      }, []); // <- add the count variable here
    
    //updating phase -- componentDidUpdate
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  
    //unmounting phase--componentWillUnmounnt()
    useEffect(() => {
        return(()=>alert('counter component is removed'))
      }, []); // <- add the count variable here
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
  }
  
  export default Counter
