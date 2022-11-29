let studentInfo = [];

function handleClick(event) {
    console.log("clicked", event.target.textContent);
    if (event.target.textContent === "Submit") {
        submitHandler();
    } else if (event.target.textContent === "Change Background Color") {
        changeBG();
    }
};

function submitHandler() {
    const firstNameInput = document.querySelector('#firstName');
    const lastNameInput = document.querySelector('#lastName');
    const progNameInput = document.querySelector('#progName');

    // Save input values before clearing them
    let student = {
        firstName: firstName.value,
        lastName: lastName.value,
        progName: progName.value,
    }

    studentInfo.push(student)
    updateList(student);

    firstNameInput.value = '';
    lastNameInput.value = '';
    progNameInput.value = '';
}

function updateList(student) {
    const CITList = document.querySelector('.CIT');
    const CSTList = document.querySelector('.CST');
    const listItem = document.createElement('li');
    listItem.textContent = `${student.firstName} ${student.lastName}`

    if (student.progName === 'CIT') {
        CITList.append(listItem);
    } else if (student.progName === 'CST') {
        CSTList.append(listItem);
    }
};

function changeBG() {
    document.body.classList.toggle('whiteBG');
};

document.body.addEventListener('click', handleClick);