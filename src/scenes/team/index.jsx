import { Box, Typography, useTheme } from "@mui/material";
import { Header } from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined"
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"

export const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign:"left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
     
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell:({row:{access}})=>{
         return(
            <Box
            width="60%"
            m=" auto"
            p="5px"
            display="flex"
            justifyContent="left"
            backgroundColor={
                access==="admin"?colors.background2[500]:colors.background2[600]
            }
            borderRadius="4px"
            >
                {access==="admin" && <AdminPanelSettingsOutlinedIcon/>}
                {access==="manager" && <SecurityOutlinedIcon/>}
                {access==="user" && <LockOpenOutlinedIcon/>}
                <Typography color={colors.primary[100]} sx={{ ml:"5px"}}>
                    {access}
                </Typography>

            </Box>
         )
      }
    },
    
  ];

  return (
    <Box m="20px">
      <Box display="flex">
        <Header title="TEAM" subtitle="Managing the Team Members" />
      </Box>
      <Box  height="75vh" sx={{
        "& .MuiDataGrid-root":{
            border:"none"
        },
        "& .MuiDataGrid-cell":{
            borderBottom:"none"
        },
        "& .name-column--cell":{
            color:colors.secondary[400],
            fontWeight:"bold"
        },
        "& .MuiDataGrid-columnHeaders":{
            backgroundColor:colors.background2[500],
            borderBottom:"none"
        },
        "& .MuiDataGrid-columnHeaderTitle":{
            fontWeight:"bold"
        },
        " & .MuiDataGrid-virtualScroller":{
            backgroundColor:colors.background[400]
        },
        "& .MuiDataGrid-footerContainer":{
            borderTop:"none",
            backgroundColor:colors.background2[500]
        }
      }}>
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};
