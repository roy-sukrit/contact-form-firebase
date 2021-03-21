import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = () => {


  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{"GET HELP"}</S.Language>
                <S.Large>                  
                    Our experts will provide you all kinds of assignment help, submit your details now 
                  
                </S.Large>
                </Col>
                <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{"Services"}</S.Title>
                <S.Large to="/" >
                  Pay only after accepting our Offer. Get in touch with our professionals and get your work done quickly.
                </S.Large>
               
               
              </Col>
                </Row>
                </Container>
                </S.Footer>

               
      </Fade>
    </Fragment>
  );
};

export default Footer;
