import "../login/../../css/login.css";
import image4 from "../../images/screenshot4.png";
import googlePlay from "../../images/logos/BFthdeAc5KC.png";
import appPlay from "../../images/logos/XUCupIzGmzB.png";
import instTextLogo from "../../images/logos/ins-text-logo.png";
import facebookLogo from "../../images/logos/facebook-logo.png";
import { useTranslation } from "react-i18next";
import { Container, Grid, TextField, Button, List } from "@mui/material";
import i18n from "../../i18n/i18n";
import { useState } from "react";
import * as dto from "../../dto/Login";
import axios from "axios";

export default function Login() {
  const { t } = useTranslation();
  const [userInfo, setUserInfo] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState();

  const changeLanguages = () => {
    i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr");
  };

  const handleLogin = async () => {
    const data: dto.LoginDto = {
      email: userInfo,
      password: password,
    };
    setToken(await authenticate(data))
  };

  const authenticate = async (data: dto.LoginDto) => {
    const response = await axios.post(
      "http://localhost:8082/login/authenticate",
      data
    );
    return response.data.token;
  };

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
                  placeholder={t("login.input-id")}
                  onChange={(e) => setUserInfo(e.target.value)}
                ></TextField>

                <TextField
                  className="login-input"
                  size="small"
                  placeholder={t("login.input-pass")}
                  onChange={(e) => setPassword(e.target.value)}
                ></TextField>

                <Button
                  variant="contained"
                  className="login-button"
                  onClick={() => handleLogin()}
                >
                  {t("login.login")}
                </Button>
                <div className="or-line">
                  <hr></hr>
                </div>
              </div>

              <List className="login-options">
                <a href="#" style={{ fontWeight: " 600" }}>
                  <img className="facebook-logo" src={facebookLogo}></img>
                  {t("login.login-with-facebook")}
                </a>

                <div style={{ margin: 10 }}>
                  <a href="#">{t("login.forgot-pass")}</a>
                </div>
              </List>
            </Grid>

            <Grid className="box" padding={3}>
              <a>{t("login.havent-account")}</a>
              <a href="#">{t("login.sign-up")}</a>
            </Grid>

            <Grid>
              <a style={{ fontSize: 14 }}>{t("login.get-app")}</a>
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
          <a href="#">{t("login.about")}</a>
          <a href="#">{t("login.blog")}</a>
          <a href="#">{t("login.jobs")}</a>
          <a href="#">{t("login.help")}</a>
          <a href="#">{t("login.api")}</a>
          <a href="#">{t("login.privacy")}</a>
          <a href="#">{t("login.terms")}</a>
          <a href="#">{t("login.locations")}</a>
          <a href="#">{t("login.instagram-lite")}</a>
          <a href="#">{t("login.threads")}</a>
          <a href="#">{t("login.contact-up")}</a>
          <a href="#">{t("login.verified")}</a>
        </List>
        <List className="footer">
          <a href="#" onClick={() => changeLanguages()}>
            {i18n.language === "tr" ? "English" : "Türkçe"}
          </a>
          <a href="#">©2023 Instagram from Meta</a>
        </List>
      </Grid>
    </div>
  );
}
