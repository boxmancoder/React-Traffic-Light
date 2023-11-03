import React, { useState } from 'react';

const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const [showPurple, setShowPurple] = useState(false);
    const colors = ['red', 'yellow', 'green', 'purple']; // added purple to the array

const cycleColor = () => {
    const currentIndex = colors.indexOf(selectedColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setSelectedColor(colors[nextIndex]);
};

const resetTrafficLight = () => {
    setShowPurple(false);
    setSelectedColor(''); // No color is selected initially
};

    const handleClick = (color) => {
        setSelectedColor(color);
    };

    const addPurpleLight = () => {
        setShowPurple(true);
    };

    return (
    <div>
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
            {
                showPurple && (
                    <div
                        className={`light purple ${selectedColor === 'purple' ? 'selected' : ''}`}
                        onClick={() => handleClick('purple')}
                    ></div>
                )
            }
        </div>
        <button onClick={cycleColor}>Change Light</button>
        {!showPurple && <button onClick={addPurpleLight}>Add Purple Light</button>}
        {showPurple && <button onClick={resetTrafficLight}>Reset Traffic Light</button>}
    </div>
);
};

export default TrafficLight;
