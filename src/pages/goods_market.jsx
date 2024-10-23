import {Logo} from "../components/logo";
import{Slogan} from "../components/slogan_search";
import{Persons} from "../components/persons_image";
import { useNavigate } from "react-router-dom";

export function GoodsMarket(){
    const navigate = useNavigate();
    
    return(
        <div style={{paddingTop: '4%', paddingLeft: '6%', paddingRight: '6%'}}>
            <div className="flex justify-between ">
                <div>
                    <Logo/>
                </div>
                <div>
                    <button className="bg-black text-white rounded-full hover:bg-gray-600 px-6 py-2 md:px-1.5rem" onClick={() => navigate("/publish")}>
                        Add Items
                    </button>
                </div>

            </div>

            <div className="flex flex-col items-center justify-center">
                <div style={{paddingTop: '8%', paddingLeft: '9%', paddingRight: '9%' }} className="mb-10">
                    <Slogan/>
                </div>
                <div>
                    <Persons/>
                </div>
            </div>

            <div className="h-px bg-gray-300 w-full"></div>
            
        </div>
       
    )

}