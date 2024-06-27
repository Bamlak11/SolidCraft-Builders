import React from "react";

const Appointments: React.FC = () => {
    return (
        <div className="flex flex-col w-[448px] h-[408px] pt-6 pb-2 p-2 items-start gap-6 flex-shrink-0 rounded-[10px] bg-[#E8E9E0] shadow-md">
            <h1 className="text-xl text-black font-bold">Appointments</h1>
            <div className="flex flex-col space-y-4 w-full">
                <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
                    <div className="flex flex-col items-center justify-center p-2 bg-black rounded-md">
                        <span className="text-sm font-light">Mon</span>
                        <span className="text-xl font-bold">22</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 text-black rounded-md">
                        <span className="text-sm font-light">Tues</span>
                        <span className="text-xl font-bold">23</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 text-black rounded-md">
                        <span className="text-sm font-light">Wed</span>
                        <span className="text-xl font-bold">24</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 text-black rounded-md">
                        <span className="text-sm font-light">Thurs</span>
                        <span className="text-xl font-bold">25</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 text-black rounded-md">
                        <span className="text-sm font-light">Fri</span>
                        <span className="text-xl font-bold">26</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 text-black rounded-md">
                        <span className="text-sm font-light">Sat</span>
                        <span className="text-xl font-bold">27</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 text-black rounded-md">
                        <span className="text-sm font-light">Sun</span>
                        <span className="text-xl font-bold">28</span>
                    </div>
                </div>

                {/* Card section */}
                <div className="flex space-x-4 overflow-x-auto">
                    <div className="w-48 h-50 flex-shrink-0 rounded-xl border border-[#ADADAD] bg-white flex p-2 gap-2">
                        <div className="font-semibold text-black">
                            <h1 className="text-xl pb-2">11:30 <br></br> a.m.</h1>
                            <p>Contractor-Client Initial Meetup</p>
                            <div className="flex w-20 h-5 px-2 justify-center items-center gap-2 flex-shrink-0 rounded-[3px] bg-[#2B2C30]">
                                <p className="text-white font-extralight">Project 1</p>
                            </div>

                            <div className="flex space-x-[12px] mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className=" ">
                                    <path d="M12.5112 0.602539C6.0334 0.602539 0.733398 5.86158 0.733398 12.2893C0.733398 15.3278 1.91118 18.2495 4.14895 20.47L4.26673 20.5869C5.68006 21.8724 7.32895 22.9242 9.09562 23.5086C10.2734 23.8592 11.4512 23.976 12.629 23.976C13.8067 23.976 14.9845 23.7423 16.1623 23.5086C17.929 22.9242 19.5778 21.9893 20.9912 20.7037L21.109 20.5869C23.229 18.3664 24.5245 15.4447 24.5245 12.4062C24.289 5.86158 18.989 0.602539 12.5112 0.602539ZM12.5112 2.93989C17.6934 2.93989 21.9334 7.14712 21.9334 12.2893C21.9334 14.276 21.3445 16.1459 20.1667 17.6652C19.2245 16.1459 17.8112 15.0941 16.1623 14.3929C16.9867 13.458 17.5756 12.2893 17.5756 10.8869C17.5756 8.08206 15.3378 5.86158 12.5112 5.86158C9.68451 5.86158 7.44673 8.08206 7.44673 10.8869C7.44673 12.2893 8.03562 13.458 8.86007 14.3929C7.21118 15.0941 5.91562 16.2628 4.85562 17.6652C3.67784 16.1459 3.08895 14.1592 3.08895 12.2893C3.08895 7.14712 7.32895 2.93989 12.5112 2.93989Z" fill="black" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M12.5112 0.602539C6.0334 0.602539 0.733398 5.86158 0.733398 12.2893C0.733398 15.3278 1.91118 18.2495 4.14895 20.47L4.26673 20.5869C5.68006 21.8724 7.32895 22.9242 9.09562 23.5086C10.2734 23.8592 11.4512 23.976 12.629 23.976C13.8067 23.976 14.9845 23.7423 16.1623 23.5086C17.929 22.9242 19.5778 21.9893 20.9912 20.7037L21.109 20.5869C23.229 18.3664 24.5245 15.4447 24.5245 12.4062C24.289 5.86158 18.989 0.602539 12.5112 0.602539ZM12.5112 2.93989C17.6934 2.93989 21.9334 7.14712 21.9334 12.2893C21.9334 14.276 21.3445 16.1459 20.1667 17.6652C19.2245 16.1459 17.8112 15.0941 16.1623 14.3929C16.9867 13.458 17.5756 12.2893 17.5756 10.8869C17.5756 8.08206 15.3378 5.86158 12.5112 5.86158C9.68451 5.86158 7.44673 8.08206 7.44673 10.8869C7.44673 12.2893 8.03562 13.458 8.86007 14.3929C7.21118 15.0941 5.91562 16.2628 4.85562 17.6652C3.67784 16.1459 3.08895 14.1592 3.08895 12.2893C3.08895 7.14712 7.32895 2.93989 12.5112 2.93989Z" fill="black" />
                                </svg>
                                <button className="flex bg-[#C1934F] px-6 border border-black py-1.5 rounded-md text-sm font-medium">
                                    <p>Attend</p>
                                </button>
                            </div>
                        </div>
                        </div>

                        <div className="w-48 h-50 flex-shrink-0 rounded-xl border border-[#ADADAD] bg-white flex p-2 gap-2">

                            <div className="font-semibold text-black">
                                <h1 className="text-xl pb-2">11:30 <br></br> a.m.</h1>
                                <p>Contractor-Client Initial Meetup</p>
                                <div className="flex w-20 h-5 px-2 justify-center items-center gap-2 flex-shrink-0 rounded-[3px] bg-[#2B2C30]">
                                    <p className="text-white font-extralight">Project 1</p>
                                </div>

                                <div className="flex space-x-[12px] mt-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="">
                                        <path d="M12.5112 0.602539C6.0334 0.602539 0.733398 5.86158 0.733398 12.2893C0.733398 15.3278 1.91118 18.2495 4.14895 20.47L4.26673 20.5869C5.68006 21.8724 7.32895 22.9242 9.09562 23.5086C10.2734 23.8592 11.4512 23.976 12.629 23.976C13.8067 23.976 14.9845 23.7423 16.1623 23.5086C17.929 22.9242 19.5778 21.9893 20.9912 20.7037L21.109 20.5869C23.229 18.3664 24.5245 15.4447 24.5245 12.4062C24.289 5.86158 18.989 0.602539 12.5112 0.602539ZM12.5112 2.93989C17.6934 2.93989 21.9334 7.14712 21.9334 12.2893C21.9334 14.276 21.3445 16.1459 20.1667 17.6652C19.2245 16.1459 17.8112 15.0941 16.1623 14.3929C16.9867 13.458 17.5756 12.2893 17.5756 10.8869C17.5756 8.08206 15.3378 5.86158 12.5112 5.86158C9.68451 5.86158 7.44673 8.08206 7.44673 10.8869C7.44673 12.2893 8.03562 13.458 8.86007 14.3929C7.21118 15.0941 5.91562 16.2628 4.85562 17.6652C3.67784 16.1459 3.08895 14.1592 3.08895 12.2893C3.08895 7.14712 7.32895 2.93989 12.5112 2.93989Z" fill="black" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M12.5112 0.602539C6.0334 0.602539 0.733398 5.86158 0.733398 12.2893C0.733398 15.3278 1.91118 18.2495 4.14895 20.47L4.26673 20.5869C5.68006 21.8724 7.32895 22.9242 9.09562 23.5086C10.2734 23.8592 11.4512 23.976 12.629 23.976C13.8067 23.976 14.9845 23.7423 16.1623 23.5086C17.929 22.9242 19.5778 21.9893 20.9912 20.7037L21.109 20.5869C23.229 18.3664 24.5245 15.4447 24.5245 12.4062C24.289 5.86158 18.989 0.602539 12.5112 0.602539ZM12.5112 2.93989C17.6934 2.93989 21.9334 7.14712 21.9334 12.2893C21.9334 14.276 21.3445 16.1459 20.1667 17.6652C19.2245 16.1459 17.8112 15.0941 16.1623 14.3929C16.9867 13.458 17.5756 12.2893 17.5756 10.8869C17.5756 8.08206 15.3378 5.86158 12.5112 5.86158C9.68451 5.86158 7.44673 8.08206 7.44673 10.8869C7.44673 12.2893 8.03562 13.458 8.86007 14.3929C7.21118 15.0941 5.91562 16.2628 4.85562 17.6652C3.67784 16.1459 3.08895 14.1592 3.08895 12.2893C3.08895 7.14712 7.32895 2.93989 12.5112 2.93989Z" fill="black" />
                                    </svg>
                                    <button className="flex bg-[#C1934F] px-6 border border-black py-1.5 rounded-md text-sm font-medium">
                                        <p>Attend</p>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="w-48 h-50 flex-shrink-0 rounded-xl border border-[#ADADAD] bg-white flex p-2 gap-2">

                            <div className="flex flex-col justify-between font-semibold text-black">
                                <h1 className="text-xl pb-2">See more</h1>
                                <p className="font-light">View Schedule</p>

                                <div className="flex justify-center space-x-[12px] mt-6">
                                    <button className="flex bg-[#C1934F] px-6 border border-black py-1.5 rounded-md text-sm font-medium">
                                        <p>View</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default Appointments;
