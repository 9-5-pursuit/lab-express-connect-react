import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

// mui table
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// select input
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const API = process.env.REACT_APP_API_URL;

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  console.log(logs);

  const handleChange = (event) => {
    setSortBy(event.target.value);
    console.log(event.target.id);
  };
  const handleChange2 = (event) => {
    setOrder(event.target.value);
  };

  function sortByValue() {
    if (sortBy === "captainName") {
      if (order === "ascending") {
        return logs.sort((a, b) =>
          a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 : 1
        );
      } else {
        return logs.sort((a, b) =>
          a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? 1 : -1
        );
      }
    } else if (sortBy === "daysSinceLastCrisis") {
      if (order === "ascending") {
        return logs.sort((a, b) =>
          Number(a[sortBy]) < Number(b[sortBy]) ? -1 : 1
        );
      } else {
        return logs.sort((a, b) =>
          Number(a[sortBy]) < Number(b[sortBy]) ? 1 : -1
        );
      }
    } else {
      return logs;
    }
  }

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((data) => setLogs(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <motion.div
      className="Logs"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
    >
      {/* select input  */}

      <Grid container spacing={1}>
        <Grid item xs={6}></Grid>

        <Grid item xs={3}>
          <Box sx={{ maxWidth: 200, ml: "auto", mb: "10px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortBy}
                label="SortBy"
                onChange={handleChange}
              >
                <MenuItem value={"captainName"}>Captain's Name</MenuItem>
                <MenuItem value={"daysSinceLastCrisis"}>
                  Days since last crisis
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ maxWidth: 200, ml: "auto", mb: "10px" }}>
            <FormControl fullWidth>
              <InputLabel id="order-select-label">Order</InputLabel>
              <Select
                labelId="order-select-label"
                id="order-select"
                value={order}
                label="order"
                onChange={handleChange2}
              >
                <MenuItem value={"ascending"}>Ascending</MenuItem>
                <MenuItem value={"descending"}>Descending</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>

      {/* table  */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Mistakes </StyledTableCell>
              <StyledTableCell align="right">Captain's Name</StyledTableCell>
              <StyledTableCell align="right">Title</StyledTableCell>
              <StyledTableCell align="right">
                Days Since Last Crisis
              </StyledTableCell>
              <StyledTableCell align="right">
                Mistakes were made today
              </StyledTableCell>
              <StyledTableCell align="right">See This Log</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortByValue().map((log, index) => (
              <StyledTableRow key={log.post}>
                <StyledTableCell scope="row">{log.post}</StyledTableCell>
                <StyledTableCell align="right">
                  {log.captainName}
                </StyledTableCell>
                <StyledTableCell align="right">{log.title}</StyledTableCell>
                <StyledTableCell component="th" align="right">
                  {log.daysSinceLastCrisis}
                </StyledTableCell>
                <StyledTableCell component="th" align="right">
                  {log.mistakesWereMadeToday ? "True" : "False"}
                </StyledTableCell>
                <StyledTableCell component="th" align="right" className="Log">
                  <Link to={"/logs/" + index} className="log-link">
                    Link
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </motion.div>
  );
}
