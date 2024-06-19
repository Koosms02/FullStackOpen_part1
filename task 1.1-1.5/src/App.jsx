const App = () => {


  //defining the component
  const Header = (props) => {

    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = (props) => {
    const part = props.parts;

    const Part = (props) => {
      return (
        <p>
          {props.part} {props.exercise}
        </p>
      )
    }

    return (
      <>
        <Part part={part[0].name} exercise={part[0].exercises} />
        <Part part={part[1].name} exercise={part[1].exercises} />
        <Part part={part[2].name} exercise={part[2].exercises} />
      </>

    )
  }

  const Total = (props) => {

    const part = props.parts

    return (
      <p>Number of exercises {part[0].exercises + part[1].exercises + part[2].exercises}</p>

    )
  }

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts} />
      <Total
        parts={course.parts} />
    </div>
  )
}

export default App