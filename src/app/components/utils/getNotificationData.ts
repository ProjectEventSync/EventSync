import { AppNotification, User, Meetup } from '@/types';

export default function getNotificationData({notification, initiator, meetup} : {notification: AppNotification, initiator: User | null, meetup: Meetup | null}){
    switch (notification.type) {
        case 1:
            return {
                title: "New Invite",
                message: `${initiator?.username} invited you to ${meetup?.title}`,
            }
        case 2:
            return {
                title: "Invite Accepted",
                message: `${initiator?.username} accepted your invitation to ${meetup?.title}`,
            }
        case 3:
            return {
                title: "Invite Declined",
                message: `${initiator?.username} declined your invitation to ${meetup?.title}`,
            }
        case 4:
            return {
                title: "Friend Request Accepted",
                message: `${initiator?.username} accepted your friend request`,
            }
        case 5:
            return {
                title: "Friend Request Declined",
                message: `${initiator?.username} declined your friend request`,
            }
        case 6:
            return {
                title: "New Friend Request",
                message: `${initiator?.username} sent you a friend request`,
            }
        case 7:
            return {
                title: "Meetup Date Changed",
                message: `${meetup?.title} date has been changed`,
            }
        case 8:
            return {
                title: "Meetup Location Changed",
                message: `${meetup?.title} location has been changed`,
            }
        case 9:
            return {
                title: "Meetup Cancelled",
                message: `${meetup?.title} has been cancelled`,
            }
        case 10:
            return {
                title: "New Announcement",
                message: `New announcement from ${meetup?.title}`,
            }
        case 11:
            return {
                title: "User not available",
                message: `${initiator?.username} is not available for ${meetup?.title}`,
            }
        case 12:
            return {
                title: "Meetup Reminder",
                message: `${meetup?.title} starts in ${notification.date}`,
            }
        case 13:
            return {
                title: "Meetup Reminder",
                message: `${meetup?.title} is starting now`,
            }
    }

}