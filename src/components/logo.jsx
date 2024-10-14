import React from "react";
import OtterLogo from '../images/ferret.png';


export function Logo(){
    return(
        <div className="flex flex-row items-center space-x-1">
            <div>
                <div className="text-2xl md:text-3xl" style={{ fontFamily: 'Lilita One, sans-serif',fontWeight: 400,fontStyle: 'normal'}}>ThriftShare</div>
            </div>
            <div>
                <img className="h-9 w-9 md:h-11 md:w-11" src={OtterLogo} alt="website logo image" />
 
       
            </div>
           
        </div>
    )

}

