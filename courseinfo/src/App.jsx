import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {/* 
      {props.course.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))} 
      */}
      <Part part={{ name: 'Fundamentals of React', exercises: 10 }} />
      <Part part={{ name: 'Using props to pass data', exercises: 7 }} />
      <Part part={{ name: 'State of a component', exercises: 14 }} />
    </div>
  );
};

const Total = (props) => {
  {/* 
  const totalExercises = props.course.parts.reduce((sum, part) => sum + part.exercises, 0);
  */}

  const totalExercises = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises;
  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  );
};

const App = () => {
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
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
