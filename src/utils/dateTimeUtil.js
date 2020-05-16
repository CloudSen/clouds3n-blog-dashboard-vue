// HH:mm:ss
export default function getCurrentTime () {
  return new Date().toTimeString().substring(0, 9)
}

// yyyy-MM-dd
export function getCurrentDate () {
  return new Date().toISOString().substring(0, 10)
}

// yyyy-MM-dd HH:mm:ss
export function getCurrentDateTime () {
  const today = new Date()
  return `${today.toISOString().substring(0, 10)} ${today.toTimeString().substring(0, 9)}`
}

// yyyy-MM-dd HH:mm:ss
export function parseCurrentDataTime (time) {
  const dateTime = new Date(time)
  return `${dateTime.toISOString().substring(0, 10)} ${dateTime.toTimeString().substring(0, 9)}`
}
