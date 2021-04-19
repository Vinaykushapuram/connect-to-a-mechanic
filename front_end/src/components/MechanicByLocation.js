import React from 'react';
import Card from './Cards';
import Header from './Header';
import dotenv from 'dotenv';
import { ContactSupportOutlined } from '@material-ui/icons';
import './components.css'
dotenv.config();
function  Emptypage() {
    return (
        <div className='Empty'>
          <div>
             OOPS !! can not find mechanics for this  location.
          </div>
        </div>

    )
    
}

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
        var location=this.props.match.params.location;
            
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
            { 
               this.state.mechanics.length!=0 ?( this.state.mechanics.map((mechanic)=>
               { return(
                   
                    <div>
                    <Card element={mechanic}/>
                    </div>
                   
               )
                })):<Emptypage />
            }
            </div>
        )
    }
}
export default MechanicByLocation;