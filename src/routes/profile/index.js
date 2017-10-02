import 'preact'
import { connect } from 'preact-redux'
import selector from './selector'
import actions from './actions'
import ProfileView from './views/profile'

export const Profile = (props) => (
  <ProfileView {...props} />
)
export default connect(selector, actions)(Profile)
