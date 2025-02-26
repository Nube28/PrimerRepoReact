import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  return (
        <section className='App'>
          <TwitterFollowCard
            userName="el papu"
            name="Nubecita"
            isFollowing
          />
          <TwitterFollowCard
            userName="Nube"
            name="Nubecita"
            isFollowing={false}
          />

        </section>  
  )
}