import { Grid } from "@mui/material";
import Storys from "./Storys";
import Posts from "./Posts";
import FriendsBar from "./FriendsBar";
import "../../css/home.css"

export default function HomePage() {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Storys />
        <Posts />
      </Grid>
      <Grid item xs={4}>
        <FriendsBar/>
      </Grid>
    </Grid>
  );
}
