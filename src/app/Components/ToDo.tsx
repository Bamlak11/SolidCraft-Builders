import React from "react";

const ToDo: React.FC = () => {
    return (
        <div className="flex flex-col w-[430px] h-[408px] pt-6 pb-2 p-2 items-start gap-6 flex-shrink-0 rounded-[10px] bg-[#E8E9E0] shadow-md">

            <div className="flex space-x-48 justify-between">
                <h1 className="text-xl flex text-black font-bold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8.69412 10.2028C8.28842 9.80289 7.67986 9.80289 7.27416 10.2028C6.86845 10.6027 6.86845 11.2026 7.27416 11.6025L11.4326 16.0014C11.6355 16.2014 11.9398 16.3014 12.1426 16.3014C12.4469 16.3014 12.7512 16.2014 12.8526 15.9014L22.7923 3.60436C23.0966 3.20445 23.0966 2.50462 22.5895 2.20469C22.2852 1.90476 21.6767 1.90476 21.271 2.40464L19.2424 4.90405C17.4168 3.10448 14.7797 2.00474 12.1426 2.00474C6.56417 2.00474 2 6.50367 2 12.0024C2 17.5011 6.56417 22 12.1426 22C17.721 22 22.2852 17.5011 22.2852 12.0024C22.2852 11.1026 22.1838 10.2028 21.8795 9.30301C21.6767 8.80313 21.1695 8.5032 20.6624 8.60317C20.1553 8.70315 19.851 9.30301 19.9524 9.80289C20.1553 10.5027 20.2567 11.3025 20.2567 12.0024C20.2567 16.4013 16.6054 20.0005 12.1426 20.0005C7.67986 20.0005 4.02852 16.4013 4.02852 12.0024C4.02852 7.60341 7.67986 4.00426 12.1426 4.00426C14.374 4.00426 16.4025 4.90405 18.0253 6.50367L12.1426 13.8019L8.69412 10.2028Z" fill="black" />
                </svg>To-Do</h1>

                <button className="flex bg-[#C1934F] text-black px-4 border border-black py-1.5 rounded-md text-sm font-medium">
                    <p>View All Tasks</p>
                </button>
            </div>

            <div className="flex flex-col space-y-4 w-full">

                {/* Card section */}
                <div className="flex space-x-4 overflow-x-auto">
                    <div className="w-full h-full flex-shrink-0 rounded-[10px] border border-[#ADADAD] bg-white flex flex-col p-2 gap-2">
                        <div className="font-semibold text-black">
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <h1 className="font-light pb-2">Schedule appointment with XYZ construction</h1>
                            </div>
                            <div className="flex justify-between space-x-[12px] mt-6">
                                <div className="flex px-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="">
                                        <path d="M12.5112 0.602539C6.0334 0.602539 0.733398 5.86158 0.733398 12.2893C0.733398 15.3278 1.91118 18.2495 4.14895 20.47L4.26673 20.5869C5.68006 21.8724 7.32895 22.9242 9.09562 23.5086C10.2734 23.8592 11.4512 23.976 12.629 23.976C13.8067 23.976 14.9845 23.7423 16.1623 23.5086C17.929 22.9242 19.5778 21.9893 20.9912 20.7037L21.109 20.5869C23.229 18.3664 24.5245 15.4447 24.5245 12.4062C24.289 5.86158 18.989 0.602539 12.5112 0.602539ZM12.5112 2.93989C17.6934 2.93989 21.9334 7.14712 21.9334 12.2893C21.9334 14.276 21.3445 16.1459 20.1667 17.6652C19.2245 16.1459 17.8112 15.0941 16.1623 14.3929C16.9867 13.458 17.5756 12.2893 17.5756 10.8869C17.5756 8.08206 15.3378 5.86158 12.5112 5.86158C9.68451 5.86158 7.44673 8.08206 7.44673 10.8869C7.44673 12.2893 8.03562 13.458 8.86007 14.3929C7.21118 15.0941 5.91562 16.2628 4.85562 17.6652C3.67784 16.1459 3.08895 14.1592 3.08895 12.2893C3.08895 7.14712 7.32895 2.93989 12.5112 2.93989Z" fill="black" />
                                    </svg>
                                    <p>Jane Doe</p>
                                </div>
                                <div className="flex h-6 px-6 justify-center items-center flex-shrink-0 rounded-[3px] bg-[#2B2C30]">
                                    <p className="text-white font-extralight">TDY, 11:00 am</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border-t border-black mt-2"></div>
                        <div className="font-semibold text-black">
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <h1 className="font-light pb-2">Schedule appointment with XYZ construction</h1>
                            </div>
                            <div className="flex justify-between space-x-[12px] mt-6">
                                <div className="flex px-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="">
                                        <path d="M12.5112 0.602539C6.0334 0.602539 0.733398 5.86158 0.733398 12.2893C0.733398 15.3278 1.91118 18.2495 4.14895 20.47L4.26673 20.5869C5.68006 21.8724 7.32895 22.9242 9.09562 23.5086C10.2734 23.8592 11.4512 23.976 12.629 23.976C13.8067 23.976 14.9845 23.7423 16.1623 23.5086C17.929 22.9242 19.5778 21.9893 20.9912 20.7037L21.109 20.5869C23.229 18.3664 24.5245 15.4447 24.5245 12.4062C24.289 5.86158 18.989 0.602539 12.5112 0.602539ZM12.5112 2.93989C17.6934 2.93989 21.9334 7.14712 21.9334 12.2893C21.9334 14.276 21.3445 16.1459 20.1667 17.6652C19.2245 16.1459 17.8112 15.0941 16.1623 14.3929C16.9867 13.458 17.5756 12.2893 17.5756 10.8869C17.5756 8.08206 15.3378 5.86158 12.5112 5.86158C9.68451 5.86158 7.44673 8.08206 7.44673 10.8869C7.44673 12.2893 8.03562 13.458 8.86007 14.3929C7.21118 15.0941 5.91562 16.2628 4.85562 17.6652C3.67784 16.1459 3.08895 14.1592 3.08895 12.2893C3.08895 7.14712 7.32895 2.93989 12.5112 2.93989Z" fill="black" />
                                    </svg>
                                    <p>Jane Doe</p>
                                </div>
                                <div className="flex h-6 px-6 justify-center items-center flex-shrink-0 rounded-[3px] bg-[#2B2C30]">
                                    <p className="text-white font-extralight">TDY, 11:00 am</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border-t border-black mt-2"></div>
                        <div className="font-semibold text-black">
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <h1 className="font-light pb-2">Schedule appointment with XYZ construction</h1>
                            </div>
                            <div className="flex justify-between space-x-[12px] mt-6">
                                <div className="flex px-2 space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="">
                                        <path d="M12.5112 0.602539C6.0334 0.602539 0.733398 5.86158 0.733398 12.2893C0.733398 15.3278 1.91118 18.2495 4.14895 20.47L4.26673 20.5869C5.68006 21.8724 7.32895 22.9242 9.09562 23.5086C10.2734 23.8592 11.4512 23.976 12.629 23.976C13.8067 23.976 14.9845 23.7423 16.1623 23.5086C17.929 22.9242 19.5778 21.9893 20.9912 20.7037L21.109 20.5869C23.229 18.3664 24.5245 15.4447 24.5245 12.4062C24.289 5.86158 18.989 0.602539 12.5112 0.602539ZM12.5112 2.93989C17.6934 2.93989 21.9334 7.14712 21.9334 12.2893C21.9334 14.276 21.3445 16.1459 20.1667 17.6652C19.2245 16.1459 17.8112 15.0941 16.1623 14.3929C16.9867 13.458 17.5756 12.2893 17.5756 10.8869C17.5756 8.08206 15.3378 5.86158 12.5112 5.86158C9.68451 5.86158 7.44673 8.08206 7.44673 10.8869C7.44673 12.2893 8.03562 13.458 8.86007 14.3929C7.21118 15.0941 5.91562 16.2628 4.85562 17.6652C3.67784 16.1459 3.08895 14.1592 3.08895 12.2893C3.08895 7.14712 7.32895 2.93989 12.5112 2.93989Z" fill="black" />
                                    </svg>
                                    <p>Jane Doe</p>
                                </div>
                                <div className="flex h-6 px-6 justify-center items-center flex-shrink-0 rounded-[3px] bg-[#2B2C30]">
                                    <p className="text-white font-extralight">Overdue: Yesterday</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border-t border-black mt-2"></div>
                        
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ToDo;
