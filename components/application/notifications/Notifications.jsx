import { BsBell } from 'react-icons/bs'

const Notifications = () => {
    const notifications = [
        {
          id: 1,
          title: 'New Message',
          description: 'You have received a new message',
          time: '2 minutes ago',
          read: false
        },
        {
          id: 2,
          title: 'System Update',
          description: 'System maintenance scheduled',
          time: '1 hour ago',
          read: true
        }
      ]
  return (
    <div className="p-6">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-b-primary`}
            >
              <div className="flex justify-start items-center text-primary gap-4">
                <BsBell className='text-4xl'/>
                <div>
                  <h2 className="font-medium">{notification.title}</h2>
                  <p>{notification.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Notifications