import { Button, Container, Grid, List, TextField } from "@mui/material";
import googlePlay from "../../images/logos/BFthdeAc5KC.png";
import appPlay from "../../images/logos/XUCupIzGmzB.png";
import facebookLogo from "../../images/logos/facebook-logo.png";
import instTextLogo from "../../images/logos/ins-text-logo.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import * as dto from "../../dto/Login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../login/Footer";

export default function Index() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSignUp = () => {
    if (dataControl()) {
      const data: dto.SignUpDto = {
        email: email,
        fullname: fullname,
        username: username,
        password: password,
      };
      register(data);
      navigate("/");
    }
  };

  const register = (data: dto.SignUpDto) => {
    const response = axios.post("http://localhost:8082/login/register", data);
    console.log(response);
  };

  const dataControl = (): boolean => {
    if (
      username.length === 0 ||
      fullname.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      setErrorMessage("login.input-emty-error");
      setIsError(true);
      return false;
    } else if (password.length < 6) {
      setErrorMessage("login.password-error");
      setIsError(true);
      return false;
    }
    return true;
  };

  return (
    <div>
      <Container className="register-container">
        <Grid className="box" style={{ paddingBottom: 30 }}>
          <img
            className="inst-text-logo"
            src={instTextLogo}
            style={{ margin: 40 }}
          ></img>

          <div className="login">
            <div className="a">
              <a>Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.</a>
            </div>
            <Button variant="contained" className="login-button">
              <img className="facebook-logo" src={facebookLogo}></img>
              {t("login.login-with-facebook")}
            </Button>

            <div className="or-line">
              <hr></hr>
            </div>

            <TextField
              className="login-input"
              size="small"
              placeholder={t("login.input-email")}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>

            <TextField
              className="login-input"
              size="small"
              placeholder={t("login.fullname")}
              onChange={(e) => setFullname(e.target.value)}
            ></TextField>

            <TextField
              className="login-input"
              size="small"
              placeholder={t("login.input-pass")}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>

            <TextField
              className="login-input"
              size="small"
              placeholder={t("login.username")}
              onChange={(e) => setUsername(e.target.value)}
            ></TextField>

            <List>
              <div className="a">
                Hizmetimizi kullanan kişiler senin iletişim bilgilerini
                Instagram'a yüklemiş olabilir. Daha Fazla Bilgi Al
              </div>

              <div>
                Kaydolarak, Koşullarımızı, Gizlilik İlkemizi ve Çerezler
                İlkemizi kabul etmiş olursun.
              </div>
            </List>

            {isError && (
            <div className="error-message" style={{marginBottom : 10}}>
              <a>{t(errorMessage)}</a>
            </div>
          )}

            <Button
              variant="contained"
              className="login-button"
              onClick={() => handleSignUp()}
            >
              {t("login.sign-up")}
            </Button>
          </div>
        </Grid>

        <Grid className="box" padding={3}>
          <a>{t("login.havent-account")}</a>
          <a href="register">{t("login.sign-in")}</a>
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
      </Container>
      <Footer />
    </div>
  );
}
