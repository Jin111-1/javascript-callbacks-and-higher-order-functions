//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  const passedStudents = array.filter(score => score>70);
  console.log(passedStudents);
  const totalPassed = passedStudents.length;
  console.log(totalPassed)
  return operation(totalPassed);
};

function passOrNot (totalPassed){
  return totalPassed >= 5? "ผ่านเกณฑ์ ✅": "ไม่ผ่านเกณฑ์ ❌"
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, passOrNot);
console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`)
let scoreRoom2Result = atLeastFive(studentScoresRoom2, passOrNot);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`)
let scoreRoom3Result = atLeastFive(studentScoresRoom3, passOrNot);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom2Result}`);



