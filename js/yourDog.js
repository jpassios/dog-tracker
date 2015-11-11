var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.status == 200 && xhr.readyState == 4){
        var dog = JSON.parse(xhr.responseText);

        document.getElementById("name").innerHTML = dog.name;
        document.getElementById("breed").innerHTML = dog.breed;
        document.getElementById("weight").innerHTML = dog.weight;
        document.getElementById("age").innerHTML = dog.age;
        document.getElementById("sex").innerHTML = dog.sex;

        if (dog.is_spayed_or_neutered) {
            document.getElementById("fixed").innerHTML = 'Yes';
        } else {
            document.getElementById("fixed").innerHTML = 'No';
        }

        var appointments = document.getElementById("appnt");

        for (var i = 0; i < dog.appointments.length; i++ ) {
            var containerDiv = document.createElement("div");
            containerDiv.className = "appointment-container";
            appointments.appendChild(containerDiv);

            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel1 = document.createElement("label");
            newLabel1.innerHTML = "Date: ";
            var newSpan1 = document.createElement("span");
            newSpan1.innerHTML = new Date(dog.appointments[i].appointment_date).toDateString();
            newDiv.appendChild(newLabel1);
            newDiv.appendChild(newSpan1);


            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel2 = document.createElement("label");
            newLabel2.innerHTML = "Location: ";
            var newSpan2 = document.createElement("span");
            newSpan2.innerHTML = dog.appointments[i].location;
            newDiv.appendChild(newLabel2);
            newDiv.appendChild(newSpan2);


            var newDiv = document.createElement("div");
            containerDiv.appendChild(newDiv);
            var newLabel3 = document.createElement("label");
            newLabel3.innerHTML = "Vet Name: ";
            var newSpan3 = document.createElement("span");
            newSpan3.innerHTML = dog.appointments[i].vet_name;
            newDiv.appendChild(newLabel3);
            newDiv.appendChild(newSpan3);
        }
    }
};

var myId = document.location.search.split('=')[1];
xhr.open('GET','http://dog-tracker-api.herokuapp.com/dogs/' + myId, true);
xhr.send();

function addAppmnt() {
    console.log ( '#Appointment Button was clicked' );
}
function addMeds() {
    console.log ( '#Medication Button was clicked' );
}
function addVacs() {
    console.log ( '#Vaccination Button was clicked' );
}
function addDiet() {
    console.log ( '#Diet Button was clicked' );
}