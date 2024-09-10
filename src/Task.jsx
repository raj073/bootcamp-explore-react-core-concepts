import "./Task.css";
export default function Task({ name, isDone }) {
  //Conditional Rendering Option 1
  //   if (isDone == true) {
  //     return <h3>Finished Task Name: {name}</h3>;
  //   } else {
  //     return <h3>OnGoing Task Name: {name}</h3>;
  //   }

  //Conditional Rendering Option 2
  //   if (isDone) {
  //     return <h3>Finished Task Name: {name}</h3>;
  //   } else {
  //     return <h3>OnGoing Task Name: {name}</h3>;
  //   }

  //Conditional Rendering Option 3 (Ternary Operator)

  return (
    <div>
      <h3>
        {isDone ? "Finished Task Name:" : "OnGOing Task Name"} : {name}
      </h3>
    </div>
  );

  //Conditional Rendering Option 4

  //   return (
  //     <div>
  //       <h3>
  //         {isDone && "Finished"} : {name}
  //       </h3>
  //     </div>
  //   );

  //Conditional Rendering Option 4
  //   return (
  //     <div>
  //       <h3>
  //         {isDone || "OnGoing Task"} : {name}
  //       </h3>
  //     </div>
  //   );
}
