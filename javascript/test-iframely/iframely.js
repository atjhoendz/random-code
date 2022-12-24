const fetch = 'node-fetch'

const testIframely = async () => {
  try {
  const response = await fetch("https://iframe.ly/api/iframely?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DmDFBTdToRmw&api_key=e1947efc0b941dd1a4a8c0")
  const body = respons.json()

  console.log(body)
  } catch (err) {
    console.log(err)
  }
}

testIframely()

