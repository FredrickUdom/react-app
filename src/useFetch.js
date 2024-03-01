import {useState, useEffect} from 'react';
const useFetch=(url)=>{


     // eslint-disable-next-line
     const [datas, setDatas] = useState(null);
    
     const [isPending, setIsPending]= useState(true);
 
     const [error, setError] = useState(null);

    // fetch from the fake db.json file
    useEffect(()=>{
      const abortCont = new AbortController();
        setTimeout(()=>{
          fetch(url, {signal: abortCont.signal})
          .then((res)=>{
              if(!res.ok){
                  throw Error('Could not fetch data for that resource')
              }
            return  res.json()
          })
          .then((datas)=>{
              console.log(datas)
              setDatas(datas)
              setIsPending(false)
              setError(null)
          })
          .catch(err =>{
            if(err.name === "AbortError"){
              console.log('fetch aborted')
            }else{
              const errMes = 'I can not load datas'
              setError( `${errMes}`)
              setIsPending(false)
            }
          })
        }, 1000);
        return ()=> abortCont.abort();
      }, [url]);

      return{
        datas, 
        isPending,
        error
      }
}
export default useFetch;
