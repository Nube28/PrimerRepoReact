import {useState} from 'react'

export function TwitterFollowCard({children, userName = 'valor por defecto', name, isFollowing}) {
    const imageSrc = `https://unavatar.io/${userName}`
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    src={imageSrc} 
                    alt="El avatar de Usuario" 
                    className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}