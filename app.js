const saveData = () => {
    const name = document.getElementById('name');
    const roll = document.getElementById('roll');
    const key = firebase.database().ref('student').push().key;
    const student = {
        name: name.value,
        roll: roll.value,
        key: key,
    }

    firebase.database().ref('student/' + key).set(student);
}

// const getData = () => {
//     firebase.database().ref('student').on('child_added', (e)=>{console.log(e.val())})
// }
// getData()

// const deleteData = () => {
//     firebase.database().ref('student').remove()
// }
// deleteData()

// const editData = () => {
//     firebase.database().ref('student/-MnjrM00oHMq3VIAm0Jn').set({
//         key: 'jkasbdsakbdaskjbd',
//         name: 'Hamza',
//         roll: 2917
//     })
// }
// editData();