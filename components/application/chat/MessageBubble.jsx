'use client'
import Image from 'next/image'

const MessageBubble = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[70%] rounded-lg p-3 border ${isUser ? 'border-secondary' : 'border-primary'}`}>
        {message.type === 'text' ? (
          <p>{message.content}</p>
        ) : (
          <Image 
            src={message.content}
            alt="Message image"
            width={300}
            height={200}
            className="rounded-lg"
          />
        )}
      </div>
    </div>
  )
}
export default MessageBubble