import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
  activity: Activity;
  selectActivity: (id: string) => void;
};

function ActivityCard({ activity, selectActivity }: Props) {
  const { deleteActivity } = useActivities();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {activity.title}
        </Typography>
        <Typography sx={{ color: "text.secondary", marginBottom: 1 }}>{activity.date}</Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          {activity.city} / {activity.venue}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between", pb: 2 }}>
        <Chip label={activity.category} variant="outlined" color="primary" />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" color="primary" onClick={() => selectActivity(activity.id)}>
            View
          </Button>
          <Button variant="contained" disabled={deleteActivity.isPending} color="error" onClick={() => deleteActivity.mutate(activity.id)}>
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export default ActivityCard;
