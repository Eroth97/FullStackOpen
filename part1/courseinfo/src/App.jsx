const Header = (props) => {
  return(
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) =>{
  return(
    <p>
      {props.name} {props.exercise}
    </p>
  )
}

const Content = (props) =>{
  return(
    <>
      <Part name={props.names[0]} exercise={props.exercises[0]} />
      <Part name={props.names[1]} exercise={props.exercises[1]} />
      <Part name={props.names[2]} exercise={props.exercises[2]} />
    </>
  )
}

const Total = (props) =>{
  return(
    <p>
      Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content names={[part1.name, part2.name, part3.name]} exercises={[part1.exercises, part2.exercises, part3.exercises]} />
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
    </div>
  )
}

export default App