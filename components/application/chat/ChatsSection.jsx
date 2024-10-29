import ChatItem from "./ChatItem"
const ChatsSection = () => {
  const chats = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '10:30 AM', unread: 2,Image:'/images/profile.jpg' },
    { id: 2, name: 'Jane Smith', lastMessage: 'See you tomorrow!', time: '9:45 AM', unread: 0,Image:'/images/profile.jpg' },
    { id: 3, name: 'Mike Johnson', lastMessage: 'Thanks for your help', time: 'Yesterday', unread: 1,Image:'/images/profile.jpg' },
  ]

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))}
      </div>
    </div>
  )
}
export default ChatsSection