function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }
  let students = [];
  for (let i = 0; i < numberOfStudents; i++) {
    let student = studentSeat(i + 1);
    students.push(student);
  }
  return students;
}

let classRoom = createClassRoom(10);
