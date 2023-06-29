import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            {/* <Link to="/">Captain's Log</Link> */}
            Captain's Log
          </Typography>
          <Button color="inherit">
            <Link to="/logs">Logs</Link>
          </Button>
          <Button color="inherit">
            <Link to="/logs/new">New Log</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
