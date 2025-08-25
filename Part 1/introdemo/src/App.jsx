const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}

const App = () => {
  const name = 'Kanchana'
  const age = 29
  return (
    <>
      <h1>Greetings</h1>
      <Hello name = {name} age = {age} />
      <Hello name = 'Ravindu' age = {18+10} />
    </>
  )
}

export default App