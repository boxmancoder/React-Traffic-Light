import React, { useState } from 'react';


const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState('');

    const handleClick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div className="traffic-light">
            <div
                className={`light red ${selectedColor === 'red' ? 'selected' : ''}`}
                onClick={() => handleClick('red')}
            ></div>
            <div
                className={`light yellow ${selectedColor === 'yellow' ? 'selected' : ''}`}
                onClick={() => handleClick('yellow')}
            ></div>
            <div
                className={`light green ${selectedColor === 'green' ? 'selected' : ''}`}
                onClick={() => handleClick('green')}
            ></div>
        </div>
    );
};

export default TrafficLight;