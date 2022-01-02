const useFetchData = (endpoint) => {
  // const { input, init } = props
  fetch(endpoint)
    .then(response => response.json())
    .then(data => console.log(`data: ${ JSON.stringify(data) }`))
    .catch(error => console.error(`error: ${ JSON.stringify(error) }`))
}

export default useFetchData
