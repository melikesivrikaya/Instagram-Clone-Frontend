import "../login/../../css/login.css";
import image4 from "../../images/screenshot4.png";
import image2 from "../../images/screenshot3.png";
import googlePlay from "../../images/logos/BFthdeAc5KC.png";
import appPlay from "../../images/logos/XUCupIzGmzB.png";
import instTextLogo from "../../images/logos/ins-text-logo.png";
import facebookLogo from "../../images/logos/facebook-logo.png";
import {
  Container,
  Grid,
  TextField,
  Button,
  ListItem,
  List,
} from "@mui/material";
export default function Login() {
  return (
    <div>
      <Container className="login-container">
        <Grid
          container
          spacing={2}
          columns={16}
          textAlign={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={8} className="login-fotos">
            <img className="image1" src={image4}></img>
            <img className="image2" src={image4}></img>
          </Grid>

          <Grid item xs={8} className="login-form">
            <Grid className="box">
              <img
                className="inst-text-logo"
                src={instTextLogo}
                style={{ margin: 40 }}
              ></img>

              <div className="login">
                <TextField
                  className="login-input"
                  size="small"
                  placeholder="Telefon numarası, kullanıcı adı veya e-posta"
                ></TextField>

                <TextField
                  className="login-input"
                  size="small"
                  placeholder="Şifre"
                ></TextField>

                <Button variant="contained" className="login-button">
                  Giriş Yap
                </Button>
                <div className="or-line">
                  <hr></hr>
                </div>
              </div>

              <List className="login-options">
                <a href="#" style={{ fontWeight: " 600" }}>
                  <img className="facebook-logo" src={facebookLogo}></img>
                  Facebook ile giriş yap
                </a>

                <div style={{ margin: 10 }}>
                  <a href="#">Şifreni mi unuttun?</a>
                </div>
              </List>
            </Grid>

            <Grid className="box" padding={3}>
              <a>Hesabın yok mu? </a>
              <a href="#">Kaydol</a>
            </Grid>

            <Grid>
              <a style={{ fontSize: 14 }}>Uygulamayı indir.</a>
              <br></br>
              <img
                className="app-logo"
                src={googlePlay}
                style={{ marginTop: 13 }}
              ></img>
              <img className="app-logo" src={appPlay}></img>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Grid>
        <List className="footer">
          <a href="#">Meta</a>
          <a href="#">Hakkında</a>
          <a href="#">Blog</a>
          <a href="#">İş Fırsatları</a>
          <a href="#">Yardım</a>
          <a href="#">API</a>
          <a href="#">Gizlilik</a>
          <a href="#">Koşullar</a>
          <a href="#">Instagram Lite</a>
          <a href="#">Threats</a>
          <a href="#">Kişi Yükleme ve Hesabı Olmayan Kişiler</a>
          <a href="#">Meta Verified</a>
        </List>
        <List className="footer">
          <a href="#">Türkçe</a>
          <a href="#">©2023 Instagram from Meta</a>
        </List>
      </Grid>
    </div>
  );
}
