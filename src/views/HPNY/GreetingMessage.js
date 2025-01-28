import React from 'react';
import './GreetingMessage.scss';

class GreetingMessage extends React.Component {
    render() {
        return (
            <div className="new-year-container">
                <h1 className="title">Chúc Mừng Năm Mới 2025!</h1>
                <p className="message">
                    Mong một năm mới thành công, hạnh phúc và tràn đầy may mắn!
                </p>
                <div className="fireworks">
                    {[...Array(8)].map((_, index) => (
                        <div className="firework" key={index}>
                            {[...Array(20)].map((_, sparkIndex) => (
                                <div
                                    className="spark"
                                    key={sparkIndex}
                                    style={{ animationDelay: `${Math.random() * 2}s` }}
                                ></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default GreetingMessage;