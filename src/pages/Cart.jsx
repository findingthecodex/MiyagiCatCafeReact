import React, { useState, useRef, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Container, Row, Col, Card, Button, Modal, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CheckoutModal({ show, onHide, cartCost, clearCart }) {
    const [formData, setFormData] = useState({ name: '', email: '', address: '' });
    const firstInputRef = useRef(null);

    useEffect(() => {
        if (show) {
            setTimeout(() => firstInputRef.current?.focus(), 1);
        }
    }, [show]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    onHide();
    
    // En renare, mer strukturerad alert med emojier
    alert(
        `🎉 TACK FÖR DIN ORDER!\n` +
        `----------------------------------------\n\n` +
        `Din beställning är nu på väg till:\n` +
        `${formData.name}\n` +
        `${formData.address}\n\n` +
        `----------------------------------------\n` +
        `Totalt att betala: ${cartCost} SEK\n\n` +
        `Ha en fantastisk dag!`
);

    clearCart();
    setFormData({ name: '', email: '', address: '' });
};

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Namn</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} ref={firstInputRef} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>E-postadress</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Leveransadress</Form.Label>
                        <Form.Control as="textarea" name="address" value={formData.address} onChange={handleChange} required rows={3} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">Skicka order</Button>
                        <Button variant="secondary" onClick={onHide}>Avbryt</Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}


export default function CartPage() {
    const { cart, removeFromCart, updateQuantity, clearCart, cartCost, cartTotal } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (cart.length === 0) {
        return (
            <Container className="text-center py-5 mt-5">
                <h1>Din kundvagn</h1>
                <p className="lead text-muted">Kundvagnen är tom 😿</p>
                <Button as={Link} to="/cats" variant="primary">Fortsätt shoppa</Button>
            </Container>
        );
    }

    return (
        <Container className="py-5 mt-5">
            <h1>Din kundvagn</h1>
            <Row>
                <Col lg={8}>
                    {cart.map((item) => (
                        <Card key={item.id} className="mb-3 shadow-sm">
                            <Card.Body>
                                <Row className="align-items-center">
                                    <Col md={2}>
                                        <Card.Img src={item.img} alt={item.name} />
                                    </Col>
                                    <Col md={4}>
                                        <h5>{item.name}</h5>
                                        <p className="text-primary fw-bold">{item.price} SEK</p>
                                    </Col>
                                    <Col md={3}>
                                        <InputGroup>
                                            <Button variant="outline-secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                                            <Form.Control value={item.quantity} readOnly className="text-center" />
                                            <Button variant="outline-secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                                        </InputGroup>
                                    </Col>
                                    <Col md={3} className="text-end">
                                        <h5>{item.price * item.quantity} SEK</h5>
                                        <Button variant="link" className="text-danger" onClick={() => removeFromCart(item.id)}>Ta bort</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
                <Col lg={4}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title as="h4">Beställningssammanfattning</Card.Title>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <span>Antal katter:</span>
                                <strong>{cartTotal}</strong>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                                <span>Totalt pris:</span>
                                <strong className="text-primary fs-5">{cartCost} SEK</strong>
                            </div>
                            <hr />
                            <div className="d-grid gap-2">
                                <Button variant="primary" onClick={() => setIsModalOpen(true)}>Gå till checkout</Button>
                                <Button variant="outline-danger" onClick={clearCart}>Töm kundvagn</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <CheckoutModal show={isModalOpen} onHide={() => setIsModalOpen(false)} cartCost={cartCost} clearCart={clearCart} />
        </Container>
    );
}