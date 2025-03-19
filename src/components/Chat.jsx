import { useEffect, useState } from "react"
import {auth,db} from "../firebase"
import {query, collection, orderBy, onSnapshot, QuerySnapshot} from 'firebase/firestore'
import { Message } from "./Message";
import { SendMessage } from "./SendMessage";
import { useAuthState } from "react-firebase-hooks/auth";


export const Chat = () => {

    const [message, setMessage] = useState([]); // arreglo vacio para los mensajes
    const [user] = useAuthState(auth);

    useEffect(() => {
      const newQuery = query(collection(db,'messages'),orderBy('timestamp'))
    
      const unsuscribe = onSnapshot(newQuery, (querySnapshot)=>{
        let currentMessages=[]
        querySnapshot.forEach(item =>{
            currentMessages.push({content: item.data(), id: item.id})
            console.log(item.data())

        })

        setMessage(currentMessages);
      })
      return unsuscribe
    }, [])
    

  return (
    <section className="chat-content">
        {
            message && message.map(item=>(
                <Message
                key={item.id}
                message={item.content}
                />
            ))

        }
        {user && <SendMessage/>}
    </section>
  )
}
