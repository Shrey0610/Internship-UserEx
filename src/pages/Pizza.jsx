import PropTypes from 'prop-types'
const Pizza= (props)=> {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={props.image} alt={props.name} /> 
    </div>
  )
}


Pizza.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

// Pizza.defaultProps={
//   name: 'Pizza',
//   description: 'Some good Pizza',
//   image: '#',
// }

export default Pizza
