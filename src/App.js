import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Home from "./Home";

export const themeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#837257",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#252424",
      paper: "#2f2f2f",
    },
    text: {
      secondary: "#e0e0e0",
      primary: "#ffffff",
    },
  },
};

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
