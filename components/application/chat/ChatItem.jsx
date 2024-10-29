import { Link } from "@/i18n/routing";
import Image from "next/image";

const ChatItem = ({ chat }) => {
  return (
    <Link href={`/application/chats/${chat.id}`}>
        <div className="flex items-center p-4 cursor-pointer hover:bg-gray-700 border border-primary rounded-xl mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-primary font-semibold border border-primary">
                <Image src={chat.Image} alt={chat.name} className="rounded-full object-cover" style={{ width: '40px', height: '40px' }} width={40} height={40} />
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