import React, { useState } from 'react';
import CatModel from './CatModel';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

// Data för featured-katter
const cats = [
  {
    name: 'Luna',
    tags: ['Playful', 'Loves Kids'],
    description: 'En nyfiken tjej som älskar att jaga fjäderleksaker och sova i solsken.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8hoLOjZ2nyeNKF_XWiZGvDB6yecLnDZmdUtZvUPP9fEj6T2ARomBAFlNQq_0Ly15ovuHs5i4ctHUBlh7LaxatbMJOMzEzXW9o4mG4SUrBNWzyIqfnP8VGKUm9gIO323pKoM7to7pHkciNXZtdv0aE8nPDFydjWRTFULttRa8oG01tYf4zEmduayaAc_j32XVxDXYtsrEN4_iEBvyPmxlwIquiHkKYprxNRrluY80vNF_tEUMvgtP_9IEeqDmMql4dZCjSETmAjeg',
  },
  {
    name: 'Oliver',
    tags: ['Cuddly', 'Calm'],
    description: 'Oliver är gängets lugna herre som föredrar en mjuk knä framför vild lek.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy6GkaADl1kplqzZIfiO-QWm8Og8sWkGUFiNQgt9fC0pUTM1CFUVVSFKVVYymQXyD5x5CwANhJ_75MVPntuw9Qm3rKTuDPr8wIkKIiThpTF9W811xmo1ldeVrXN-3mVXgP1jC7eGLjMoRncEtbeWjpKhXSUlWI91D0CWQygqEqQ2mbASxjqRGBNL-QXQS8QT_jJ38mDaji7YcKG6TBrNDnc3m-V9VWB6uCfu80hCH7OFQiXwGKJVoUmpgbfEEWpULRUaRFwLSjxuE',
  },
  {
    name: 'Miso',
    tags: ['Energetic', 'Talkative'],
    description: 'Liten i maten men stor i orden! Miso ser till att alla i rummet blir sedda.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3WjAt96Wyk8eV4drCLZDm_wDHnio--4JtGoAjqdX6GLsxcImfdCox6lti96rym-tPK_ipAsBgrg-Js-H2IY67NQ-djFPNYAYUx_H4rVOoTIh1EALiF_L9I_zTpCMzmYUPbFakbnvBS9y68wk6S47ur_9OSeNClJcawATujQle78WPmuDQOmOk7qTz3EMN6fdfIoERRnViz8-9X1nM8VPpX6Me77eiLY8_XUhagMaGqzldQrVUyzslZrJJsMJeICcM6hQWMJQclRY',
  },
];

function CatCard({ cat, onOpen }) {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm" onClick={() => onOpen(cat)} style={{ cursor: 'pointer' }}>
        <div style={{ height: '250px', overflow: 'hidden' }}>
            <Card.Img variant="top" src={cat.img} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title as="h3">{cat.name}</Card.Title>
          <div className="mb-3">
            {cat.tags.map((tag) => (
              <Badge pill bg="secondary" key={tag} className="me-1">
                {tag}
              </Badge>
            ))}
          </div>
          <Card.Text className="flex-grow-1">{cat.description}</Card.Text>
          <Button variant="outline-primary" onClick={(e) => { e.stopPropagation(); onOpen(cat); }}>
            Läs mer om {cat.name}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default function FeaturedFelinesSection() {
  const [selectedCat, setSelectedCat] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = (cat) => {
    setSelectedCat(cat);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedCat(null);
  };

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2>Våra Charmiga Vänner</h2>
          <p className="lead text-muted">
            Möt några av katterna som just nu hänger på kaféet och väntar på sitt förevigt-hem.
          </p>
        </div>
        <Row>
          {cats.map((cat) => (
            <CatCard key={cat.name} cat={cat} onOpen={openModal} />
          ))}
        </Row>
      </Container>

      <CatModel cat={selectedCat} show={open} onHide={closeModal} />
    </section>
  );
}