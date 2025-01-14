import React, { useState, useEffect } from 'react';

const messages = ["Tour Guide", "旅游网站", "欢迎光临"];
const typingSpeed = 100;
const deletingSpeed = 150;
const delayBetweenMessages = 1500;

const Welcome = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentMessage = messages[currentMessageIndex];
            if (isDeleting) {
                setDisplayedText(currentMessage.substring(0, displayedText.length - 1));
                if (displayedText.length === 0) {
                    setIsDeleting(false);
                    setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
                }
            } else {
                setDisplayedText(currentMessage.substring(0, displayedText.length + 1));
                if (displayedText.length === currentMessage.length) {
                    setTimeout(() => setIsDeleting(true), delayBetweenMessages);
                }
            }
        };

        const typingInterval = setInterval(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearInterval(typingInterval);
    }, [displayedText, isDeleting, currentMessageIndex]);

    return (
        <div>
            <h1>{displayedText}</h1>
        </div>
    );
};

export default Welcome;