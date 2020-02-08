import React, {Component} from 'react'

const MyContext = React.createContext()

class MyProvider extends Component{
    state={
        name: "Vedran",
        age: 29,
        cool: true
    }
    render(){
        return(
            <MyContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

const Family = () => (
    <div className="family">
        <Person/>
    </div>
)


class Person extends Component{
    render(){
        return(
            <div className="person">
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <p>Name: {context.state.name}</p>
                            <p>Age: {context.state.age}</p>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }        
}

export default class Context extends Component {
    
    render(){
        return (
            <MyProvider>
                <div>
                    <p> I am an app!</p>
                    <Family/>
                </div>
            </MyProvider>
        )
    }
}
