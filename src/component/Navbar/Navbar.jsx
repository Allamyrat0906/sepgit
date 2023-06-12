import { useTheme } from "@mui/material/styles";
import { Container, Stack, useMediaQuery } from "@mui/material";
import Mobilenavbar from "./Mobilenavbar";
import Desktopnavbar from "./Desktopnavbar";

function Navbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Container maxWidth={false}>
      <Stack className="nav" sx={{ width: "100%", zIndex: 100 }}>
        {matches ? <Mobilenavbar /> : <Desktopnavbar />}
      </Stack>
    </Container>
  );
}

export default Navbar;
