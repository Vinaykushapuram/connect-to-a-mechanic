
import React from 'react';
import Card from './Cards'

class MechanicByLocation extends React.Component
{
    constructor(props)
    {
        super(props)
    this.state=
    {
        mechanics:[],
    }
    }

    async componentDidMount()
    {    
        
        const url='http://localhost:3000/bylocation'+window.location.pathname;
        console.log(url);
        
        var items=await fetch(url);
        var data=await items.json();
        console.log(data);
        this.setState({mechanics:data});


    }

    render()
    {
        return (
            <div>
            {this.state.mechanics.map((mechanic)=>
               { return(
                    <div>
                    <Card element={mechanic}/>
                    </div>
               )
                })}
            </div>
        )
    }
}
export default MechanicByLocation;