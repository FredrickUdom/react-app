import { useState } from "react";

const Home = () => {
    const [] = useState([
        {
            title: 'My new website',
            body: 'this is my website',
            id:1
        },

        {
            title: 'Welcome party',
            body: 'this is a welcome party',
            id:2
        },

        {
            title: 'Web dev top tool',
            body: 'this is for your web dev tools',
            id:3
        },
    ]);
    return ( 
        <h1>welcome to homepage</h1>
     );
}
 
export default Home;