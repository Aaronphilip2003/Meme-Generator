import React from "react";
import ReactDOM from "react-dom";
import memeData from "../memeData";


export default function Meme() {

    const [image,setImage]=React.useState()

    function getMemeImage(){
        const memes= memeData.data.memes
        const randomNumber=Math.floor(Math.random()*memes.length)

        setImage(memes[randomNumber].url)
        console.log(image)
        
    }

    return (
        <main>
        <div className="form">
            <input
                type="text"
                placeholder="Top Text"
                className="form--input"
            />
            <input
                type="text"
                placeholder="Bottom Text"
                className="form--input"
            />

            <button
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new Meme Image
            </button>
        </div>
        <img className="meme--image" src={image}/>
        </main>
    )
}