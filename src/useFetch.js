import { useState, useEffect} from 'react';

const useFetch =(url) => {
    // aray and destructing
    const [data, setData] = useState(null); 
    const [isPending, setIsPending] = useState(true);

    // state fo error
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortContoller = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortContoller.signal})
        //it returns a promise

        // .then(response =>response.json)
          .then(res => {
              if (!res.ok) {
                  throw Error('could not fetch the data for that resources')
              }
              return res.json();           
          })
          .then(data => {
                setData(data);
                setIsPending(false);
                setError(null)
          })
          .catch(err  => {
              if (err.name === 'AbortError') {
               console.log('fetch request canceled');
              } else {
                setIsPending(false)
                setError(err.message)
              }
              
          })
        }, ); 

        //clean up function

        return () => abortContoller.abort();
        // console.log('useEffect runnnin');
        // console.log(name);
      
        //passing a dependancy aay
    }, [url]);
    return {data, isPending, error};
    
}

export default useFetch;