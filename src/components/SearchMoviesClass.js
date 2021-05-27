import React, {Component} from 'react';

class SearchMoviesClass extends Component {
    //Esta es la manera más moderna de inicializar el  state.
    //Las props ya vienen implícitas
    state = { inputText: '' }

    //Antes siempre se usaba el constructor, ahora no es enteramente necesario
    // constructor(props) {
    //     super(props);
    //     this.state = { inputText: '' }
    //     //Para solucionar problemas al relacionar un evento con un método
    //     // this.handleSearchMovie = this.handleSearchMovie.bind(this);

    // }

    //Métodos del ciclo de vida de react
    //https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    //Ocurre cuando el componente se monta
    componentDidMount() {

    }
    //Ocurre cuando el componente se actualiza porque cambia el estado
    componentDidUpdate() {

    }
    //Ocurre cuando el componente se desmonta
    componentWillUnmount() {

    }

    handleSearchMovie = (e) => {
        e.preventDefault();
        if (this.state.inputText.trim().length > 2) {
            this.props.setSearchMovieText(this.state.inputText);
        }
        this.setState({inputText: ''});
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSearchMovie(e)}  >
                <input 
                    onChange={ (e)=>{this.setState({ inputText: e.target.value })} }
                    value={this.state.inputText}
                    className='mr-4'
                    type='text'
                    placeholder='Película...'
                ></input>
                <button>Buscar</button>
            </form>
        )
    }
}


export default SearchMoviesClass;