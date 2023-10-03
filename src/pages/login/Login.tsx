import "../login/../../css/login.css";
import image1 from "../../images/screenshot1.png";
import { Button, Container, Grid, ImageList, ImageListItem, TextField } from "@mui/material";

export default function Login() {
  return (
    <div >
      <Container>
        <Grid xs={12} className="login-container">
           <ImageList>
          <ImageListItem>
                <img src={image1}></img>
          </ImageListItem>
        </ImageList>
          <TextField id="outlined-basic" size="small" />
          <TextField id="outlined-basic" size="small" />
          <Button  variant="contained" >Giriş Yap</Button>
        </Grid>
      </Container>
    </div>
  );
}
