import React from 'react';
import Loader from 'react-loader-spinner'

const Callback = ({location, handleCode}) =>{

    const code = location.search.split("?code=")[1];
    handleCode(code)
    return(
        <div className="App">
        <Loader 
           type="Audio"
           color="#202734"
           height="50%"	
           width="50%"
        />   
        </div>
       );
}

export default Callback;
