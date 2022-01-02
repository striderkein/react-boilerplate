import useFetchData from 'hooks/useFetchData'

const Button = props => {
  const handleClick = () => {
    const { endpoint } = props
    console.log(`endpoint: ${endpoint}`)
    useFetchData(endpoint)
  }

  return (
    <button type="button" onClick={handleClick}>
      get
    </button>
  )
}

export default Button
