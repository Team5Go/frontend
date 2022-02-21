import React from 'react';

const Itemcard = (props) => {
//   const { addItem } = useCart();

    
    return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
               <div className='card p-0 overflow-hidden h-100 shadow'>
                  <img src={props.image} className="card-img-top img-fluid" alt="food img" />
                     <div className="card-body text-center">
                        <h5 className="card-title">{props.name}</h5>
                        <h5 className="card-text">{props.price}</h5>
                        <p className="card-text">{props.description}</p>
                        <button className="btn3  size1 txt11 trans-0-4" onClick={()=> props.addItem(props.item)}>Add to Cart</button>
                    </div>
                </div>
           </div>
    );
};

export default Itemcard;