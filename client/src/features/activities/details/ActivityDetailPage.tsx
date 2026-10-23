import { Typography, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";

function ActivityDetailPage() {
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
    <Grid container spacing={3}>
      <Grid size={8}>
        <ActivityDetailsHeader activity={activity} />
        <ActivityDetailsInfo activity={activity} />
        <ActivityDetailsChat />
      </Grid>
      <Grid size={4}>
        <ActivityDetailsSidebar />
      </Grid>
    </Grid>
  );
}

export default ActivityDetailPage;
