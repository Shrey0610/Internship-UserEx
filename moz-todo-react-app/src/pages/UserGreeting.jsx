import PropTypes from 'prop-types'
function UserGreeting(props) {

    const yes = <h3>Welcome {props.username}</h3>
    const no = <h3>Please Login!</h3>

    return props.isLoggedIn ? yes  : no   

}

UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool
}

UserGreeting.defualtProps = {
    username: 'Aakash',
    isLoggedIn: false
}

export default UserGreeting
