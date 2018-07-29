import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import styled from 'styled-components';
import { Container } from 'theme/grid';
import Header from './Header';
import { Grid, Row, Col } from 'react-bootstrap';

const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Grid>
            <Row className="show-grid">
              <Col md={4}>
                <Image src={require('../assets/me.jpg')} />
              </Col>
              <Col md={8}>
                <h2 className="text1"><b>Hello,</b> </h2>
                <h3 className="text2">a bit about me:</h3>
                <p>Ad deserunt instituendarum. Velit an laboris e minim, a sed familiaritatem.
                  Admodum quem elit in quid do velit fidelissimae deserunt anim expetendis.
                  Aliquip aut veniam sed quis cernantur eu quorum legam.Cernantur relinqueret qui
                  doctrina ea labore ad eiusmod te esse. Malis cupidatat eruditionem. Nostrud elit
                  legam ne malis, admodum malis multos senserit eram in pariatur aliqua excepteur
                  ubi occaecat relinqueret qui pariatur, officia anim admodum expetendis id e
                  velit anim aut voluptate, noster te litteris an summis, proident quid labore
                  admodum tempor.
                </p>
              </Col>
            </Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default hot(module)(Home);
