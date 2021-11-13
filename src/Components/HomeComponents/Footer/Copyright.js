import React from 'react';

const Copyright = () => {
    return (
        <div className="copyright">
            <small>Designed & Build by <a href="mailto:eshanahmed9933@gmail.com" style={{ color: 'rgb(26 210 14)' }}>Eshan Ahmed</a></small> <br />
            <small>{(new Date()).getFullYear()} &copy; copyright | Eshan </small> <br />
        </div>
    );
};

export default Copyright;