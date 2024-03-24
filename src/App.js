import './App.css';
import data from './data.json'
import Cards from './components/cards';
import { useState } from 'react';

function App() {
	const [darkMode, setDarkMode] = useState(true)
	function toggleDarkMode() {
		setDarkMode(!darkMode)
	}

	const [country, setCountry] = useState('')
	
	const [query, setQuery] = useState('')
	const cardData = data.filter(item => {
		return query.toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(query)
	}).map(function(cardItem){
		return(
			< Cards
				key={cardItem.id}
				{...cardItem}
			/>
		)
	})
	return (
		<div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
			<header className="App-header">
				<nav className='nav flex justify-content-between align-items-center'>
					<h1>Where in the world?</h1>
					<button className='dark-mode-btn' onClick={toggleDarkMode}>Dark Mode</button>
				</nav>
			</header>
			<main>
				<div className='input-container flex justify-content-between align-items-center'>
					<input type='search' className='search' onChange={(e) => setQuery(e.target.value)} placeholder='Serach for a country'/>
					<select name="country" onChange={(e) => setCountry(e.target.value)}>
						{data.map(item => {
							return <option value={item.id}>{item.region}</option>
						})}
					</select>
				</div>
				<div className='country-container'>
					{/* {country} */}
					{cardData}
				</div>
			</main>
		</div>
	);
}

export default App;
