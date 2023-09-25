import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    { userName: "pablodev", name: "Pablo Rivero", isFollowing: true },
    { userName: "franciscodev", name: "Francisco Rivero", isFollowing: false },
    { userName: "lucaodev", name: "Luca Prodan", isFollowing: true },
    { userName: "titodev", name: "Tito Tito", isFollowing: false },
  ]

export function App() {
  //const pablodev={ initialIsFollowing:true,userName:'pablodev'}//paso todas las props  de una porque son muchas, mala practica..

  return (
    <section className="App">
    {
        users.map(user=> { 
            const{userName,name,isFollowing}=user
            return(
                <TwitterFollowCard 
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
            )
            })
    }
    </section>
  );
}
