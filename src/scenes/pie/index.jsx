import { Box } from "@mui/material";
import { Header } from "../../components/Header";
import { PieChart } from "../../components/PieChart";

export const Pie = () => {
  return (
    <Box m="20px">
      <Box display="flex">
        <Header title="PIE CHART" subtitle="welcome to pie chart" />
      </Box>
      <Box height="70vh">
        <PieChart/>
      </Box>
    </Box>
  );
};
