
import React from 'react';
import Card from './Cards'
import './components.css'
import dotenv from 'dotenv';
dotenv.config();
function  Emptypage() {
    return (
        <div className='Empty'>
          <div>
            Loading ...
          </div>
        </div>

    )}
class Foo extends React.Component{ 

    constructor(props)
    {
        super(props);
        this.state=
        {
            mechanics:[],
        }
    }
    
  async  componentDidMount()
  {
      const url=`${process.env.REACT_APP_BACKEND_HOST}/mechanics`;
      const items=await fetch(url);
      const data =await items.json();
      
      this.setState(
          {
              mechanics:data
          }
      );
  }
   render()
   {
       return(
           <div>
              {this.state.mechanics.length!=0 ?this.state.mechanics.map((element) =>
                {  return (
                    <div>
                    <Card element={element} />
                    </div>)
                }):<Emptypage/>}
           </div>
       );
   }
}
export default  Foo;