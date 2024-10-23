import {GoodsMarket} from "./pages/goods_market";
import {Form} from "./pages/input_form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<GoodsMarket/>}/>
        <Route path='/publish' element={<Form/>}/>
    
      </Routes>
    </Router>





   
  )
}