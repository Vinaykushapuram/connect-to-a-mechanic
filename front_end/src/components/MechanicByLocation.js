import React from 'react';
import Card from './Cards';
import Header from './Header';
import dotenv from 'dotenv';
dotenv.config();
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
        var location=(window.location.pathname.split('/'))[2];
             
        const url=`${process.env.REACT_APP_BACKEND_HOST}/bylocation/${location}`;
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
            <Header />
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