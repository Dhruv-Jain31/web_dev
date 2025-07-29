import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [latestmessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8000')
    socket.onopen = () => {
      console.log('Connected')
      setSocket(socket)
    }
    socket.onmessage = (message) => {
      console.log('Recieved message:' , message.data)
      setLatestMessage(message.data)
    }
  })

  if(!socket){
    return <div>
      Loading...
    </div>
  }

  return (
    <>
    <input
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder="Type your message"
    />
    <button onClick={() => socket.send(message)}>Send</button>
    <p>Latest message: {latestmessage}</p>
    </>
  )
}

export default App
