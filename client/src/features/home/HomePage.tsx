import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <Paper
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        height: "100vh",
        backgroundImage: "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", alignContent: "center", flexDirection: "column", gap: 2 }}>
        <Group sx={{ height: 100, width: 100 }} />
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>
          Reactivities
        </Typography>
      </Box>
      <Typography variant="body1">Welcome to REACTIVITIES.</Typography>
      <Link to="/activities" style={{ textDecoration: "none" }}>
        <Button variant="contained">Take me to activities!</Button>
      </Link>
    </Paper>
  );
}
