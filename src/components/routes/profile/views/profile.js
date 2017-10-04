import 'preact'
import { Button, Jumbotron } from 'react-bootstrap'

export default ({ children, ...props }) => (
  <Jumbotron>
    <h2>Profile: {props.user}</h2>
    <p>This is the user profile for a user named { props.user }.</p>
    <div>Current time: {new Date(props.time).toLocaleString()}</div>
    <p>
      <Button bsStyle='primary' onClick={props.increment}>Click Me</Button>
      {' '}
      Clicked {props.count} times.
    </p>
  </Jumbotron>
)
