import React from 'react';

const Alert: React.FC = () => {
  return (
    <div className="flex flex-col w-[370px] h-[260px] rounded-xl p-4 items-start gap-4 flex-shrink-0 bg-[#E8E9E0] text-black">
      <h1 className="text-xl font-bold">Alerts</h1>

      <div className="flex overflow-x-auto space-x-4 w-full">
        <div className="min-w-[270px] h-[170px] bg-white p-4 shadow-md rounded-lg">
            <h1 className='pb-2'>RISK IDENTIFIED</h1>
            <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='mr-2 mt-2'>
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M11.3 9.00005H8.70005C8.20005 9.00005 7.80005 8.60005 7.80005 8.10005C7.80005 7.60005 8.20005 7.20005 8.70005 7.20005H12.4C13 7.20005 13.4 6.80005 13.4 6.20005C13.4 5.60005 13 5.20005 12.4 5.20005H11V4.30005C11 3.70005 10.6 3.30005 10 3.30005C9.40005 3.30005 9.00005 3.70005 9.00005 4.30005V5.20005H8.70005C7.10005 5.20005 5.80005 6.50005 5.80005 8.10005C5.80005 9.70005 7.10005 11 8.70005 11H11.2C11.7 11 12.1 11.4 12.1 11.9C12.1 12.4 11.7 12.8 11.2 12.8H7.50005C6.90005 12.8 6.50005 13.2 6.50005 13.8C6.50005 14.4 6.90005 14.8 7.50005 14.8H9.00005V15.7C9.00005 16.3 9.40005 16.7 10 16.7C10.6 16.7 11 16.3 11 15.7V14.8H11.3C12.9 14.8 14.2 13.5 14.2 11.9C14.2 10.3 12.9 9.00005 11.3 9.00005Z" fill="black"/>
                </svg>
                <div>
                    <p>10% decrease in budget.</p>
                    <p className='font-extralight text-sm'>Check bathroom renovation</p>

                </div>
            </div>
            <button className="flex bg-[#C1934F] mt-4 px-20 border border-black py-2 rounded-md text-sm font-medium">
                <p>Resolve</p>
            </button>
        </div>

        <div className="min-w-[270px] h-[170px] bg-white p-4 shadow-md rounded-lg">
            <h1 className='pb-2'>PENDING SIGNATURE</h1>
            <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='mr-2 mt-2'>
            <path d="M22.4481 6.93611C22.3469 6.63301 22.0434 6.32992 21.7399 6.32992C21.4364 6.22889 21.0317 6.32992 20.8294 6.63301L17.5919 9.866C17.1872 10.2701 16.5802 10.4722 15.9732 10.5732C15.3662 10.5732 14.8603 10.3712 14.3545 9.96703C13.9498 9.56291 13.6463 8.95672 13.6463 8.35054C13.6463 7.64332 13.9498 6.93611 14.4556 6.43095L17.4907 3.40003C17.6931 3.19797 17.7943 2.79384 17.7943 2.49075C17.7943 2.18766 17.3896 1.68251 17.0861 1.58147C13.2416 0.167044 8.99245 1.37941 6.46319 4.71343C4.84447 6.83507 4.33862 9.56291 4.94564 12.1897L1.80936 15.3217C1.30351 15.8268 1 16.6351 1 17.3423C1 18.0495 1.30351 18.8577 1.80936 19.3629L4.43979 22.1918C4.94564 22.6969 5.755 23 6.46319 23C7.17138 23 7.98075 22.6969 8.4866 22.1918L11.6229 19.0598C14.658 19.767 17.8954 18.8577 20.2223 16.6351C22.8528 14.1093 23.6621 10.2701 22.4481 6.93611ZM18.9071 15.2206C17.0861 17.0392 14.3545 17.7464 11.8252 17.0392C11.4205 16.9382 11.117 17.0392 10.8135 17.3423L7.27256 20.8784C6.96904 21.1814 6.36202 21.1814 5.95734 20.8784L3.22575 18.1505C3.0234 17.8474 2.92223 17.6454 2.92223 17.4433C2.92223 17.2412 3.0234 16.9382 3.22575 16.8371L6.7667 13.301C7.07021 12.998 7.17138 12.6949 6.96904 12.2907C6.36202 10.0681 6.7667 7.64332 8.08192 5.9258C9.4983 4.00621 11.6229 2.99591 13.8486 2.99591C14.1521 2.99591 14.4556 2.99591 14.7592 3.09694L12.9381 4.91549C12.0276 5.72374 11.5217 7.03714 11.5217 8.24951C11.5217 9.46187 12.0276 10.4722 12.8369 11.2804C13.6463 11.9876 14.658 12.3918 15.7709 12.3918C15.7709 12.3918 15.7709 12.3918 15.872 12.3918C16.9849 12.3918 18.0978 11.9876 18.9071 11.0784L20.8294 9.15878C21.234 11.3815 20.4247 13.6041 18.9071 15.2206Z" fill="black"/>
            </svg>
                <div>
                    <p>3 forms need to sign</p>
                    <p className='font-extralight text-sm'>Check bathroom renovation</p>

                </div>
            </div>
            <button className="flex bg-[#C1934F] mt-4 px-20 border border-black py-2 rounded-md text-sm font-medium">
                <p>Resolve</p>
            </button>
        </div>

        <div className="min-w-[270px] h-[170px] bg-white p-4 shadow-md rounded-lg">
        <h1 className='pb-2'>RISK IDENTIFIED</h1>
            <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='mr-2 mt-2'>
                <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18Z" fill="black"/>
                <path d="M11.3 9.00005H8.70005C8.20005 9.00005 7.80005 8.60005 7.80005 8.10005C7.80005 7.60005 8.20005 7.20005 8.70005 7.20005H12.4C13 7.20005 13.4 6.80005 13.4 6.20005C13.4 5.60005 13 5.20005 12.4 5.20005H11V4.30005C11 3.70005 10.6 3.30005 10 3.30005C9.40005 3.30005 9.00005 3.70005 9.00005 4.30005V5.20005H8.70005C7.10005 5.20005 5.80005 6.50005 5.80005 8.10005C5.80005 9.70005 7.10005 11 8.70005 11H11.2C11.7 11 12.1 11.4 12.1 11.9C12.1 12.4 11.7 12.8 11.2 12.8H7.50005C6.90005 12.8 6.50005 13.2 6.50005 13.8C6.50005 14.4 6.90005 14.8 7.50005 14.8H9.00005V15.7C9.00005 16.3 9.40005 16.7 10 16.7C10.6 16.7 11 16.3 11 15.7V14.8H11.3C12.9 14.8 14.2 13.5 14.2 11.9C14.2 10.3 12.9 9.00005 11.3 9.00005Z" fill="black"/>
                </svg>
                <div>
                    <p>2 days behind schedule</p>
                    <p className='font-extralight text-sm'>Check landscaping scope</p>

                </div>
            </div>
            <button className="flex bg-[#C1934F] mt-4 px-20 border border-black py-2 rounded-md text-sm font-medium">
                <p>Resolve</p>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
