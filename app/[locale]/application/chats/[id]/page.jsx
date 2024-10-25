'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import MessageBubble from '@/components/application/chat/MessageBubble'
import { BsCamera } from 'react-icons/bs';
import TitleGoldenBar from '@/components/application/TitleGoldenBar';
import { useTranslations } from 'next-intl';

  const page = () => {
    const t = useTranslations("Application.Chat")
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)
    const [newMessage, setNewMessage] = useState('')
    const [selectedImage, setSelectedImage] = useState(null)
    const params = useParams()
    const chatId = params.id

    useEffect(() => {
      // Dummy data for testing
      const dummyMessages = [
        { id: 1, type: "text", content: 'Hello! How can I help you today?', sender: 'assistant' },
        { id: 2, type: "image", content: '/images/ad.jpg', sender: 'user' },
        { id: 3, type: "text", content: 'Sure, I\'d be happy to help with React. What would you like to know?', sender: 'user' },
        { id: 4, type: "image", content: '/images/ad.jpg', sender: 'assistant' },
      ]

      setMessages(dummyMessages)
      setLoading(false)

      // Commented API fetch for later use
      /*
      const fetchMessages = async () => {
        try {
          const response = await fetch(`/api/chats/${chatId}/messages`)
          const data = await response.json()
          setMessages(data)
        } catch (error) {
          console.error('Error fetching messages:', error)
        } finally {
          setLoading(false)
        }
      }
      fetchMessages()
      */
    }, [chatId])

    const handleSendMessage = () => {
      if (newMessage.trim() !== '' || selectedImage) {
        const newMsg = {
          id: messages.length + 1,
          type: selectedImage ? "image" : "text",
          content: selectedImage ? URL.createObjectURL(selectedImage) : newMessage,
          sender: 'user'
        }
        setMessages([...messages, newMsg])
        setNewMessage('')
        setSelectedImage(null)
      }
    }

    const handleImageUpload = (e) => {
      const file = e.target.files[0]
      if (file) {
        setSelectedImage(file)
      }
    }

    return (
        <>
            <TitleGoldenBar name={t("Chat")} goBack={true} />
            <div className="container max-w-4xl pt-24">
                <div className="rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                    {messages.map((message, index) => (
                    <MessageBubble
                        key={index}
                        message={message}
                        isUser={message.sender === 'user'}
                    />
                    ))}
                </div>
                <div className="mt-4 flex gap-2">
                    <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg bg-transparent focus:outline-none border-primary"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                    />
                    <label
                    htmlFor="image-upload"
                    className="cursor-pointer bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
                    >
                    <BsCamera className='text-2xl text-secondary' />
                    </label>
                    <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                    Send
                    </button>
                </div>
                </div>
            </div>
        </>
      
    )
  }
  export default page