
const Header = (props)=>{
 return <h1>{props.course.name}</h1>
}

//const Header = ({name})=><h1>{name}</h1>

const Content = (props)=>{
  const info = props.course.parts;
  const displayParts = info.map((item) => {
    return (
      <p>
        {item.name} : {item.exercises}
      </p>
    );
  });
  return (<>
    {displayParts}
  </>)
}

const Total = (props)=>{
  const info = props.course;
  return (
    
      <p>Number of exercises {info.parts.reduce((a, b) => a + b.exercises, 0)}</p>)
}


const App = () => {
  // const course = 'Half Stack application development'
  //   const parts = [
  //   { part: "Fundamentals of React", exercise: 10, id: 1 },
  //   { part: "Using props to pass data", exercise: 7, id: 2 },
  //   { part: "State of a component", exercise: 14, id: 3 }
  // ];

  const course2 = {
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
      <Header course={course2} />
      <Content course={course2}/>
      <Total course={course2} />


    </div>
  )
}

export default App
