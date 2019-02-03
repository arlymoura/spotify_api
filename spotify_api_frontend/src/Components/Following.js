import React from 'react';
import Artist from "./Artist"
import { Row, Col } from 'reactstrap';

 export default class Following extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: {},
			currentPage: 1,
			todosPerPage: 6
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState({
			currentPage: Number(event.target.id)
		});
	}
	
	render() {

		if (this.props.data === undefined) {
				// Render loading UI
				return ("");
			} else {
			 	const todos = this.props.data;
				const { currentPage, todosPerPage } = this.state;
				
        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);
				
        const renderTodos = currentTodos.map((todo, index) => {
          return(<Artist data={todo} key={todo.id} />);
				});
				
				
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
          pageNumbers.push(i);
				}
				
				

        const renderPageNumbers = pageNumbers.map(number => {
          return (
						
								<a className={(currentPage === number) ? 'active' : ''}
									key={number}
									id={number}
									onClick={this.handleClick}
								>
									{number}
								</a>
							
          );
        }); 
				
				return (
				// Render user data
				<div className="tiles">
					{renderTodos}
					<div id="page-numbers" className="pagination">
						<Row>
								<Col  sm="12" md={{ size: 6, offset: 3 }}>
									{renderPageNumbers}
								</Col>
						</Row>
          </div>
				</div>
				);
			}
	}
}
