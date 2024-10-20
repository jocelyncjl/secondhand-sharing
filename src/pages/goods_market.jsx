import {Logo} from "../components/logo";
import{Slogan} from "../components/slogan_search";
import{Persons} from "../components/persons_image";

export function GoodsMarket(){
    return(
        <div style={{paddingTop: '4%', paddingLeft: '6%', paddingRight: '6%' }}>
            <div>
                <Logo/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div style={{paddingTop: '8%', paddingLeft: '9%', paddingRight: '9%' }} className="mb-10">
                    <Slogan/>
                </div>
                <div>
                    <Persons/>
                </div>
            </div>
            
        </div>
       
    )

}