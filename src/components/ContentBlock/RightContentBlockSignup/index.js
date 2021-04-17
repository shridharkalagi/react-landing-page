import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Slide from "react-reveal/Slide";
import { lazy } from "react";
import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";
import * as S from "./styles";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
// import DateFnsUtils from '@date-io/date-fns';
import {
  Box,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
const Input = lazy(() => import("../../../common/Input"));

const RightBlock = ({ title, content, button, icon, t, id }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.RightBlockContainer>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          {/* <Slide right>
            <Input
              type="text"
              name="name"
              id="Vadhu/Vara Name"
              placeholder="Name "
              value={"aaa" || ""}
              // onChange={handleChange}
            />
            <Input
              type="text"
              name="name"
              id="Mobile Number"
              placeholder="10 digit No"
              value={"aaa" || ""}
              // onChange={handleChange}
            />
            <S.ButtonContainer>
              <Button name="submit" type="submit">
                Register
              </Button>
            </S.ButtonContainer>
          </Slide> */}
          {/* <Container maxWidth="sm"> */}
          <Formik
            initialValues={{
              email: "",
              name: "",
              mobile: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              name: Yup.string().max(255).required("First name is required"),

              mobile: Yup.string()
                .required()
                .matches(/^[0-9]+$/, "Must be only digits")
                .min(10, "Must be exactly 10 digits")
                .max(10, "Must be exactly 10 digits"),
            })}
            onSubmit={(values) => {
              console.log("slsdf" + values.gender);
              // navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <S.ContentWrapper>
                  <h6>Register for free</h6>
                </S.ContentWrapper>

                <TextField
                  error={Boolean(touched.name && errors.name)}
                  fullWidth
                  helperText={touched.name && errors.name}
                  label="Vadhu / Vara Name"
                  margin="normal"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.mobile && errors.mobile)}
                  fullWidth
                  helperText={touched.mobile && errors.mobile}
                  label="10 digit Mobile number"
                  margin="normal"
                  name="mobile"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.mobile}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <S.ButtonContainer>
                  <Button name="submit" type="submit">
                    Register
                  </Button>
                </S.ButtonContainer>
              </form>
            )}
          </Formik>
          {/* </Container> */}
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
