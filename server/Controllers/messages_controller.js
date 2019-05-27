let messages = [];
let id = 0;


module.exports = {
    create: (req, res) => {
    const {text, time} = req.body;
    messages.push({id, text, time});
    id++;
    res.send(messages)
    },
    
    read: (req, res) => {
        res.send(messages)
    },
    
    update: (req, res) => {
        const {text} = req.body;
        const updateID = req.params.id;
        console.log(text, updateID)
        const messageIndex = messages.findIndex(message => message.id === +updateID)
        let message = messages[messageIndex];
        console.log(message)
        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }

        res.send(messages)
    },
    
    delete: (req, res) => {
        const deleteID = req.params.id;
        messageIndex = messages.findIndex(message => message.id === deleteID)
        messages.splice(messageIndex, 1)
        res.send(messages)
    }
}