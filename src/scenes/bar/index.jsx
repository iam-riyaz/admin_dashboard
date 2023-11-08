import { Box } from "@mui/material"
import { Header } from "../../components/Header"
import { BarChart } from "../../components/BarChart.jsx"


export const Bar=()=>{
    return(
        <Box m="20px">
              <Box display="flex">
                <Header title="BAR CHART" subtitle="Simple Bar Chart" />
              </Box>
            <Box height="70vh">
            <BarChart />
            </Box>
       </Box>
    )
}