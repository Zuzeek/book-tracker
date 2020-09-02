import React, {Component} from 'react';
import './css/BookList.css'

class BookList extends Component {
	
	constructor(props) {
		super(props); 
		this.toBook = this.toBook.bind(this); 
		this.genreLabel = this.genreLabel.bind(this); 
	}
	
	genreLabel(g) {
		return "?"; 
	}
	
	toBook(b) {
		var g = "?"; 
		for (var i = 0; i < this.props.genres.length; i++) {
			if(this.props.genres[i].value == b.genre) {
				g = this.props.genres[i].label; 
				break; 
			}
		}
		return (<tbody key= {b.guid}>
					<tr>
						<td>{b.title}</td>
						<td>{g}</td>
					</tr>
				</tbody>)
	}
	
	render(){
		return (
			<table className="book-list">
				<tbody>
					<tr>
						<th>Name</th>
						<th>Genre</th>
					</tr>
				</tbody>
				{this.props.books.map(this.toBook)}
			</table>
		)
	}
}

export default BookList; 