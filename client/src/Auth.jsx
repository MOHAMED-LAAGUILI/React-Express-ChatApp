import axios from 'axios';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post("http://localhost:3001/authenticate", { username: value })
            .then(result => props.onAuth({ ...result.data, secret: value }))
            .catch(error => console.log('error', error));
    };

    return (
        <div className="auth-container">
            <div className="auth-overlay"></div>
            <div className="moving-icons">
                {/* Add moving background icons here */}
                <FontAwesomeIcon icon={faUser} className="icon user-icon" />
                <FontAwesomeIcon icon={faUser} className="icon user-icon" />
                <FontAwesomeIcon icon={faUser} className="icon user-icon" />
            </div>
            <form onSubmit={onSubmit} className="auth-form">
                <h1 className="auth-title">Welcome 👋</h1>
                <p className="auth-subtitle">Set a username to get started</p>
                <div className="auth-field">
                    <label className="auth-label" htmlFor="username">Username</label>
                    <input
                        className="auth-input"
                        name="username"
                        required
                        placeholder="Enter your username"
                    />
                </div>
                <button className="auth-button" type="submit">
                    <span className="button-text">Enter</span>
                    <span className="button-effect"></span>
                </button>
            </form>
        </div>
    );
};

AuthPage.propTypes = {
    onAuth: PropTypes.func.isRequired,
};

export default AuthPage;
