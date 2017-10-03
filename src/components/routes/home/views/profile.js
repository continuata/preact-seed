import 'preact'
import style from './style'

export default ({ children, ...props }) => (
  <div class={style.home}>
    <h1>Home</h1>
    <h2>{props.app.foo}</h2>
    <p>This is the Home component.</p>
    <button onClick={props.doSomething.bind(this, {foo: 'bar'})}>
      CLICK ME
    </button>
  </div>
)
