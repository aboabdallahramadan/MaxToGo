import { Link } from "@/i18n/routing";


const ChatItem = ({ chat }) => {
  return (
    <Link href={`/application/chats/${chat.id}`}>
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-700 border border-primary rounded-xl mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-primary font-semibold border border-primary">
                {chat.name.charAt(0)}
            </div>
            <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900 dark:text-white">{chat.name}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">{chat.lastMessage}</p>
                {chat.unread > 0 && (
                    <span className="text-primary text-xs rounded-full px-2 py-1 border border-primary">
                    {chat.unread}
                    </span>
                )}
                </div>
            </div>
            </div>
    </Link>
    
  )
}

export default ChatItem