const { readFile } = require('fs')

const getFileContent = filePath => new Promise((resolve, reject) => {
  readFile(filePath, (error, content) => {
    error ? reject(error) : resolve(content)
  })
})

module.exports = {
  getFileContent
};
