import { AccessTime, Place } from "@mui/icons-material";
import { Avatar, Box, Button, Card, CardContent, CardHeader, Chip, Divider, Typography } from "@mui/material";
import { Link } from "react-router";
import { formatDate } from "../../../lib/util/util";

type Props = {
  activity: Activity;
};

function ActivityCard({ activity }: Props) {
  const isHost = false;
  const isGoing = false;
  const label = isHost ? "You are hosting this activity" : "You are going";
  const isCancelled = false;
  const color = isHost ? "secondary" : isGoing ? "warning" : "default";

  return (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <CardHeader
          avatar={<Avatar sx={{ height: 80, width: 80 }}></Avatar>}
          title={activity.title}
          subheader={
            <>
              Hosted by <Link to={`profiles/bob`}>Bob</Link>
            </>
          }
          slotProps={{
            title: {
              fontWeight: "bold",
              fontSize: 20,
            },
            subheader: {
              fontSize: 14,
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mr: 2 }}>
        {(isHost || isGoing) && <Chip label={label} color={color} sx={{ borderRadius: 2 }} />}
        {isCancelled && <Chip label="Cancelled" color="error" />}
      </Box>
      <Divider sx={{ mb: 3 }}></Divider>

      <CardContent sx={{ p: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2, px: 3 }}>
          <Box sx={{ display: "flex", flexGrow: 0, alignItems: "center" }}>
            <AccessTime sx={{ mr: 1 }} />
            <Typography variant="body2" noWrap>
              {formatDate(activity.date)}
            </Typography>
          </Box>
          <Place sx={{ mr: 1, ml: 3 }} />
          <Typography variant="body2">{activity.venue}</Typography>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", backgroundColor: "gray.200", gap: 2, py: 3, pl: 3 }}>Attendees go here</Box>
      </CardContent>
      <CardContent sx={{ pb: 2 }}>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          {activity.description}
        </Typography>
        <Button variant="contained" color="primary" component={Link} to={`/activities/${activity.id}`} sx={{ display: "flex", justifyContent: "self-end", borderRadius: 3 }}>
          View
        </Button>
      </CardContent>
    </Card>
  );
}

export default ActivityCard;
