import { User } from '@/types';

interface fetchParams {
    status: string;
    setLoadingUser: any;
    setLoadingMeetups: any,
    setLoadingNotifications: any;
    loadingUser: boolean;
    session: any;
    setUser: any;
    setKnownUsers: any;
    setUserTheme: any;
    user: any;
    loadingNotifications: boolean;
    setNotifications: any;
    knownUsers: any;
    loadingMeetups: boolean;
    setMeetups: any;
    router: any;

}

export default function fetchData({status, setLoadingUser, setLoadingMeetups, setLoadingNotifications, loadingUser, session, setUser, setKnownUsers, setUserTheme, user, loadingNotifications, setNotifications, knownUsers, loadingMeetups, setMeetups, router} : fetchParams){
    if (status == "done" && loadingUser) {
        setLoadingUser(false);
        fetch(`/api/user/${session.userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session.token}`
            }
        }).then((data) => {
            data.json().then((user) => {
                setUser(user);
                setKnownUsers((prev: any) => [...prev, user]);
                setUserTheme(user.theme);
            });
        });
    } else if (status == "error") {
        if (typeof window !== 'undefined') {
            router.push('/login');
        }
    }

    if (user && loadingNotifications) {
        setLoadingNotifications(false);
        setNotifications([]);
        if (!user.notifications) {
            return;
        }
        user.notifications.forEach((notificationID: string) => {
            fetch(`/api/notification/${notificationID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.token}`
                }
            }).then((res) => {
                res.json().then((notification) => {
                    setNotifications((prev: any) => [...prev, notification]);
                    if (notification.initiator) {
                        if (knownUsers.find((user: User) => user._id == notification.initiator)) {
                            return;
                        }
                        fetch(`/api/user/${notification.initiator}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${session.token}`
                            }
                        }).then((res) => {
                            res.json().then((initiator) => {
                                setKnownUsers((prev: any) => [...prev, initiator]);
                            });
                        });
                    }
                });
            });
        });
    }

    if (user && loadingMeetups) {
        setLoadingMeetups(false);
        setMeetups([]);
        if (!user.meetups) {
            return;
        }
        user.meetups.forEach((meetupID: string) => {
            fetch(`/api/meetup/${meetupID}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session.token}`
                }
            }).then((res) => {
                res.json().then((meetup) => {
                    setMeetups((prev: any) => [...prev, meetup]);
                    if (knownUsers.find((user: User) => user._id == meetup.creator)) {
                        return;
                    }
                    fetch(`/api/user/${meetup.creator}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${session.token}`
                        }
                    }).then((res) => {
                        res.json().then((creator) => {
                            setKnownUsers((prev: any) => [...prev, creator]);
                        });
                    });
                });
            });
        });
    }
}