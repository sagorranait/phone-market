import ItemTemplate from './ItemTemplate';

function SingleBuyerOrder({order, number}) {
   const {_id, lastly, meeting_location, phone_number, product_info} = order;
   console.log(order);
  return (
   <ItemTemplate>
      <div className='product-number'>
         <p>{number + 1}</p>
      </div>
      <div className='product-image'>
         <img src={'https://imgs.search.brave.com/Bd6z-QBHbK_pWsG9FEdRYBZXLa4Xh2ki_VnTSr0NtT4/rs:fit:493:506:1/g:ce/aHR0cHM6Ly9mcmVl/Ymllc2Nsb3VkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMi9TYW1zdW5n/LUdhbGF4eS1TMjIt/VWx0cmEtOC5wbmc'} alt="product-title" />
      </div>
      <div className='product-info'>
         <h2>{product_info.title}</h2>
         <h4>Product Price: <del>{product_info.original_price}</del> <span>{product_info.resale_price}</span></h4>
         <h4>Counter Price (lastly): <span>{lastly}</span></h4>
      </div>
      <div className='product-info'>
         <p>Phone Number: <span>{phone_number}</span></p>
         <p>Meeting Location: <span>{meeting_location}</span></p>
      </div>
      <div className='order-action'>
         <button className="phoneMarket-btn">Pay Now</button>
      </div>
   </ItemTemplate>
  )
}

export default SingleBuyerOrder