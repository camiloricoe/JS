
//const Header = (props)=>{
//  return <h1>{props.course}</h1>
//}

const Header = ({course})=><h1>{course}</h1>

const Content = (props)=>{
  const info = props.parts;
  const displayParts = info.map((item) => {
    return (
      <p key={item.id}>
        {item.part} : {item.exercise}
      </p>
    );
  });
  return (<>
    {displayParts}
  </>)
}

const Total = (props)=>{
  return (
      <p>Number of exercises {props.parts.reduce((a, b) => a + b.exercise, 0)}</p>)
}


const App = () => {
  const course = 'Half Stack application development'
    const parts = [
    { part: "Fundamentals of React", exercise: 10, id: 1 },
    { part: "Using props to pass data", exercise: 7, id: 2 },
    { part: "State of a component", exercise: 14, id: 3 }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts} />


    </div>
  )
}

export default App
