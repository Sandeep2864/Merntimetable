import React ,{ useState } from 'react';
import axios from 'axios';

export default function RetriveMaths() {
    const [id,setId]=useState('');
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const sending= () => {
        axios.get(`http://localhost:8000/math/${id}`)
        .then((response)=> {
            setData(response.data);
        })
        .catch((error)=> {
            if(error.response && error.response.status === 404) {
                setError('Data not Found');
            }
            else {
                setError('Internal Data error');
            }
            console.log('Error fetching data:',error);
        });
    };
  return (
    <>
    <div>
      <h1>enter for details</h1>
      <label>id: </label>
      <input type="text" value={id} onChange={(e)=>setId(e.target.value)} />
      <button type="button" onClick={sending} >submit</button> 
    </div>
    <div>
        {error && <p>Error: {error}</p>}
        {data && (
            <div>
                <h2>Data retrived</h2>
                <p>maths lecture: {data.maths1}</p>
                <p>maths tutorial: {data.maths2}</p>
                <p>maths practical: {data.maths3}</p>
                </div>
        )}
    </div>
    </>
  )
}
