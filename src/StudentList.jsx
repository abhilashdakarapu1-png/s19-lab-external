function StudentList() {
  const students = [
    { id: 1, name: "Ravi", marks: 85 },
    { id: 2, name: "Sita", marks: 72 },
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Anu", marks: 90 }
  ];

  return (
    <div className="student-container">
      <h2>Student List</h2>

      {students.map((student) => (
        <div className="student-card" key={student.id}>
          <h3>{student.name}</h3>

          <p>Marks: {student.marks}</p>

          <p>
            Result:{" "}
            <span className={student.marks >= 40 ? "pass" : "fail"}>
              {student.marks >= 40 ? "Pass" : "Fail"}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;