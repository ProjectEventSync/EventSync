import { db } from '../connect';
import { AppNotification } from '../../types';

// Returns a meetup from the database

async function getNotification(notificationID: string) {
    const notifications = await db.collection('notifications');
    const notification = await notifications.findOne({ _id: notificationID });

    if (!notification) {
        return null;
    }

    return new AppNotification(notification);
}

export { getNotification };