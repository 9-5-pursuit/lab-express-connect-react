import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="new-log"
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1, scale: 1.3 }}
      transition={{ duration: 3 }}
      exit={{ x: window.innerWidth, transition: { duration: 0.8 } }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h1" gutterBottom>
          Welcome to Captain's Log
        </Typography>
      </Container>
    </motion.div>
  );
}
