// function saveData() {
//     const name = document.getElementById('name');
//     const roll = document.getElementById('roll');
//     var key = firebase.database().ref("student").push().key
//     const student = {
//         name: name.value,
//         roll: roll.value,
//         key: key,

//     }
//     firebase.database().ref('student/' + key).set(student);
//     function getFirebaseData(){
//         firebase.database().ref('student/-Mn__vlFyO7YjsIQVnQn' ).set({
//             key: "-Mn__vlFyO7YjsIQVnQn",
//             name: 'mUbashir',
//             roll: 123 
//         })
//     }
//     getFirebaseData()
// }

function saveData() {
    const name = document.getElementById('name');
    const roll = document.getElementById('roll');
    const key = firebase.database().ref('student').push().key
    const student = {
        name: name.value,
        roll: roll.value,
        key: key,
    }
    firebase.database().ref('student/' + key).set(student)
    
}

// function getData() {
//     firebase.database().ref('student').on('child_added', function (data) {
//         console.log(data.val());
//     })

// }
// getData()

// function deleteData () {
//     firebase.database().ref('student/-MnddwqP_E09Am2TOhwq').remove()
// }
// deleteData();

function editData() {
    firebase.database().ref('student/-MndfYeBWCl7C7nrTyPm').set({
        key: 'asjdlbasldnasld',
        name: 'yahya',
        roll: '8127'
    })
}

editData()