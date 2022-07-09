let form = document["airline-form"];

function formAlert(evt) {
    evt.preventDefault();
    let firstName = form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let location = form.travelLocation.value;
    let diet = [];
    for(let i = 0; i < form.diet.length; i++){
        if (form.diet[i].checked){
            diet.push(form.diet[i].value);
        }
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

form.addEventListener("submit", formAlert);