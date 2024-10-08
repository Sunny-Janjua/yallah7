function onclickHandler() {
    document.getElementById("heading").textContent="hello world"
    alert("text content is changed")
}


async function sum() {
    return 45
    
}
sum().then((x)=>{
    console.log(x)
}).catch((error)=>{
    console.log("error")
})


console.log("Second");

(async () => {
    setTimeout(() => {
        console.log("first");
    }, 3000);
})()
    .then(() => {
        console.log("Third");
    })
    .catch((error) => {
        console.log("error");
    });

console.log("Fourth");



