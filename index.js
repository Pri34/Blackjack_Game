// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

// let firstCard =11
// let secondCard = 17
// let sum = firstCard + secondCard
// console.log(sum) 

// if(sum < 21) {
//     console.log("Do you want to draw new card ? ")
// } else if(sum === 21) {
//     console.log("Wohoo ! you have got Blackjack !")
//  } //else if(sum > 21) {
// //     console.log("You are out of the game !")
// // }
// else {
//     console.log("You are out of the game !")
// }


//PRACTICE TIME !!

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 21

// // if less than 21 -> "You can not enter the club!"
// // else            -> "Welcome!"

// // if(age < 21)
// if(age <= 20) {
//     console.log("You can not enter the club!")
// } else {
//     console.log("Welcome!")
// }

// Check if the person is elegible for a birthday card from the King! (100)

// let age = 100

// // if less than 100    -> "Not elegible"
// // else if exactly 100 -> "Here is your birthday card from the King!"
// // else                -> "Not elegible, you have already gotten one"

// if ( age < 100) {
//     console.log("Not elegible")
// } else if(age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have already gotten one")
// }


//BACK TO THE GAME

// let firstCard =10
// let secondCard =11
// let sum = firstCard + secondCard
// console.log(sum) 

// // Write the conditional according to these rules:

// // if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// // else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// // else -> "You're out of the game! 😭"

// let hasBlackJack = false  

// // 1. Create a variable called isAlive and assign it to true
// // 2. Flip its value to false in the appropriate code block 
// // 3. Log it out to check that you're doing it right

// isAlive = true

// if(sum <= 20) {
//     console.log("Do you want to draw new card ? ")
// } else if(sum === 21) {
//     console.log("Wohoo ! you have got Blackjack !")
//     hasBlackJack = true
//  } else {
//     console.log("You are out of the game !")
//     isAlive = false
// } 

// //CASH OUT ON GETTING BLACKJACK ! 
// console.log(hasBlackJack)
// console.log(isAlive)

//PRACTICE TIME

// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // true
// console.log(11 <= 11) // true
// console.log(3 <= 2)   //false


//BACK TO THE GAME 


// let firstCard =10
// let secondCard =11
// let sum = firstCard + secondCard 
// console.log(sum) 
// let hasBlackJack = false  
// isAlive = true
// let message = ""

// // 1. Declare a variable called message and assign its value to an empty string
// // 2. Reassign the message variable to the string we're logging out
// // 3. Log it out!

// if(sum <= 20) {
//     message = "Do you want to draw new card ? "
// } else if(sum === 21) {
//     message = "Wohoo ! you have got Blackjack !"
//     hasBlackJack = true
//  } else {
//     message = "You are out of the game !"
//     isAlive = false
// } 

// console.log(message)

//Designing and adding new things
//  Store the message-el paragraph in a variable called messageEl
//  Display the message in the messageEl using messageEl.textContent
//  Store the sum paragraph in a variable called sumEl
//  Render the sum on the page using this format -> "Sum: 14"
//  Store the cards paragraph in a variable called cardsEl
//  Render the cars on the page using this format -> "Cards: 10 4"

// let firstCard =10
// let secondCard =11
// let cards = [firstCard,secondCard]
// let thirdCard = 4 
// let sum = firstCard + secondCard 
// let hasBlackJack = false  
// isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// // let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")
// let cardsEl = document.querySelector("#cards-el")

// function startGame() {
//     renderGame()
// }
// function renderGame() {
//     sumEl.textContent = "Sum: " + sum
//     cardsEl.textContent =  "Cards: " + cards[0] + " " + cards[1]
//     if(sum <= 20) {
//         message = "Do you want to draw new card ? "
//     } else if(sum === 21) {
//         message = "Wohoo ! you have got Blackjack !"
//         hasBlackJack = true
//      } else {
//         message = "You are out of the game !"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// // 1. Create a card variable, and hard code its value to a number (2-11)
// // 2. Add the new card to the sum variable
// // 3. Call startGame()

// function newCard() {
//     sum += thirdCard
//     renderGame()
//     console.log("Draw a new card from deck")
// }

// // Now we want ki hamara new card display ho jaye along with old cards
// // We will do that using arrays
// //its hardcored that only 1st card and 2nd card will display
// //What we want is to render all the cards present at present moment
// // we will to store all cards in single variable no matter how many cards we have 




// // LEARNING ARRAYS



// //Arrays are ordered lists of items

// let featuredPosts = ["Check out my Netflix Clone","Here's the code for my project","I have just relaunched my porfolio"]

// // Create an array that lists your i.e. experience, education, licenses, skills or similar
// // The items of the array should be strings

// console.log(featuredPosts[2])

// let items = ["I am Studying from Thapar University","I am learning js rn","I can play guitar"]

// // Make the following appear in the console:
// // Frontend developer at Xeneta
// // People counter for Norstat
// // CEO at Scrimba

// console.log(items[1])
// console.log(items[2])
// console.log(items[0])

// console.log(items.length)

// // Array - ordered list of items - coposite / complex data type

// // Create an array that describes yourself. Use the three primitive data types you've learned
// // It should contain your name (string), your age (number), and whether you like pizza (boolean)
// let info=["Prisha Aggarwal", 19, true]

// //Adding items to end of array
// let hello= [ 7,4]
// hello.push(6)
// console.log(hello)

// // Push the newMessage to the messages array, and then log out the array

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)

// messages.pop()
// console.log(messages)



//BACK TO THE GAME




let firstCard =10
let secondCard =11
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false  
isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}
function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent =  "Cards: " + cards[0] + " " + cards[1]
    if(sum <= 20) {
        message = "Do you want to draw new card ? "
    } else if(sum === 21) {
        message = "Wohoo ! you have got Blackjack !"
        hasBlackJack = true
     } else {
        message = "You are out of the game !"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() { 
    let thirdCard = 4 
    sum += thirdCard
    cards.push(thirdCard)
    // console.log(cards)
    renderGame()
    console.log("Draw a new card from deck")
}


//LEARNING FOR LOOPS


// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {
    
    console.log(count)

}


