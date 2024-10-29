import PropTypes from 'prop-types'; // Import PropTypes
import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic,
} from 'react-chat-engine-advanced';
import "./App.css";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '794653df-052a-4ad2-b0aa-d6c251a10aef',
        props.user.username,
        props.user.secret
    );

    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    );
};

// Define prop types for validation
ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatsPage;
