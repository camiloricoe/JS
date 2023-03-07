import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
        {
        userName: 'care5061',
        name: 'Camilo RIco1',
        isFollowing: true
    },
    {
        userName: 'care5062',
        name: 'Camilo RIco2',
        isFollowing: false
    },
    {
        userName: 'care5063',
        name: 'Camilo RIco3',
        isFollowing: true
    }
    ]

export function App() {

    const formatUserName = (userName) => `@${userName}`
    const camilo = {formatUserName:formatUserName, userName:'care5006', name: 'Camilo Rico'}

    return(
        <section className="App">
            <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name="Miguel Angel Duran" initialisFollowing/>
            <TwitterFollowCard formatUserName={formatUserName} userName="care5006" name="Camilo A Rico"/>
            <TwitterFollowCard {...camilo}/>
            <TwitterFollowCard formatUserName={formatUserName} userName="pheralb" name="Pablo Hernadez"/>

            {users.map(user => {
                const {userName, name, isFollowing} =user
                return (
                    <TwitterFollowCard 
                        key={userName}
                        formatUserName={formatUserName}
                        userName={userName} 
                        name={name} 
                        initialisFollowing={isFollowing}/>
                )

            })}
        </section>


        
)
}





// export function App2() {
//     return(
//         <>
//         <button>xxx</button>
//         <Button2 text="Camilo"></Button2>
//         <Button2 text="Camilo2"></Button2>
//         <Button2 text="Camilo3"></Button2>
//         </>  
// )
// }

// const Button2 = ({text})=>{
//   return(
//     <button>{text}</button>
//   )
// }