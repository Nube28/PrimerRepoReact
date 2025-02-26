import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {

  

  return (
        <section className='App'>
          <TwitterFollowCard userName="midudev" >
            Nubecita
          </TwitterFollowCard>

          <TwitterFollowCard userName="otro" >
            Papu
          </TwitterFollowCard>

          <TwitterFollowCard >
            este no tiene un userName
          </TwitterFollowCard>

        </section>  
  )
}