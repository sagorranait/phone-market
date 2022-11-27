import ItemTemplate from './ItemTemplate';

function SingleBuyerOrder() {
  return (
   <ItemTemplate>
      <div className='product-number'>
         <p>1</p>
      </div>
      <div className='product-image'>
         <img src={'https://imgs.search.brave.com/Bd6z-QBHbK_pWsG9FEdRYBZXLa4Xh2ki_VnTSr0NtT4/rs:fit:493:506:1/g:ce/aHR0cHM6Ly9mcmVl/Ymllc2Nsb3VkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMi9TYW1zdW5n/LUdhbGF4eS1TMjIt/VWx0cmEtOC5wbmc'} alt="product-title" />
      </div>
      <div className='product-info'>
         <h2>SAMSUNG Galaxy S22 Ultra</h2>
         <h4>Price: <del>1199.99</del> <span>349.38</span></h4>
      </div>
      <div className='order-action'>
         <button className="phoneMarket-btn">Pay Now</button>
      </div>
   </ItemTemplate>
  )
}

export default SingleBuyerOrder