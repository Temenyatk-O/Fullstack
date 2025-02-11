import React from "react";

const Header = ({ course }) => (
  <div>
    <h1>{course}</h1>
  </div>
);

const Content = ({ part, exercises }) => (
  <div>
    <p>
      {part} {exercises}
    </p>
  </div>
);

const Total = ({ exercises }) => (
  <div>
    <p>Number of exercises: {exercises}</p>
  </div>
);
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const totalExercises = exercises1 + exercises2 + exercises3;
  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercises={totalExercises} />
    </div>
  );
};

export default App;
