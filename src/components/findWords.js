import React, {useState, useEffect} from 'react'
import wlist from './words.js'

function FindWords(){

    const [words, setWords] = useState([])
    const [matchingWords, setMatchingWords] = useState(['hello','list'])

    
    useEffect(() => {
        setWords(wlist())
    }, [])

    function alphabetize(a) {
        return a.toLowerCase().split("").sort().join("").trim();
    }

    function splitString(string){
        return string.split('')
    }

    const handleMatchingWords = () => {
        const matches = []
        let typedString = document.getElementById('typedString').value
        console.log(typedString)
        let alphaString = alphabetize(typedString)
        alphaString = splitString(alphaString)
        
        

        for(let i=0; i<words.length;i++){
            let alphaWord = alphabetize(words[i])
            alphaWord = alphaWord.split('')
            console.log(alphaString, alphaWord)
            for(let j =0; j< alphaWord.length;j++)
                if(alphaWord.every(x => alphaString.includes(x))){
                alphaString.shift()
            }
            
        
        }
        setMatchingWords(matches)   
    
    }
    
    // const getInputValue = () =>{
    //     return document.getElementById('typedSting').value
    // }
    
    

    return(
        <div>
        <input id="typedString" type='text'></input>
        <button onClick = {handleMatchingWords}>button
        </button>
            {matchingWords.map(m => <div>{m}</div>)}
        </div>
    )

}

export default FindWords
