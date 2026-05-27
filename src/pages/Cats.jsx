import React, { useState, useEffect } from 'react';
import CatModel from '../components/CatModel';
import { Container, Row, Col, Card, Form, Pagination, Spinner, Alert } from 'react-bootstrap';

// Vi hanterar hover-state lokalt i CatCard-komponenten
function CatCard({ breed, onOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  const imageUrl = breed.reference_image_id
    ? `https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`
    : 'https://placehold.co/600x400?text=Ingen+bild';

  // Hover-styling som aktiveras dynamiskt
  const cardStyle = {
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
    boxShadow: isHovered 
      ? '0 10px 20px rgba(0,0,0,0.15)' 
      : '0 2px 4px rgba(0,0,0,0.05)'
  };

  return (
    // row-cols hanterar bredden, men vi sätter xs={12} som fallback för mobiltelefoner
    <Col xs={12} className="mb-4">
      <Card 
        className="h-100" 
        onClick={() => onOpen(breed)} 
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ height: '150px', overflow: 'hidden' }}>
          <Card.Img 
            variant="top" 
            src={imageUrl} 
            alt={breed.name} 
            style={{ objectFit: 'cover', height: '100%', width: '100%' }} 
          />
        </div>
        <Card.Body className="p-3">
          <Card.Title as="h6" className="text-truncate">{breed.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted small">📍 {breed.origin}</Card.Subtitle>
          <Card.Text style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: '0.85rem'
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
    const catsPerPage = 10; // 10 katter totalt blir perfekt uppdelat på två rader á 5 stycken

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
                    {/* row-cols-md-3 sätter 3 per rad på surfplattor, row-cols-lg-5 sätter exakt 5 per rad på datorskärmar */}
                    <Row className="row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
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