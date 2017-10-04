import 'preact'
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap'

export default (props) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/'>React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href='/profile'><Glyphicon glyph='list' /> Profile</NavItem>
        <NavItem eventKey={2} href='/profile/stu'><Glyphicon glyph='user' /> Stu</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href='/profile'>Profile</NavItem>
        <NavItem eventKey={2} href='/profile/stu'>Stu</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
