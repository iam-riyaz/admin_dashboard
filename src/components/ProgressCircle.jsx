import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

export const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.background2[600]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.background2[500]} ${angle}deg 360deg),
            ${colors.secondary[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

