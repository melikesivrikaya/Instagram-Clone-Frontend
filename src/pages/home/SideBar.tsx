import { Grid } from "@mui/material";
import "../../css/home.css";
import * as item from "../../datas/sidebarItem";
export default function SideBar() {
  return (
    <Grid item xs={2} className="sidebar-container">
      <div className="sidebar">
        <item.instagramLogo />
        <div>
          <item.homepage />
          <item.search />
          <item.explore />
          <item.reels />
          <item.message />
          <item.notifications />
          <item.create />
          <item.profile />
        </div>
        <div className="sidebar-footer">
          <item.threads />
          <item.more />
        </div>
      </div>
    </Grid>
  );
}
