import React from 'react'
import Joke from './Joke'
import jokesData from './jokesData'

function JokeApp(){
   // const nums = [1,2,3,4]
   // const doubled = nums.map(function (num) {
   //     return num*2
   // })
   // console.log(doubled)
   //prosljedi svaku individualnu salu, posto je jedna i koristimo arrow mozemo maknut return 
   //map filter sort reduce every some find findindex
   const jokeComponents = jokesData.map(joke => <Joke key={joke.id} 
    question={joke.question} punchline={joke.punchline} />)

    return(
        <div className="container bg-dark rounded">

            {jokeComponents}

         {/*    <Joke 
            joke={{question:"Why does Waldo wear stripes?", 
            punchline:"Because he doesn’t want to be spotted."}}
            />
            <Joke
            joke={{question:"Why do ducks have feathers? ", 
            punchline:"To cover their butt quacks."}}
            />
            <Joke
            joke={{question:"What do you do when your hot pants catch on fire?", 
            punchline:"Put them out with your pantyhose."}}
            />
            <Joke
            joke={{question:"Why don’t chickens wear underwear?", 
            punchline:"Because their pecker is on their face."}}
            />
            <Joke
            joke={{question:"What’s green and has wheels?", 
            punchline:"Grass! I lied about the wheels."}}
            /> */}
            
        </div>
    )
}

export default JokeApp