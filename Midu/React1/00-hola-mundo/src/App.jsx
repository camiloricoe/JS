import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const formatUserName = (userName) => `@${userName}`
    return(
        <section className="App">
            <TwitterFollowCard formatUserName={formatUserName} userName="midudev" name="Miguel Angel Duran" isFollowing={false}/>
            <TwitterFollowCard formatUserName={formatUserName} userName="care5006" name="Camilo A Rico"     isFollowing/>
            <TwitterFollowCard formatUserName={formatUserName} userName="pheralb" name="Pablo Hernadez"     isFollowing/>
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