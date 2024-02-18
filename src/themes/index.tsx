import { createTheme } from "@mui/material/styles";
import { appColor } from "./colors";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: appColor.primaryLight,
      main: appColor.primaryMain,
    },
    text: {
      primary: appColor.textPrimary,
      secondary: appColor.textWhite,
      disabled: appColor.textHint,
    },
    background: {
      paper: appColor.paper,
      default: appColor.background,
    },
  },
});

export default theme;
