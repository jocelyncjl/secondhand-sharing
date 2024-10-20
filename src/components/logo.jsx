import React from "react";
import OtterLogo from '../images/ferret.png';


export function Logo(){
    return(
        <div className="flex flex-row items-center space-x-1">
            <div>
                <div className="text-1xl md:text-3xl" style={{ fontFamily: 'Lilita One, sans-serif',fontWeight: 400,fontStyle: 'normal'}}>ThriftShare</div>
            </div>
            <div>
                <img className="h-8 w-8 md:h-11 md:w-11" src={OtterLogo} alt="ThriftShare logo" />
            </div>
           
        </div>
    )
}

