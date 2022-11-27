import { ThreeDots } from  'react-loader-spinner'
import '../styles/Loading.css';

function Loading() {
  return (
    <div className='loading-area'>
      <ThreeDots 
         height="80" 
         width="80" 
         radius="9"
         color="#607ba1" 
         ariaLabel="three-dots-loading"
         wrapperStyle={{}}
         visible={true}
      />
    </div>
  )
}

export default Loading