import {useState} from 'react' //esto habilita el usar estasdos

export function TwitterFollowCard({children, userName = 'valor por defecto', initialIsFollowing}) { // al igual un valor ese sera su valor por defecto
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const imageSrc = `https://unavatar.io/${userName}` //una simple funcion para sacar la imagencita en base al nombre
    
    const textButton = isFollowing ? 'Siguiendo' : 'Seguir' //ternario que me dice que texto debe mostrar el botton de seguir
    const buttonClassName = isFollowing  //si lo sigues muestra este css y si no este otro
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => { //arrow que cambia el estado del botton 
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    src={imageSrc} //llamamos la const de arriba
                    alt="El avatar de Usuario" 
                    className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>
                        {children} 
                    </strong> 
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>{/*la claseName depende de la funcion de arriba y cuando se clicke se llama a la  otra*/}
                    <span className='tw-followCard-text'>{textButton}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de segir</span>
                </button>
            </aside>
        </article>
    )
} 