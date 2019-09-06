const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')


var dbController = function () {
  this.getUserDB = function () {
    const adapter = new FileSync('./db/test.json')
    const db = low(adapter)
    db.defaults({ list: [], count: 0 })
      .write()
    return {
      createUser: function (data) {
        if (this.getUser(data.id)) throw new Error('EXIST USER')
        var res = db.get('list').push(data).write()
        this.countUsers()
        return res
      },
      getUser: function (id) {
        return db.get('list').find({ id: id }).value()
      },
      getUserList: function () {
        return db.get('list').value()
      },
      countUsers: function () {
        return db.update('count', c => this.getUserList().length).write()
      },
      removeUser: function (id) {
        var res = db.get('list').remove({ id: id }).write()
        // this.countUsers()
        return res
      },
      Delete: function () { }
    }
  }

  let db = this.getUserDB()
  // db.createUser({ id: '073', name: '78' })
  // db.createUser({ id: '079', name: '78' })
  // db.createUser({ id: '080', name: '78' })
  // db.createUser({ id: '8', name: '78' })
  // db.createUser({ id: '18', name: '78' })
  db.removeUser('8')
}

module.exports = dbController


// // Set some defaults (required if your JSON file is empty)
// db.defaults({ posts: [], user: {}, count: 0 })
//   .write()

// // Add a post
// db.get('posts')
//   .push({ id: 1, title: 'lowdb is awesome'})
//   .write()

// // Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode')
//   .write()

// // Increment count
// db.update('count', n => n + 1)
//   .write()