import 'preact'
import style from './style'

export default ({ children, ...props }) => (
  <div class={style.profile}>
    <h1>Profile: {props.user}</h1>
    <p>This is the user profile for a user named { props.user }.</p>
    <div>Current time: {new Date(props.time).toLocaleString()}</div>
    <p>
      <button onClick={props.increment}>Click Me</button>
      {' '}
      Clicked {props.count} times.
    </p>
  </div>
)
