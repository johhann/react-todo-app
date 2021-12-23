import PropTypes from 'prop-types'


const Button = ({name}) => {
  const addTask = () => {
    console.log("add task button clicked: do sth")
  }

  return (
    <div>
      <button className="btn" onClick={addTask} style={{backgroundColor: "green"}}>{name}</button>
    </div>
  )
}

Button.defaultProps = {
  name: "Add Task"
}

Button.propTypes = {
  name: PropTypes.string
}

export default Button
