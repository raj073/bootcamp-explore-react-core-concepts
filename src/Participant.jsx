import "./Participant.css";

const Participant = ({ actor }) => {
  console.log(actor);

  const { id, name, age, designation } = actor;
  return (
    <div className="participant">
      <h3>Participant Name: {name}</h3>
      <h5>Participant Age: {age}</h5>
      <p>Participant Designation: {designation}</p>
    </div>
  );
};

export default Participant;
