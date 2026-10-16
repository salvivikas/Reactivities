import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type props = {
  activity: Activity;
  cancelSelectedActivity: () => void;
  openForm : (id: string) => void;
};

function ActivityDetails({ activity, cancelSelectedActivity, openForm }: props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
        alt={activity.category}
      />
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
        <Button color="primary" onClick={() => openForm(activity.id)}>Edit</Button>
        <Button onClick={cancelSelectedActivity} color="inherit">Cancel</Button>
      </CardActions>
    </Card>
  );
}

export default ActivityDetails;
