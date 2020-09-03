import React, {Component} from 'react'; 
import './css/BookForm.css'

class BookForm extends Component {
	
	constructor(props){
		super(props);
		
		this.handleChangeTitle = this.handleChangeTitle.bind(this); 
		this.handleChangeGenre = this.handleChangeGenre.bind(this);
		this.changeState = this.changeState.bind(this); 
		this.toGenreOption = this.toGenreOption.bind(this);
		
		this.state = {title: '', genre: 'fantasy'};
	}
	
	handleChangeTitle (event) {
		this.changeState({
			title: event.target.value
		})
	}
	
	handleChangeGenre (event) {
		this.changeState({
			genre: event.target.value
		})
	}
	
	changeState (keyVal){
		this.changeState(
			Object.assign({},
				this.state, keyVal
			)
		)
	}
	
	toGenreOption(g){
		return (
			<option key={g.value} value={g.value}>
				{g.value}
			</option>
		)
	}
	
	render(){
		return (
			<>
				<form className="book-form" onSubmit={this.tryCreateBook}>
					<span class="book-form-element">
						<label>Title&nbsp;
							<input type="text" value={this.state.title} onChange={this.handleChangeTitle} />
						</label>
					</span>
					<span class="book-form-element">
						<label>Genre&nbsp;
							<select type="text" value={this.state.genre} onChange={this.handleChangeGenre}>
								{this.props.genres.map(this.toGenreOption)}
							</select>
						</label>
					</span>
					<span class="book-form-element">
						<input type="submit" value="Submit" />
					</span>
				</form>
			</>
		)
	}
}

export default BookForm; 