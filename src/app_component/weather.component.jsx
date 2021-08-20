import React from 'react';

/*Display of values such as Country, City and weather*/
const Weather = () =>{
 return (
 <div className="container">
     <div className="cards">
     <h1>General Roca</h1>
     <h5>
         <i className="wi wi-day-sunny display-1" /> 
     </h5>
     <h1 className="py-2">25&deg;</h1>
     {/*show minimum and maximum temperatures */}
     {minMaxTemp (19, 24)}  
     </div>
    </div>
 );
};
  
function minMaxTemp (min, max) { 
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
};

export default Weather;


