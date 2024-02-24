// import { useState } from "react"

import { useState } from "react"

const useStateComponent = () => {
    const handleClick = ()=>{
        console.log('hello man')
    }
    const greet = (name)=>{
        console.log(`Hello ${name}`)
    }
    // let name =
    const [name, setName] = useState('freddy');
    const [age, setAge] = useState(10)
    const wiseness =()=>{
        setName('dickson')
        setAge(15)
    }
    return ( 
        <div className="useStateComponent">
            <h2>useStateComponent Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={()=> greet('freddy')}>click to greet</button>
            <p>{name} is {age} years old</p>
            <button onClick={wiseness}>click to change</button>
        </div>
     );
}
 
export default useStateComponent;