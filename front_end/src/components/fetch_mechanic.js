
import React from 'react';
import Card from './Cards'


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
              {this.state.mechanics.map((element) =>
                {  return (
                    <div>
                    <Card element={element} />
                    </div>)
                })}
           </div>
       );
   }
}
export default  Foo;