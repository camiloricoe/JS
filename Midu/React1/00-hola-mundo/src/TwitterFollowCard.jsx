import { useState } from "react";

export function TwitterFollowCard({formatUserName ,userName, name, initialisFollowing}) {
    
    const [isFollowing, setisFollowing] = useState(initialisFollowing)

    const text = isFollowing ? 'Siguiendo' : "Seguir"
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'


    const handleClick =()=>{setisFollowing(!isFollowing)}

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt={userName} src={`http://unavatar.io/${userName}`}/>
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-text'>{name}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span> 
                    <span className='tw-followCard-stopFollow'> Dejar de Seguir</span>
                </button>
            </aside>
        </article>
)
}

