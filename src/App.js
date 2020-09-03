import React, {Component} from "react"; 
import './css/App.css'; 
import BookList from "./BookList"
import BookForm from "./BookForm"

const genres = [
	{value: 'fantasy', label: "Fantasy"}, 
	{value: 'biography', label: "Biography"}, 
	{value: 'business', label: "Business"}, 
	{value: 'mystery', label: "Mystery"}, 
	{value: 'mystery-crime', label: "Mystery-Crime"}
]

const books = [
	{genre: 'fantasy', title: 'Harley Merlin and the secret Coven', guid: '101'}, 
	{genre: 'biography', title: 'Breaking and Entering: the Extraordinary Story of a Hacker called Alien', guid: '102'}, 
	{genre: 'business', title: 'The Phoenix Project', guid: '103'}, 
	{genre: 'mystery', title: 'The Lost Symbol', guid: '104'}, 
	{genre: 'mystery-crime', title: 'The Teacher', guid: '105'}, 
	
]

class App extends Component {
	
	render() {
		return (
			<div className = "App">
				<h1>
					Books 
				</h1>
				<div>
					<BookForm genres={genres} />
				</div>
				<div>
					<BookList books={books} genres={genres}/>
				</div>
			</div>
		)
	}
}

export default App; 