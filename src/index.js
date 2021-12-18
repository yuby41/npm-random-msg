const messages = [
    "oscar",
    "ana",
    "alberto",
    "yoan",
    "valentina"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };