import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MiyagiImg from '../assets/images/miyagi3.png';

export default function HeroSection() {
  return (
    <Container fluid className="p-0">
      <div className="position-relative text-white" style={{ height: '70vh', minHeight: '400px' }}>
        <img
          src={MiyagiImg}
          alt="Miyagi the cat"
          className="w-100 h-100"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        ></div>
        <div className="position-absolute top-50 start-50 translate-middle text-center w-75">
          <h1 className="display-3 fw-bold">Välkommen till Miyagis Kattkafé</h1>
          <p className="lead my-3">
            En fristad för katter och människor. Hitta din nya bästa vän eller bara njut av en kaffe i gott sällskap.
          </p>
          <div className="d-flex justify-content-center gap-2 mt-4">
            <Button as={Link} to="/cats" variant="primary" size="lg">
              Hitta en vän
            </Button>
            <Button as={Link} to="/boka" variant="light" size="lg">
              Boka bord
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}