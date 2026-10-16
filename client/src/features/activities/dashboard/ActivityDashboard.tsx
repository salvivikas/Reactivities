import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  selectedActivity?: Activity;
  openForm: (id: string) => void;
  closeForm: () => void;
  submitForm: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  editMode: boolean;
};

function ActivityDashboard({
  activities,
  selectActivity,
  cancelSelectedActivity,
  selectedActivity,
  openForm,
  closeForm,
  submitForm,
  deleteActivity,
  editMode,
}: Props) {
  return (
    <Grid container spacing={3}>
      <Grid size={7}>
        <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetails activity={selectedActivity}
          cancelSelectedActivity={cancelSelectedActivity}
          openForm={openForm}

          />
        )}
        {editMode && <ActivityForm
           activity={selectedActivity} closeForm={closeForm} submitForm={submitForm}
        />}
      </Grid>
    </Grid>
  );
}

export default ActivityDashboard;
