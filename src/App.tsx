import { createContext } from 'react'
import './App.css'
import Context from './components/Context'
import Destructuring, { Category } from './components/Destructuring'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import State from './components/State'

type textOrNull = string | null

interface IAppContext {
  language: string;
  framework: string;
  projects: string;
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - variaveis
  const name: string = 'Gabriel'
  const age: number = 20
  const isWorking: boolean = true

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  // 3 - types
  const myText:textOrNull = "tem algum texto aqui"
  let mySecondText:textOrNull = null

  mySecondText = "tem algum texto aqui"

  // 4 - context
  const contextValue: IAppContext = {
    language: 'javascript',
    framework: 'react',
    projects: '5'
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
      <h1>Nome: {name}</h1>
      <h1>Idade: {age}</h1>
      {isWorking && <h2>Está trabalhando!</h2>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="Gabriel" />
      <Destructuring
        title="Título do post"
        content="Conteúdo do post"
        commentsQty={10}
        tags={['react', 'typescript', 'javascript']}
        category={Category.REACT}
      />
      <State />
      {myText && <p>Tem texto na variavel</p>}
      {mySecondText && <p>Tem texto na variavel</p>}
      <Context/>
    </div>
    </AppContext.Provider>
  )
}

export default App
