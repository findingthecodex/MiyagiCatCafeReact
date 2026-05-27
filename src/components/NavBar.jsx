import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';

export default function NavBar() {
  const { pathname } = useLocation();
  const { cartTotal } = useCart();

  return (
    <>
      <style>{`
        /* Tvinga hover på ALLA länkar, oavsett om de är aktiva eller inte */
        .navbar.custom-nav .nav-link:hover,
        .navbar.custom-nav .nav-link.active:hover {
        color: #f9a01a !important;
        /* text-shadow: horisontell vertikal oskärpa färg */
        text-shadow: 0 0 10px rgba(255, 179, 0, 0.75) !important;
        opacity: 1 !important;
        transition: all 0.2s ease-in-out;
        }

        /* Hover på kaféets namn */
        .navbar.custom-nav .navbar-brand:hover {
          color: #ff8c00 !important;
        }

        /* Hover på varukorgsknappen */
        .btn.cart-btn:hover {
          background-color: #e07b00 !important;
          border-color: #e07b00 !important;
          color: white !important;
        }
      `}</style>

      <Navbar bg="light" expand="md" fixed="top" className="shadow-sm custom-nav">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            Miyagis Kattkafé
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" active={pathname === '/'}>
                Hem
              </Nav.Link>
              <Nav.Link as={Link} to="/cats" active={pathname === '/cats'}>
                Våra katter
              </Nav.Link>
              <Nav.Link as={Link} to="/adoptionsguide" active={pathname === '/adoptionsguide'}>
                Adoptionsguide
              </Nav.Link>
              <Nav.Link as={Link} to="/var-story" active={pathname === '/var-story'}>
                Vår story
              </Nav.Link>
            </Nav>
            <Nav>
              <Button as={Link} to="/cart" variant="primary" className="position-relative cart-btn">
                <span className="material-symbols-outlined">shopping_bag</span>
                {cartTotal > 0 && (
                  <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                    {cartTotal}
                  </Badge>
                )}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}