const person = {
    age: 30,
    name: "Mia",
    magic: true,
    scream: function () {
        console.log("Whoaaaaaaaa!");
    }
}

person.age // O(1)
person.spell = "abra kadabra"; // O(1)
person.scream(); // O(1)

// Occasionally they will be O(n/k) because of collision
