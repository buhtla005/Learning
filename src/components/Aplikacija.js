import React from 'react'
import Unos from './UnosAplikacija'

function Aplikacija(){
    return(
        <div className="contacts container">
            <Unos 
            contact = {{name: "Garfild", imgUrl:"https://www.interviewmagazine.com/wp-content/uploads/2019/04/garfield_fendi.jpg",
            phone: "(051) 435 554", email:"garfild.g@gmail.com"}}
            />

            <Unos 
            contact = {{name: "Wilfred", imgUrl:"https://i.dailymail.co.uk/1s/2018/11/15/10/6216094-6390319-Michael_Rapaport_posted_a_short_clip_of_the_Chinchilla_Persian_k-m-12_1542278756274.jpg",
            phone: "(051) 243 534", email:"wilfred.ugly@gmail.com"}}
            />

            <Unos
            contact = {{name: "Sindbat" , imgUrl:"https://www.catster.com/wp-content/uploads/2018/01/An-annoyed-cat-with-a-ball.jpg",
            phone: "(051) 435 584", email:"annoyingcat@gmail.com"}}
            />

            <Unos
            contact = {{name: "Tard"  , imgUrl:"https://media2.fdncms.com/inlander/imager/cat-friday-meet-tard-a-perpetually-grumpy-cat/u/original/2199970/tard.jpg",
            phone: "(051) 423 534", email:"tard.grump@gmail.com"}}
            />
        </div>
    )
}

export default Aplikacija