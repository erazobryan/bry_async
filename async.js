// console.log("First message");

// setTimeout(() => {
//     console.log("Second message (after 2 seconds)");
// }, 2000);

// console.log("Third message");




fetch("https://favqs.com/api/qotd")
.then (Response => Response.json())
.then (data => {
    console.log("Here's your advice:", data.slip.qotd);
})
.catch(error => console.error("Error:", error));



// async function getAdvice() {
//     try{
//         let Response = await fetch("http://api.adviceslip.com/advice");
//         let data = await Response.json();
//         console.log("Here's your advice:", data.slip.advice);
//     }catch (error) {
//         console.error("Error:", error);
//     }
// }

// getAdvice();