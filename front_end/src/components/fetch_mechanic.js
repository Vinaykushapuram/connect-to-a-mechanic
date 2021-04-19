
import React from 'react';
import Card from './Cards'
import './components.css'
import Footer from './Footer';
import dotenv from 'dotenv';
dotenv.config();
function  Loading() {
    return (
        <div  className='Loading'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading"/>
        </div>

    )}
class Foo extends React.Component{ 

    constructor(props)
    {
        super(props);
        this.state=
        {
            mechanics:[],
            IsLoading:true
        }
    }
    
  async  componentDidMount()
  {
      const url=`${process.env.REACT_APP_BACKEND_HOST}/mechanics`;
      const items=await fetch(url);
      const data =await items.json();
      
      this.setState(
          {
              mechanics:data,
             IsLoading:false,
          }
      );
  }
   render()
   {
       return(
           <div>
              {this.state.IsLoading===false ?<div>{this.state.mechanics.map((element) =>
                {  return (
                    <div>
                    <Card element={element} />
                    </div>)
                })}
               
                </div>:
                <Loading />
               
             }
               
           </div>
       );
   }
}
export default  Foo;