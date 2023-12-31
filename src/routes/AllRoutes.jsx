
import {  Route, Routes } from "react-router-dom"
import { Team } from "../scenes/team"
import { Invoices } from "../scenes/invoices"
import { Bar } from "../scenes/bar"
import { Pie } from "../scenes/pie"
import { Line } from "../scenes/line"
import { FAQ } from "../scenes/faq"
import { Calendar } from "../scenes/calendar"
import { Geography } from "../scenes/geography"
import { Form } from "../scenes/form"
import {Dashboard} from "../scenes/dashboard"
import { Contacts } from "../scenes/contacts"


const AllRoutes= ()=>{
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/team" element={<Team/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
            <Route path="/invoices" element={<Invoices/>}></Route>
            <Route path="/form" element={<Form/>}></Route>
            <Route path="/bar" element={<Bar/>}></Route>
            <Route path="/pie" element={<Pie/>}></Route>
            <Route path="/line" element={<Line/>}></Route>
            <Route path="/faq" element={<FAQ/>}></Route>
            <Route path="/geography" element={<Geography/>}></Route>
            <Route path="/calendar" element={<Calendar/>}></Route>
        </Routes>
    )
}

export default AllRoutes