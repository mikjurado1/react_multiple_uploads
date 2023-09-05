import React, { useState } from 'react'

export const MultipleFileUpload = () => {

    const [files, setFile] = useState()
    
    const handleChange = (event)=>{
        
        setFile(event.target.files);
    }

    function handleUpload(){
        
        const formData = new FormData();
        for(let i=0; i<files.length; i++){
            
            formData.append(`images[${i}]`, files[0])

        }
        fetch('https://httpbin.org/post', {
            
            method: 'POST',
            body: formData

        }).then(res => res.json()).
        then(data => console.log(data)).
        catch(err => console.log(err));
    }
  return (
    <div>
        <input type='file' multiple onChange={handleChange}/>
        <button onClick={handleUpload}>Upload</button>
    </div>
  )
}
