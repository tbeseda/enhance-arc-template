/** @type {import('@enhance/types').EnhanceHeadFn} */
export default function Head(state) {
  const { req, store, status, error } = state
  const { path } = req
  const title = `My app — ${path}`
  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      <link rel="icon" href="/_public/favicon.ico">
      <link rel="stylesheet" href="/_public/css/reset.css">
      <link rel="stylesheet" href="/_public/css/vars.css">
      <link rel="stylesheet" href="/_public/css/styles.css">
      <link rel="stylesheet" href="/_public/css/article.css">
    </head>
  `
}
