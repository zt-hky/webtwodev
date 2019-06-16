'use strict';

var get = {}

get.FindOption = (req) => {

    var findOptions = {
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
            if (!findOptions.order) {
                findOptions.order = []
            }
            findOptions.order.push([field, order])
        });
    }

    if (req.query.viewdel) {
        var del = req.query.viewdel
        if (del == 'only') {
            findOptions.where.delete = true
        } else if (del == 'all') {

        } else {
            findOptions.where.delete = false
        }
    } else {
        findOptions.where.delete = false
    }


    return findOptions
}

module.exports = get