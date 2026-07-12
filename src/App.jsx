import {useState} from 'react'
import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Results from './components/Results.jsx'
import './App.css'

function App() {

  const [userInput,setuserInput] = useState({
  initialInvestment: 1000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
  })

  const validInput = userInput.duration>=1

  function handleChange(inputIdentifier,newValue){
    setuserInput(prevuserInput =>{
        return {
            ...prevuserInput,
            [inputIdentifier]: +newValue
        }
    })
  }

  return(
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {validInput && <Results input={userInput}/>}
      {!validInput && <p className='center'>Please enter valid Data.....!!!</p>}
    </>
  )
}

export default App
