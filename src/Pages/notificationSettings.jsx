
import ToggleWithSwitch from '../Components/toggle';
import styles, {typography} from '../style';


function NotificationSettings() {
  return (
    <div className={`${styles.paddingMain} fadein w-full h-full bg-bg-white-0  md:bg-backgroundGrey flex flex-col`}>
      <div className='w-full  flex flex-col flex-1 gap-[32px]'>
        <div className='flex flex-row flex-1 items-center'>
          <h5 className={`${typography.labelLarge} text-text-main-900`}>Notification Settings</h5>
        </div>

        <div className='flex flex-col w-full gap-[40px]'>
          <div className='w-full flex flex-col md:flex-row flex-1 gap-[16px] md:gap-0'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
              <h5 className={`${typography.labelSmall} text-text-main-900`}>General Notifications</h5>
              <p className={`${typography.paragraphXSmall}`}>Notifications about transactions, balance and exclusive offers.</p>
            </div>

            <div className=' flex flex-col flex-1 gap-[10px]'>
              <div className='flex items-center flex-row flex-1 gap-2'>
                <div className='hidden md:flex items-center'><ToggleWithSwitch/></div>
                <div>
                  <h5 className={`${typography.labelSmall} text-text-main-900`}>Order Alerts</h5>
                  <p className={`${typography.paragraphXSmall}`}>Receive notifications for every new order.</p>
                </div>
                <div className='md:hidden flex items-centers ml-auto'><ToggleWithSwitch/></div>
              </div>

              <div className='flex flex-row flex-1 gap-2'>
                <div className='hidden md:flex items-center'><ToggleWithSwitch/></div>
                <div>
                  <h5 className={`${typography.labelSmall} text-text-main-900`}>Transaction Alerts</h5>
                  <p className={`${typography.paragraphXSmall}`}>Receive notifications for every transaction.</p>
                </div>
                <div className='md:hidden flex items-centers ml-auto'><ToggleWithSwitch/></div>
              </div>

              <div className='flex flex-row flex-1 gap-2'>
                <div className='hidden md:flex items-center'><ToggleWithSwitch/></div>
                <div>
                  <h5 className={`${typography.labelSmall} text-text-main-900`}>Low Stock Alert</h5>
                  <p className={`${typography.paragraphXSmall}`}>Receive a warning if your stock falls below 30 unit</p>
                  <div className='flex flex-row flex-1'>
                    <p className={`${typography.labelSmall} text-primaryBase cursor-pointer`}>Edit Limit</p>
                  </div>
                </div>
                <div className='md:hidden flex items-centers ml-auto'><ToggleWithSwitch/></div>
              </div>
            </div>

          </div>

          <div className='bg-stroke-soft-200 h-[1px] hidden md:block rounded-none w-[100%] mt-[5px]'> </div>


          <div className='w-full flex flex-col md:flex-row flex-1 gap-[16px] md:gap-0'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
              <h5 className={`${typography.labelSmall} text-text-main-900`}>Notification Method</h5>
              <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Choose how you prefer to receive notifications.</p>
            </div>

            <div className=' flex flex-col flex-1 gap-[10px]'>
              <div className='flex flex-row flex-1 gap-2'>
                <div className='hidden md:flex items-center'><input className=' cursor-pointer' type='checkbox'/></div>
                  <div>
                    <h5 className={`${typography.labelSmall} text-text-main-900`}>Email Notifications</h5>
                    <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Receive notifications via email.</p>
                  </div>
                  <div className='md:hidden flex items-centers ml-auto'><input className=' cursor-pointer' type='checkbox'/></div>
              </div>

              <div className='flex flex-row flex-1 gap-2'>
              <div className='hidden md:flex items-center'><input className=' cursor-pointer' type='checkbox'/></div>
                  <div>
                    <h5 className={`${typography.labelSmall} text-text-main-900`}>Push Notifications</h5>
                    <p className={`${typography.paragraphXSmall}`}>Get real-time updates and alerts directly on your device</p>
                  </div>
                  <div className='md:hidden flex items-centers ml-auto'><input className=' cursor-pointer' type='checkbox'/></div>
              </div>

              <div className='flex flex-row flex-1 gap-2'>
              <div className='hidden md:flex items-center'><input className=' cursor-pointer' type='checkbox'/></div>
                  <div>
                    <h5 className={`${typography.labelSmall} text-text-main-900`}>SMS Notifications</h5>
                    <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Receive notifications via SMS</p>
                </div>
                <div className='md:hidden flex items-centers ml-auto'><input className=' cursor-pointer' type='checkbox'/></div>
              </div>
            </div>

          </div>

          <div className='bg-stroke-soft-200 h-[1px] hidden md:block rounded-none w-[100%] mt-[5px]'> </div>

          <div className='w-full flex flex-col md:flex-row flex-1 gap-[16px] md:gap-0'>
            <div className='flex flex-col gap-[12px] max-w-[416px] md:w-[50%]'>
              <h5 className={`${typography.labelSmall} text-text-main-900`}>Theme Options</h5>
              <p className={`${typography.paragraphXSmall}`}>Pick theme to personalize experience.</p>
            </div>

            <div className=' flex flex-col flex-1 gap-[10px]'>
              <div className='flex flex-row flex-1 gap-2'>
                <div className='hidden md:flex items-center'><input className=' cursor-pointer' type='radio'/></div>
                  <div>
                    <h5 className={`${typography.labelSmall} text-text-main-900`}>Light Mode <span className={`${typography.paragraphXSmall} text-text-sub-500`}>(Default)</span></h5>
                    <p className={`${typography.paragraphXSmall}`}>Pick a clean and classic light theme..</p>
                  </div>
                  <div className='md:hidden flex items-centers ml-auto'><input className=' cursor-pointer' type='radio'/></div>
              </div>

              <div className='flex flex-row flex-1 gap-2'>
                <div className='hidden md:flex items-center'><input className=' cursor-pointer' type='radio'/></div>
                  <div>
                    <h5 className={`${typography.labelSmall} text-text-main-900`}>Dark Mode <span className={`${typography.paragraphXSmall} text-text-sub-500`}>(Coming Soon)</span></h5>
                    <p className={`${typography.paragraphXSmall} text-text-sub-500`}>Select a sleek and modern dark theme.</p>
                  </div>
                  <div className='md:hidden flex items-centers ml-auto'><input className=' cursor-pointer' type='radio'/></div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>

  )
}

export default NotificationSettings