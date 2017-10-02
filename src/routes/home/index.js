import 'preact'
import { connect } from 'preact-redux'
import selector from './selector'
import actions from './actions'
import HomeView from './views/profile'

export const Home = (props) => (
  <HomeView {...props} />
)
export default connect(selector, actions)(Home)
