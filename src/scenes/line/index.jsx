import { Box } from "@mui/material"
import { Header } from "../../components/Header"
import { LineChart } from "../../components/LineChart"

export const Line=()=>{
    return(
        <Box m="20px">
              <Box display="flex">
                <Header title="LINE CHART" subtitle="welcome to Line chart page" />
              </Box>
              <Box height="70vh">
               <LineChart/>
              </Box>
       </Box>
    )
}