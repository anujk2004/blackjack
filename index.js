let player ={
    Name: "Anuj",
    Chips: "$5000"
}

let sum = 0
let card = []
let isalive = true
let hasblackjack= false
let messageel= document.getElementById("message-el")
let sumel= document.querySelector("#sum-el")
let cardsel= document.querySelector("#cards-el")


    let playerel=document.getElementById("player-el")
    playerel.textContent = player.Name +" "+ player.Chips
function startgame(){
  
    let firstnumber =getrandomcard()
    let secondnumber= getrandomcard()
    card.push(firstnumber,secondnumber)
    for (let i=0; i<card.length ; i++){
        sum+= card[i]
    }

    rendergame()

}
function getrandomcard(){
    let randomno= Math.floor(Math.random()*13) +1
    if(randomno===1){
        return 11
    }
    else if(randomno>10){
        return 10
    }
    else{
        return randomno
    }
    
    
}


function rendergame(){
    sumel.textContent="Sum: " +sum
    
    for(let i=0 ; i<card.length ; i++){
        cardsel.textContent=cardsel.textContent= "Cards: "+ card + " "

    }
    if(sum<=20){
        messageel.innerText=("Do you want to draw a new card?")
        
    }
    else if(sum===21){
        messageel.innerText=("you've got black jack!")
        hasblackjack=   true
    }
    else{
        messageel.innerText=("nikal ja yaha se haar gaya tu!")
        isalive = false
    }
}
function newgame(){
    if(isalive ===true && hasblackjack=== false){
        messageel.textContent=("Drawing a new card from the deck")
        let thirdcard=getrandomcard()
        card.push(thirdcard)
        newsum= sum + thirdcard
        sum = newsum
        
        rendergame()

    }
    
   
}