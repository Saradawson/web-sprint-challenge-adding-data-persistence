const db = require('../../data/dbConfig');

const getAll = () => {
    return db('projects')
}

const getById = (id) => {
    return db('projects').where('project_id', id).first()
}

const create = (project) => {
    return db('projects').insert(project)
        .then(([id]) => getById(id))
}

module.exports = {
    create,
    getById,
    getAll
}
