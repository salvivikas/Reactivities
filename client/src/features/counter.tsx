import { Box, Button, ButtonGroup, Typography, List, ListItemText, Paper } from "@mui/material";
import { useStore } from "../lib/hooks/useStore";
import { observer } from "mobx-react-lite";

const Counter = observer(function Counter() {
  const { counterStore } = useStore();

  return (
    <Box sx={{ display: "flex", gap: 2 , justifyContent: 'space-between' }}>
      <Box sx={{ width: "60%" }}>
        <Typography variant="h4" gutterBottom>
          {counterStore.title}
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
          The count is : {counterStore.count}
        </Typography>
        <ButtonGroup sx={{ marginTop: "3", gap: 2 }}>
          <Button variant="contained" color="error" onClick={() => counterStore.decrement()}>
            Decrement
          </Button>
          <Button variant="contained" color="success" onClick={() => counterStore.increment()}>
            Increment
          </Button>
          <Button variant="contained" color="primary" onClick={() => counterStore.increment(5)}>
            Increment by 5
          </Button>
        </ButtonGroup>
      </Box>
      <Paper sx={{ width: "40%", padding: 2 }}>
        <Typography variant="h5">
          Counter Events ({counterStore.eventsCount})
        </Typography>
        <List>
          {counterStore.events.map((event, index) => (
            <ListItemText key={index} primary={event} />
          ))}
        </List>
      </Paper>
    </Box>
  );
});

export default Counter;
