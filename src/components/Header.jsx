import { useTheme } from "@emotion/react"
import { tokens } from "../theme"
import { Box, Typography } from "@mui/material"

export const Header=({title,subtitle})=>{

    const theme=useTheme()
    const colors=tokens(theme.palette.mode)

    return(
        <Box mb="30px">
          <Typography
          variant="h2"
          color={colors.secondary[400]}
          fontWeight="bold"
          sx={{mb:"5px"}}>
              {title}
          </Typography>
          <Typography variant="h5"  color={colors.primary[400]}>
            {subtitle}
          </Typography>
        </Box>
    )
}