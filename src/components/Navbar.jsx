import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navegador(){
    return (
        <>
             <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Noticias ESP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/news">Noticias</Nav.Link>
            <Nav.Link href="/archived">Archivadas</Nav.Link>
            <Nav.Link href="/news/post">Crear Post</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Navegador;