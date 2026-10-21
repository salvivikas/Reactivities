import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";

function ActivityDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  //const activity = {} as Activity;
  const { activity, isLoadingActivity } = useActivities(id);

  if (isLoadingActivity) {
    return (
      <Typography variant="h5" align="center" sx={{ mt: 10 }}>
        Loading...
      </Typography>
    );
  }
  if (!activity) {
    return (
      <Typography variant="h5" align="center" sx={{ mt: 10 }}>
        Activity Not Found
      </Typography>
    );
  }
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia component="img" src={`/images/categoryImages/${activity.category}.jpg`} alt={activity.category} />
      <CardContent>
        <Typography variant="h5" component="div">
          {activity.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "loght" }}>
          {activity.date}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => navigate(`/manage/${activity.id}`)}>
          Edit
        </Button>
        <Button onClick={() => navigate("/activities")}>Back</Button>
      </CardActions>
    </Card>
  );
}

export default ActivityDetails;
