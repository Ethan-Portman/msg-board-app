import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = ({ currentSection, setCurrentSection }) => {
    const sections = ['home', 'messageboard', 'private messages'];

    const handleNavClick = (section) => {
        setCurrentSection(section);

    };

    return (
        <Navbar bg="dark" data-bs-theme="dark" className='mb-4'>
            <Container>
                <Navbar.Brand href="#home">📬</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {sections.map((section) => (
                            <Nav.Link
                                key={section}
                                onClick={() => handleNavClick(section)}
                                className={currentSection === section ? 'active' : ''}
                            >
                                {section}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;