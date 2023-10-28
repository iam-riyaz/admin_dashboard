
import  {Sidebar,Menu, MenuItem} from "react-pro-sidebar"
import { Box, IconButton, Typography,useTheme} from "@mui/material" 
import {Link} from "react-router-dom"
import { tokens } from "../../theme"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useState } from "react";
const SidebarComponent=()=>{

    const theme= useTheme();
    const colors= tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] =useState(false);
    const [selected, setSelected] = useState("Dashboard")

    return(
        <Box 
        sx="   "
        >

        </Box>
    )
}

export default SidebarComponent;