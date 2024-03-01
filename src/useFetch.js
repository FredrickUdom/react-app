import {useState, useEffect} from 'react';
const useFetch=(url)=>{


     // eslint-disable-next-line
     const [datas, setDatas] = useState(null);
    
     const [isPending, setIsPending]= useState(true);
 
     const [error, setError] = useState(null);

    // fetch from the fake db.json file
    useEffect(()=>{
        setTimeout(()=>{
          fetch(url)
          .then((res)=>{
              if(!res.ok){
                  throw Error('Could not fetch data for that resource')
              }
            return  res.json()
          })
          .then((data)=>{
              console.log(data)
              setDatas(data)
              setIsPending(false)
              setError(null)
          })
          .catch(err =>{
              const errMes = 'I can not load datas'
              setError( `${errMes}`)
              setIsPending(false)
          })
        }, 1000);
      }, [url]);

      return{
        datas, 
        isPending,
        error
      }
}
export default useFetch;
