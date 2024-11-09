let sportOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i<sportOne.length; i++) {
    console.log(sportOne[i]);
}

for (let tempSport of sportOne) {
    if(tempSport == "Cricket") {
        console.log(tempSport + "<< My Favorite");
    } else {
        console.log(tempSport);
    }
}