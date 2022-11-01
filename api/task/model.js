const db = require('../../data/dbConfig');

const getAll = () => {
     return db('tasks as t')
        .join('projects as p', 'p.project_id', '=', 't.project_id')
        .select(
            'p.project_description',
            'p.project_name',
            't.*'
        )
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
