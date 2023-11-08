import { Box } from "@mui/material"
import { Header } from "../../components/Header"
import { GeographyChart } from "../../components/GeographyChart"

export const Geography=()=>{
    return(
        <Box m="20px">
              <Box display="flex">
                <Header title="GEOGRAPHY CHART" subtitle="Data visulization in geography chart" />
              </Box>
              <Box height="70vh" border="2px dashed black">
               <GeographyChart/>
              </Box>
       </Box>
    )
}