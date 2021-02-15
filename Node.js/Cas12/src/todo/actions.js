const Todo = require('./model');
// _ se stava bidejki nema da go koristime req (request) delot. Vo list ne ni e potrebno
async function list(_, res, next) {
    const todos = await Todo.find({}); // ke ni gi vrati site stavki od Todo kolekcijata
    res.json(todos); // so ova gi vrakjame site podatoci vo response-ot vo json format 
    await next;
}

// Read todo by id
async function get(req, res, next) {
    const { todoId } = req.params; // go zemame todoId od parametrite na rutata get('/:todoId')

    const findTodoById = await Todo.findById({ _id: todoId });
    res.json(findTodoById);  
    await next;
}

// create todo
async function create(req, res, next) {
    const { title } = req.body;
    
    res.json(await Todo.create({ title, createdAt: new Date() }));

    // await Todo.create({
    //     title,
    //     createdAt: new Date()
    // });
    // res.send('Created.');
    await next;
}

//update todo by id
async function update(req, res, next) {
    const { todoId } = req.params;
    const { title } = req.body;

    res.json(await Todo.updateOne({_id: todoId }, { title }));
    await next;
}

// delete todo by id
async function del(req, res, next) {
    const { todoId } = req.params;

    await Todo.deleteOne({ _id: todoId });
    res.send('Todo removed');
    await next;
}

module.exports = {
    list,
    get,
    create,
    update,
    del
}