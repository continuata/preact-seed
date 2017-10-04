import 'preact'
import { Button, Jumbotron } from 'react-bootstrap'

export default ({ children, ...props }) => (
  <Jumbotron>
    <h1>Home</h1>
    <h2>{props.app.foo}</h2>
    <p>This is the Home component.</p>
    <Button bsStyle='primary' onClick={props.doSomething.bind(this, {foo: 'bar'})}>
      CLICK ME
    </Button>
  </Jumbotron>
)
