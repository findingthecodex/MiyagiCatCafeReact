import React, { useState, useEffect } from 'react';
import CatModel from '../components/CatModel';
import { Container, Row, Col, Card, Form, Button, Pagination, Spinner, Alert } from 'react-bootstrap';

function CatCard({ breed, onOpen }) {
  const imageUrl = breed.reference_image_id
    ? `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
    : 'https://placehold.co/600x400?text=Ingen+bild';

  return (
    <Col md={6} lg={4} xl={3} className="mb-4">
      <Card className="h-100 shadow-sm" onClick={() => onOpen(breed)} style={{ cursor: 'pointer' }}>
        <div style={{ height: '200px', overflow: 'hidden' }}>
            <Card.Img variant="top" src={imageUrl} alt={breed.name} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
        </div>
        <Card.Body>
          <Card.Title as="h5">{breed.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">📍 {breed.origin}</Card.Subtitle>
          <Card.Text style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
            {breed.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default function CatGallery() {
    const [breeds, setBreeds] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedBreed, setSelectedBreed] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const catsPerPage = 8; // Increased for better layout

    useEffect(() => {
        const fetchCats = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=100');
                const data = await response.json();
                setBreeds(data);
                setCurrentPage(1);
            } catch (err) {
                setError('Kunde inte hämta katter 😿');
            } finally {
                setLoading(false);
            }
        };
        fetchCats();
    }, []);

    const filteredBreeds = breeds.filter(
        (breed) =>
            breed.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (breed.origin || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastCat = currentPage * catsPerPage;
    const indexOfFirstCat = indexOfLastCat - catsPerPage;
    const currentCats = filteredBreeds.slice(indexOfFirstCat, indexOfLastCat);
    const totalPages = Math.max(1, Math.ceil(filteredBreeds.length / catsPerPage));

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    const openBreedModal = (breed) => {
        const imageUrl = breed.reference_image_id
            ? `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
            : 'https://placehold.co/600x400?text=Ingen+bild';
        setSelectedBreed({ ...breed, img: imageUrl, name: breed.name });
        setModalOpen(true);
    };

    const closeBreedModal = () => {
        setModalOpen(false);
        setSelectedBreed(null);
    };

    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Laddar...</span>
                </Spinner>
                <p className="mt-3">Laddar söta katter... 🐈</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="text-center py-5">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container className="py-5 mt-5">
            <header className="text-center mb-5">
                <h1>Våra katter 🐾</h1>
                <p className="lead text-muted">Utforska våra fina katter.</p>
                <Form.Control
                    type="text"
                    placeholder="Sök på ras eller land..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                    }}
                    className="mt-3"
                />
            </header>

            {currentCats.length > 0 ? (
                <>
                    <Row>
                        {currentCats.map((breed) => (
                            <CatCard key={breed.id} breed={breed} onOpen={openBreedModal} />
                        ))}
                    </Row>

                    <div className="d-flex justify-content-center mt-4">
                        <Pagination>
                            {[...Array(totalPages).keys()].map(number => (
                                <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => handlePageChange(number + 1)}>
                                    {number + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>
                </>
            ) : (
                <div className="text-center py-5">
                    <p className="text-muted">Hittade inga katter 😿</p>
                </div>
            )}

            <CatModel show={modalOpen} onHide={closeBreedModal} cat={selectedBreed} />
        </Container>
    );
}