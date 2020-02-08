import React, {Component} from 'react'

class CallAPIApp extends Component{

    constructor(){
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount(){
        this.setState({loading: true})//
        fetch("https://swapi.co/api/people/1")
        .then(response => response.json())
        .then(data => {
            this.setState({
                loading: false,
                character: data
            })
        // Dobijemo data iz komponenta ali to moramo spremiti jer ce nestat
        // imamo klasu i konstruktor pa spremamo u state :D
        })
    }

    render(){
        return(
            <div class="container mt-5">
                {this.state.loading ? <div>Loading...</div> : this.state.character.name}
            </div>
        )
    }
}

export default CallAPIApp