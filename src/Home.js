// import { useState } from "react"

import { useState } from "react"

const Home = () => {
    const handleClick = ()=>{
        console.log('hello man')
    }
    const greet = (name)=>{
        console.log(`Hello ${name}`)
    }
    // let name =
    const [name, setName] = useState('are you wise?');
    const wiseness =()=>{
        setName('yes i am wise and even wiser')
    }
    return ( 
        <div className="Home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={()=> greet('freddy')}>click to greet</button>
            <p>{name}</p>
            <button onClick={wiseness}>on wise ones</button>
        </div>
     );
}
 
export default Home;