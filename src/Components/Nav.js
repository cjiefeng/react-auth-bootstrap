import history from '../history';

const goHome = () => {
  history.push('/')
}
const goOpen = () => {
  history.push('/Open')
}
const goProtect = () => {
  history.push('/Protect')
}

const Nav = () => {
  return (
    <div>
      <button onClick={goHome}>Go Home</button>
      <button onClick={goOpen}>Go Open</button>
      <button onClick={goProtect}>Go Protect</button>
    </div>
  )
}

export default Nav;