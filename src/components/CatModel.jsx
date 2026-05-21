import { useCart } from '../context/CartContext';
import { Modal, Button, Image, Badge, Row, Col } from 'react-bootstrap';

export default function CatModel({ cat, show, onHide }) {
  const { addToCart } = useCart();

  if (!cat) return null;

  const handleAdopt = () => {
    addToCart({
      id: cat.id || cat.name,
      name: cat.name || cat?.breed?.name,
      img: cat.img || cat.image || cat.imageUrl,
      price: 299,
    });
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{cat.name || cat?.breed?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={6}>
            <Image src={cat.img || cat.image || cat.imageUrl} alt={cat.name} fluid rounded />
          </Col>
          <Col md={6}>
            {cat.origin && <p className="text-muted">📍 {cat.origin}</p>}
            {cat.tags && (
              <div className="mb-3">
                {cat.tags.map((t) => (
                  <Badge pill bg="secondary" key={t} className="me-1">
                    {t}
                  </Badge>
                ))}
              </div>
            )}
            {cat.temperament && (
              <p>
                <strong>Egenskaper:</strong> {cat.temperament}
              </p>
            )}
            {cat.description && <p>{cat.description}</p>}
            {cat.weight && (
              <p>
                <strong>Vikt:</strong> {cat.weight.metric} kg
              </p>
            )}
            <div className="p-3 bg-light rounded mt-3">
              <h4>299 SEK</h4>
              <p className="text-muted mb-0">Adoptionsavgift</p>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Stäng
        </Button>
        <Button variant="primary" onClick={handleAdopt}>
          Adoptera
        </Button>
      </Modal.Footer>
    </Modal>
  );
}