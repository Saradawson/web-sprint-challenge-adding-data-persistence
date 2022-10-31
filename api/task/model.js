const db = require('../../data/dbConfig');

const getAll = () => {
    return db('tasks')
}

const getById = (id) => {
    return db('tasks').where('task_id', id).first()
}

const create = (task) => {
    return db('tasks').insert(task)
        .then(([id]) => getById(id))
}

module.exports = {
    getAll,
    getById,
    create
}
