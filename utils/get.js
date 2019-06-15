'use strict';

var get = {}

get.FindOption = (req) => {

    const del = Boolean(req.query.delete)

    var findOptions = {
        order: [],
        where: {}
    };

    findOptions.offset = Number(req.query.offset || 0)
    findOptions.limit = Number(req.query.limit || 20)

    if (req.query.order) {
        const sort = req.query.order.split(',')
        sort.forEach(element => {
            let field = element
            let order = 'ASC'
            if (element.charAt(0) === '-') {
                order = 'DESC'
                field = element.substring(1)
            }

            findOptions.order.push([field, order])
        });
    }

    if (req.query.delete) {
        del = req.query.delete
        if (del == 'true') {} else {
            findOptions.where.delete = false
        }
    } else {
        findOptions.where.delete = false
    }


    return findOptions
}

module.exports = get