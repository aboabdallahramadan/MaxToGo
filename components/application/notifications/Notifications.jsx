"use client"
import { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import { Link } from '@/i18n/routing';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { useTranslations } from 'next-intl';

const Notifications = () => {
  const t = useTranslations("Application.Notifications");
    const [expandedIds, setExpandedIds] = useState([]);

    const notifications = [
        {
            id: 1,
            title: 'New Message',
            description: 'You have received a new message with additional details that can be quite long and need to be expanded to read fully. Here is more content that will be hidden initially.',
            time: '2 minutes ago',
            read: false,
            taskId: '123',
            taskType: 'owned'
        },
        {
            id: 2,
            title: 'System Update',
            description: 'System maintenance scheduled with extended information about the maintenance window System System maintenance scheduled with extended information about the maintenance window System System maintenance scheduled with extended information about the maintenance window System System maintenance scheduled with extended information about the maintenance window System maintenance scheduled with extended information about the maintenance window and System maintenance scheduled with extended information about the maintenance window and and expected impact.',
            time: '1 hour ago',
            read: false,
        },
        {
          id: 3,
          title: 'System Update',
          description: 'System maintenance scheduled with extended information about the maintenance window and expected impact.',
          time: '1 hour ago',
          read: true,
          taskId: '456',
          taskType: 'purchased'
      }
    ];

    const toggleExpand = (id) => {
        setExpandedIds(prev => 
            prev.includes(id) 
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    const getTaskUrl = (taskId, taskType) => {
        return taskType === 'owned' 
            ? `/application/my-tasks/${taskId}`
            : `/application/purchases/${taskId}`;
    };

    return (
        <div className="p-6">
            <div className="space-y-4">
                {notifications.map((notification) => {
                    const isExpanded = expandedIds.includes(notification.id);
                    
                    return (
                        <div
                            key={notification.id}
                            className="p-4 border-b border-b-primary cursor-pointer transition-all duration-300"
                        >
                            <div 
                                className="flex justify-between items-start text-primary"
                                onClick={() => toggleExpand(notification.id)}
                            >
                                <div className="flex gap-4">
                                    <BsBell className="text-4xl flex-shrink-0" />
                                    <div>
                                        <h2 className="font-medium">{notification.title}</h2>
                                        <p className={`transition-all duration-300 ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'}`}>
                                            {notification.description}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2">{notification.time}</p>
                                    </div>
                                </div>
                                {isExpanded ? <BsChevronUp /> : <BsChevronDown />}
                            </div>

                            {isExpanded && notification.taskId && (
                                <div className="mt-4 ml-14">
                                    <Link 
                                        href={getTaskUrl(notification.taskId, notification.taskType)}
                                        className="inline-block px-4 py-2 bg-primary text-secondary rounded-md hover:bg-hoverPrimary transition-colors"
                                    >
                                        {t("View Task")}
                                    </Link>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Notifications;
