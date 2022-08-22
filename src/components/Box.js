import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";

const theTheme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
  },
});

const BoxSx = () => {
  return (
    <Box
      sx={{
        padding: "1px",
        width: "400px",
        height: "500px",
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
};

export default BoxSx;
