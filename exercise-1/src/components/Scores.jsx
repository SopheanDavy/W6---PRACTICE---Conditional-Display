function Scores(props) {
  return (
    <div className="scores">
      <h1>{props.courseName}</h1>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {props.courseResults.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>

              <td className={student.score < 50 ? "warning" : ""}>
                {student.score}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Scores;