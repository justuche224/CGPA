function calculateGradePoint(grade, unitLoad) {
  let coursePoint;

  switch (grade) {
    case "A":
      coursePoint = 5;
      break;
    case "B":
      coursePoint = 4;
      break;
    case "C":
      coursePoint = 3;
      break;
    case "D":
      coursePoint = 2;
      break;
    case "E":
      coursePoint = 1;
      break;
    case "F":
      coursePoint = 0;
      break;
    default:
      console.log("invalid grade");
      return;
  }

  let gradePoint = coursePoint * unitLoad;
  console.log(`${grade}: ${coursePoint} * ${unitLoad} = ${gradePoint}`); // Logging calculation
  return gradePoint;
}

function calculateGPA(grades, unitLoads) {
  let totalGradePoint = 0;
  let totalLoad = 0;

  for (let i = 0; i < grades.length; i++) {
    totalGradePoint += calculateGradePoint(grades[i], unitLoads[i]);
    totalLoad += parseInt(unitLoads[i]);
  }

  console.log(`Total Grade Points: ${totalGradePoint}`);
  console.log(`Total Load: ${totalLoad}`);

  let gpa = totalGradePoint / totalLoad;
  console.log(`GPA: ${gpa}`);
  return gpa;
}

module.exports = calculateGPA;
