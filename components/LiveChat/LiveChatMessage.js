import ListGroup from 'react-bootstrap/ListGroup';
import styles from '@/styles/liveChatMessage.module.css';

const LiveChatMessage = ({ isIncoming, name, otherName }) => {
    const chatClass = isIncoming ? styles['chat-left'] : styles['chat-right'];

    return (
        <ListGroup.Item className={`${styles['chat']} ${chatClass}`}>
            <div className={styles['chat-avatar']}>
                <a className={`${styles['avatar']} ${styles['avatarOnline']}`} data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="Edward Fletcher">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..." />
                    <i></i>
                </a>
            </div>
            <div className={styles['chat-body']}>
                <div className={styles['chat-content']}>
                    <p>{name}</p>
                    <p>Well, I am just looking around.</p>
                    <time className={styles['chat-time']} dateTime="2015-07-01T11:39">11:39:57 am</time>
                </div>
            </div>
        </ListGroup.Item>
    );
};

export default LiveChatMessage;
