var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function request () {
}

request.get = function (url, callback) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.send()

  xhr.addEventListener('load', function () {
    var response = {
      statusCode: xhr.status
    }

    callback(null, response, xhr.responseText)
  })

  xhr.addEventListener('error', function () {
    var response = {
      statusCode: xhr.status
    }

    callback(xhr.responseText, response, null)
  })
}

module.exports = request
