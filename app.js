// function saveData() {
//     var name = document.getElementById("name");
//     var roll = document.getElementById("roll");
//     var key = firebase.database().ref('Students').push().key

//     var student = {
//         name: name.value,
//         roll: roll.value,
//         key: key,
//     }
//     firebase.database().ref('student/' + key).set(student);
// }

function saveData() {
    const name = document.getElementById('name');
    const roll = document.getElementById('roll');
    var key = firebase.database().ref("student").push().key
    const student = {
        name: name.value,
        roll: roll.value,
        key: key,

    }
    firebase.database().ref('student/' + key).set(student);
    function getFirebaseData(){
        firebase.database().ref('student/-Mn__vlFyO7YjsIQVnQn' ).set({
            key: "-Mn__vlFyO7YjsIQVnQn",
            name: 'mUbashir',
            roll: 123 
        })
    }
    getFirebaseData()
}

