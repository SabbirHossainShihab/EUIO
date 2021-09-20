
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
export const Navigation = (props) => {
  return (
    <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark' id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>



        {/* My imported Code */}
        <Container>
          <div className='navbar-header'>
            {/* <button
                type='button'
                className='navbar-toggle collapsed'
                data-toggle='collapse'
                data-target='#bs-example-navbar-collapse-1'
              >
                {' '}
                <span className='sr-only'>Toggle navigation</span>{' '}
                <span className='icon-bar'></span>{' '}
                <span className='icon-bar'></span>{' '}
                <span className='icon-bar'></span>{' '}
              </button> */}
            {/* <a className='navbar-brand page-scroll' href='https://www.easternuni.edu.bd/departmentOfCSE' data-target='#bs-example-navbar-collapse-1'>
              CSE EU
            </a>{' '} */}
            <Navbar.Brand href="https://www.easternuni.edu.bd/departmentOfCSE">CSE EU</Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="bs-example-navbar-collapse-1">
            <FaBars color='green' size='2.5rem' />

          </Navbar.Toggle>
          {/* <button type='button' className='navbar-toggle' className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'>
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button> */}
          <Navbar.Collapse id="bs-example-navbar-collapse-1">
            <Nav className="me-auto navbar-right">
              <ul className='nav navbar-nav navbar-right'>
                <li>
                  <Nav.Link href='#header' className='page-scroll'>
                    HOME
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href='#QuizDetails' className='page-scroll'>
                    OLYMPIAD DETAILS
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href='#Prize' className='page-scroll'>
                    PRIZES
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href='https://tinyurl.com/tsd6mu58' className='page-scroll'>
                    REGISTRATION
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link href='#portfolio' className='page-scroll'>
                    GALLERY
                  </Nav.Link>
                </li>

                <li>
                  <Nav.Link href='#contact' className='page-scroll'>
                    CONTACT
                  </Nav.Link>
                </li>
              </ul>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </div >
    </Navbar >


  )
}
