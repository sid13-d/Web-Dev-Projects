// const students = [
//   {name: "siddhesh", subject: "java"},
//   {name: "sid", subject: "java"},
// ]

// function enrollStudent(student, callback) {
//   setTimeout(function() {
//     students.push(student);
//     callback();
//   },3000)
// }

// //function getStudents()
// function getStudents() {
//   setTimeout(function() {
//     let str = "";
//     students.forEach(element => {
//       str += `
//           <li>${element.name}</li>
//       `;

//     });
//     document.getElementById('students').innerHTML = str;
//   })
// }
// let newStd = {name: "sideshwar", subject: "javaScript"};
// enrollStudent(newStd,getStudents);

function fun1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = 'ture';
      if (error) {
        console.log('problem is resolved');
        resolve();
      } else {
        reject('sorry we cannot solve it');
      }
    }, 2000);

  });

}

fun1().then(function () {
  console.log('thanks for asking me');
}).catch(function (e) {
  console.log(e)
  console.log('you need to study more');
})