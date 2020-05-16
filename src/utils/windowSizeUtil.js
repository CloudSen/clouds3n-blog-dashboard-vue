export default function getPageMaxHeight () {
  const { body } = document
  const html = document.documentElement
  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
  )
}

export function getBodyScrollHeight () {
  const { body } = document
  return body.scrollHeight
}

export function getBodyOffsetHeight () {
  const { body } = document
  return body.offsetHeight
}

export function getHtmlClientHeight () {
  const html = document.documentElement
  return html.clientHeight
}

export function getHtmlScrollHeight () {
  const html = document.documentElement
  return html.scrollHeight
}

export function getHtmlOffsetHeight () {
  const html = document.documentElement
  return html.offsetHeight
}

export function goToTop (vuetify) {
  vuetify.goTo(0)
}
