
const todos = [
    {
        "text": "Go to Gym at 9", "completed": false
    },
    {
        "text": "Go to Office at 10", "completed": false
    },
    {
        "text": "Meeting at 11", "completed": false
    }
]

module.exports.get = (req, res) => {
    return res.end(JSON.stringify(todos));
}
module.exports.post = (req, res) => {
    const data = req.body;
    console.log(data);
    console.log("post method called");
    todos.push(data);
    // Send a response if needed
    res.status(200).json({ message: 'Data received successfully' });
}
