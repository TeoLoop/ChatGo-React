import React from 'react'
import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, auth } from '../firebase'
import Picker from 'emoji-picker-react';


export const SendMessage = () => {

    const [input, setInput] = useState('')
    const [open, setOpen] = useState('close')

    const SendMessage = async (event) => {
        event.preventDefault()
        const { uid, displayName, photoURL } = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            photo: photoURL,
            timestamp: serverTimestamp()
        })

        setInput('')
    }

    const emoji = () => {
        if(open==='close'){ 
            setOpen('open')
        }else{
            setOpen('close')
        }
    }
    const closeEmoji = () => setOpen('close')

    const onEmojiClick = (emojiObject) => {
        setInput(prevInput => prevInput + emojiObject.emoji)
    }


    return (
        <form onSubmit={SendMessage}>
            <button
                type='button'
                className='btn-emoji'
                onClick={emoji}
            >
                <i className="fa-solid fa-face-smile"></i>
            </button>
            <div className={open}>
                <Picker onEmojiClick={onEmojiClick} height={400} width={300}/>
            </div>
            <input
                type="text"
                placeholder='Escriba su mensaje'
                value={input}
                onChange={e => setInput(e.target.value)}
            />

            <button
                type='submit'
            >
               <i className="fa-solid fa-paper-plane"></i>
            </button>
        </form>
    )
}
