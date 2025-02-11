import logo from './Google_2015_logo.svg'
import './App.css'

type Item = { id: number, name: string; };

function Theo({ weight, color }: { weight: number, color: string; }) {
    return (<div>Theo's weight is: {weight}, his color is {color}</div>);
}

function App() {

  const items: Item[] = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }];

  const features = { weight: 17.8, color: 'cream' };

  return (
    <>
      <img src={logo} alt='logo' />
      <ul>
        {items.map((item: Item) => <li key={item.id}>{item.name}</li>)}
      </ul>
      <Theo {...features} />
    </>
  )
}

export default App
