import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {

  const users = [
    {
      id: 1,
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      id: 2,
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      id: 3,
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      id: 4,
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

  return (
        <section className='App'>
          {
            users.map(user => {
              const{ id, userName, name, isFollowing } = user
              return(
                <TwitterFollowCard
                  key={id}
                  userName={userName}
                  initialIsFollowing={isFollowing}
                >
                  {name}
                </TwitterFollowCard>
              )
            })
          }
        </section>  
  )
}