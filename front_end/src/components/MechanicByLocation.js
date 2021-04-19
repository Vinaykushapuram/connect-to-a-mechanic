import React from 'react';
import Card from './Cards';
import Header from './Header';
import dotenv from 'dotenv';
import Footer from './Footer';
import { ContactSupportOutlined } from '@material-ui/icons';
import './components.css'
dotenv.config();
function  Loading() {
    return (
        <div  className='Loading'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading"/>
        </div>

    )}
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
        IsLoading:true,
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
        this.setState({mechanics:data,IsLoading:false});


    }

    render()
    {
        return (
            <div>
            <Header />
            { this.state.IsLoading?<Loading />:
               this.state.mechanics.length!=0 ?( this.state.mechanics.map((mechanic)=>
               { return(
                   
                    <div>
                    <Card element={mechanic}/>
                    </div>
                   
               )
                })):<div>
                <Emptypage />
             
                </div>
            }
            
            </div>
        )
    }
}
export default MechanicByLocation;