import "./App.css";
import Participant from "./Participant";
import Task from "./Task";

function App() {
  const participants = ["Rajani", "Mahbub", "Atiqur", "Habib"];

  const actors = [
    { id: 1, name: "Abdullah", age: 30, designation: "Upazila ICT Officer" },
    { id: 2, name: "Rahim", age: 32, designation: "Upazila ICT Officer" },
    { id: 3, name: "Atiqur", age: 35, designation: "ANE" },
    { id: 4, name: "Nazmul Islam", age: 33, designation: "AD" },
  ];

  //Event Handler Function
  function handleButton1Click() {
    alert("Button 1 Clicked");
  }

  const handleButton2Click = () => {
    alert("Button 2 Clicked");
  };

  const handleAddition = (number) => {
    alert(number + 10);
  };

  return (
    <>
      <h3>Bootcamp Explore React Core Concepts</h3>
      <Person></Person>
      <Student name="Mr. X" grade={12} score={99}></Student>
      <Student name="Mr. y" grade={11} score={95}></Student>
      <Student name="Mr. Z" grade={10} score={90}></Student>
      <Task name="ReactJS" isDone={true}></Task>
      <Task name="TypeScript" isDone={false}></Task>
      <Task name="NextJS" isDone={true}></Task>
      <Task name="MongoDB" isDone={false}></Task>
      {/* <Participant></Participant> */}
      {/* {participants.map((participant, index) => (
        <Participant key={index} name={participant}></Participant>
      ))} */}
      {actors.map((actor) => (
        <Participant key={actor.id} actor={actor}></Participant>
      ))}
      {/* Event Handling */}
      <button onClick={handleButton1Click}>Button 1</button>
      &nbsp;&nbsp;
      <button onClick={handleButton2Click}>Button 2</button>
      &nbsp;&nbsp;
      <button onClick={() => handleAddition(20)}>Addition</button>
    </>
  );
}

function Person() {
  const name = "Rajani";
  const age = 30;
  const age2 = 10;

  const person = { name: "Rajani", age: 20 };

  return (
    <div>
      <h3>
        I am a Person named {person.name} and with age: {person.age}{" "}
      </h3>
    </div>
  );
}

// function Student(props) {
//   console.log(props);
//   return (
//     <div className="student">
//       {" "}
//       <h3>Student Name: {props.name}</h3>
//       <h4>Student Grade: {props.grade}</h4>
//       <p>Student Score: {props.score}</p>
//     </div>
//   );
// }

const { name, grade, score } = { name: "Mr. X", grade: 12, score: 99 };

function Student({ name, grade, score }) {
  //console.log(props);
  //console.log(name, grade, score);
  return (
    <div className="student">
      <h3>Student Name: {name}</h3>
      <h4>Student Grade: {grade}</h4>
      <p>Student Score: {score}</p>
    </div>
  );
}

export default App;
