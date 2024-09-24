import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Bell,
  MessageCircle,
  Calendar,
  AlertTriangle,
  CircleAlert,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NOTIFICATION_TYPE } from "@/constants/enums";

export function NotificationButton() {
  const notifications = [
    {
      id: 1,
      message: "You have a new message from John Doe.",
      time: "2 min ago",
      category: "message",
    },
    {
      id: 2,
      message: "Your subscription is expiring in 3 days.",
      time: "1 hour ago",
      category: "alert",
    },
    {
      id: 3,
      message: "New comment on your post.",
      time: "5 hours ago",
      category: "comment",
    },
    {
      id: 4,
      message: "You have a new event tomorrow.",
      time: "6 hours ago",
      category: "event",
    },
    {
      id: 1,
      message: "You have a new message from John Doe.",
      time: "2 min ago",
      category: "message",
    },
    {
      id: 2,
      message: "Your subscription is expiring in 3 days.",
      time: "1 hour ago",
      category: "alert", 
    },
    {
      id: 3,
      message: "New comment on your post.",
      time: "5 hours ago",
      category: "comment", 
    },
    {
      id: 4,
      message: "You have a new event tomorrow.",
      time: "6 hours ago",
      category: "event",
    },
    {
      id: 1,
      message: "You have a new message from John Doe.",
      time: "2 min ago",
      category: "message", 
    },
    {
      id: 2,
      message: "Your subscription is expiring in 3 days.",
      time: "1 hour ago",
      category: "alert", 
    },
    {
      id: 3,
      message: "New comment on your post.",
      time: "5 hours ago",
      category: "comment", 
    },
    {
      id: 4,
      message: "You have a new event tomorrow.",
      time: "6 hours ago",
      category: "event",
    },
    {
      id: 1,
      message: "You have a new message from John Doe.",
      time: "2 min ago",
      category: "message", 
    },
    {
      id: 2,
      message: "Your subscription is expiring in 3 days.",
      time: "1 hour ago",
      category: "alert", 
    },
    {
      id: 3,
      message: "New comment on your post.",
      time: "5 hours ago",
      category: "comment", 
    },
    {
      id: 4,
      message: "You have a new event tomorrow.",
      time: "6 hours ago",
      category: "event",
    },
    {
      id: 1,
      message: "You have a new message from John Doe.",
      time: "2 min ago",
      category: "message", 
    },
    {
      id: 2,
      message: "Your subscription is expiring in 3 days.",
      time: "1 hour ago",
      category: "alert", 
    },
    {
      id: 3,
      message: "New comment on your post.",
      time: "5 hours ago",
      category: "comment", 
    },
    {
      id: 4,
      message: "You have a new event tomorrow.",
      time: "6 hours ago",
      category: "event", 
    },
  ];

  const getIconForCategory = (category: string) => {
    switch (category) {
      case NOTIFICATION_TYPE.MESSAGE:
        return <MessageCircle className="w-5 h-5 text-blue-500" />;
      case NOTIFICATION_TYPE.ALERT:
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      case NOTIFICATION_TYPE.COMMENT:
        return <CircleAlert className="w-5 h-5 text-green-500" />;
      case NOTIFICATION_TYPE.EVENT:
        return <Calendar className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="default"
          className="p-2 bg-gray-100 text-gray-400 rounded-full dark:bg-gray-800"
        >
          <Bell className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <div className="border-b px-4 py-2 font-semibold">Notifications</div>
        <ScrollArea className="h-60 p-2">
          <div className="grid gap-1">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start justify-between p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {getIconForCategory(notification.category)}
                  <div className="flex-1 ml-2">
                    <p className="text-sm text-gray-800 dark:text-gray-200">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400">{notification.time}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400 text-center">
                No notifications
              </p>
            )}
          </div>
        </ScrollArea>
        <div className="border-t p-2">
          <Button variant="link" className="w-full text-center">
            View All
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
