import { useState, useEffect, useCallback } from "react"

const App = () => {
  const [passwordLength, setpasswordLength] = useState(8)
  const [upperCaseAllowed, setupperCaseAllowed] = useState(false)
  const [lowerCaseAllowed, setlowerCaseAllowed] = useState(true)
  const [numbersAllowed, setnumbersAllowed] = useState(false)
  const [symbolsAllowed, setsymbolsAllowed] = useState(false)
  const [password, setpassword] = useState('')
  const [copied, setcopied] = useState(false)


  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    setcopied(true)
    setTimeout(() => {
      setcopied(false)
    }, 2000);
  }

  const selectedCount = [
    lowerCaseAllowed,
    upperCaseAllowed,
    numbersAllowed,
    symbolsAllowed
  ].filter(Boolean).length


  const refreshPassword = () => {
    generatePassword()
  }

  const generatePassword = useCallback(() => {
    let allowedCharacters = ''
    if (lowerCaseAllowed) allowedCharacters += "abcdefghijklmnopqrstuvwxyz"
    if (upperCaseAllowed) allowedCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numbersAllowed) allowedCharacters += '01234567890123456789'
    if (symbolsAllowed) allowedCharacters += '!@#$%^&*()./\\<>~?*;:"'
    let pass = ""
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedCharacters.length)
      pass += allowedCharacters[randomIndex]
      setpassword(pass)
    }
  }, [passwordLength, lowerCaseAllowed, upperCaseAllowed, numbersAllowed, symbolsAllowed])

  useEffect(() => {
    generatePassword()
  }, [passwordLength, lowerCaseAllowed, upperCaseAllowed, numbersAllowed, symbolsAllowed, generatePassword])



  return (
    <div
      className='flex flex-col items-center justify-center h-screen gap-7'
    >
      <h2 className="flex align-start text-2xl">Password Generator:</h2>
      <div
        className='min-w-100 p-3 border border-gray-700 flex gap-8 rounded-lg'
      >
        <input type="text"
          className='w-[70%] outline-0 text-3xl rounded'
          readOnly value={password}
        />
        <button onClick={refreshPassword} className="w-9"><img src="https://img.icons8.com/?size=100&id=59872&format=png&color=000000" alt="refresh" /></button>
        <button
          className={`${copied ? 'bg-green-500' : 'bg-red-600'} rounded text-white p-2 w-27 cursor-pointer`}
          onClick={copyPassword}
        >{copied ? 'Copied !' : 'Copy'}</button>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-3">
          <label htmlFor="pass-range">Password Length: {passwordLength}</label>
          <input type="range"
            min={4}
            max={50}
            value={passwordLength}
            onChange={(e) => setpasswordLength(e.target.value)}
            id="pass-range" className="w-80 accent-red-700"
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <input type="checkbox" id="lower-case"
            className="cursor-pointer scale-120"
            onChange={() => {
              if (selectedCount == 1 && lowerCaseAllowed) return

              setlowerCaseAllowed((prev) => !prev)
            }}
            checked={lowerCaseAllowed}
          />
          <label htmlFor="lower-case">Lower Case</label>

          <input type="checkbox" id="upper-case"
            className="cursor-pointer scale-120"
           onChange={() => {
              if (selectedCount == 1 && upperCaseAllowed) return

              setupperCaseAllowed((prev) => !prev)
            }}
            checked={upperCaseAllowed}
          />
          <label htmlFor="upper-case">Upper Case</label>


          <input type="checkbox" id="numbers"
            className="cursor-pointer scale-120"
           onChange={() => {
              if (selectedCount == 1 && numbersAllowed) return

              setnumbersAllowed((prev) => !prev)
            }}
            checked={numbersAllowed}
          />
          <label htmlFor="numbers">Numbers</label>

          <input type="checkbox" id="symbols"
            className="cursor-pointer scale-120"
            onChange={() => {
              if (selectedCount == 1 && symbolsAllowed) return

              setsymbolsAllowed((prev) => !prev)
            }}
            checked={symbolsAllowed} />
          <label htmlFor="symbols">Symbols</label>
        </div>
      </div>


    </div>
  )
}

export default App
