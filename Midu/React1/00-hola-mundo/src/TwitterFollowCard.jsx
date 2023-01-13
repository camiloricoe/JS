export function TwitterFollowCard({formatUserName ,userName, name, isFollowing}) {
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
                <button className='tw-followCard-button'>
                    seguir
                </button>
            </aside>
        </article>
)
}

