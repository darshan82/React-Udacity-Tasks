import React from 'react';
export default class extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            text:'',
            visibility:'hidden',
            gamePlayed:'0',
            counter:0
        }
    }
    onSubmit(visibility)
    {
        this.setState({
            visibility:'visible',
            counter:++this.state.counter
        },() =>
        {
            if(this.state.counter === 1)
            {
                this.setState({gamePlayed:'0'})
            }
            else if(this.state.counter === 2)
            {
                this.setState({gamePlayed:'*'})
            }
            else
            {
                this.setState({gamePlayed:'0',counter:1})
            }
        })
    }
    render()
    {
        return(
            <main>
                <input type='text' onChange={(e) => this.setState({text:e.target.value})}/>
                <button onClick = {this.onSubmit.bind(this,this.state.visibility)}>Click</button>
                <p style={{visibility:this.state.visibility}}>{this.state.text} played {this.state.gamePlayed} games</p>
            </main>
        )
    }
}