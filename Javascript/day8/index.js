console.log(`first`);
console.log("second");
console.log("third");

async function data() {
    // console.log(`first`)
    return "3456";
}

data()
    .then((value) => {
        console.log(value); // This will log "3456"
    })
    .catch((error) => {
        console.log("Error");
    });

console.log("second");
console.log("third");
