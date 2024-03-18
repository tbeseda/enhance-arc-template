import arc from '@architect/functions'

export const handler = arc.http.async(async function http(request) {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
    },
    body: 'Hello world!',
  }
})
