import  {useEffect} from 'react'
import styles, {typography} from '../style.js';
import ExportBtn from '../Components/exportBtn.jsx';
import AddProductBtn from '../Components/addProductBtn.jsx';
import CsearchIcon from '../Components/search.jsx'
import CinboxIcon from '../Components/inbox.jsx';
import CnotificationIcon from '../Components/notification.jsx';
import { productHeadingMessage, AddProductHeadingMessage } from '../constants/constant.js';
import { Outlet } from 'react-router-dom';
import DurationBtn from '../Components/durationBtn.jsx';
import { Link, useLocation } from 'react-router-dom';
import SideNav from '../Components/sideNav.jsx';

function ProductsLayout() {

  const location = useLocation()

  useEffect(()=>{
    console.log("location",location.pathname);
    if(location.pathname.includes("products")){
      console.log("yap");
    }
    // if (location.pathname !=  currentactiveIcon|| ) {
    //     currentactiveIcon == location.pathname
        
    // } else {
    //     setShowLayout(true)
    // }

},[location])

  return (
    <div className={`fadein w-[100%] min-h-screen bg-bg-white-0  md:bg-backgroundGrey`}>
      <div className={`${styles.paddingMain} flex w-[100%]  pt-[20px] pb-[9px] bg-bg-white-0 `}>
        <div className='flex flex-col-reverse md:flex-row flex-1 justify-between  gap-[12px] '>
          <div className='flex flex-col gap-[4px]'>
            <h3 className={`${typography.labelLarge}`}> {location.pathname.includes("add-product") ? 'Add Product': 'Products'}</h3>
                  <p className={`${typography.paragraphSmall}`}>{location.pathname.includes("add-product") ? productHeadingMessage: AddProductHeadingMessage }</p>
          </div>

          <div className='ml-auto md:ml-0 flex items-center justify-center' >
            <div className='flex md:gap-[12px]'>
              <CsearchIcon/>
              <CnotificationIcon/>
              <div className='md:hidden'>
                <SideNav/>
              </div>

              <div className='hidden md:block'>
              <CinboxIcon/>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className={`${styles.paddingMain}  w-[100%] bg-backgroundGrey`}>
        <div className='flex flex-row justify-between border-b border-stroke-soft-200 pb-[10px]'>
            <div>
              <DurationBtn/>
            </div>
            
            <div className='flex flex-row  '>
              <div className=' flexitems-center'>
                <CsearchIcon/>
              </div>
              <div className='flex flex-1 flex-row gap-[12px]  items-center w-[]'>
                <ExportBtn/>
                <Link to ={`add-product`}>
                  <AddProductBtn/>
                </Link>
              </div>
            </div>
          </div>
      </div>

    
            
      <div className='flex flex-1 w-full h-full'>
        <>
          <Outlet/>
        </>
      </div>
    </div>
  )
}

export default ProductsLayout
