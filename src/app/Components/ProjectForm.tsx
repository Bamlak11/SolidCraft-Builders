import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/Logo.png'

const ProjectForm: React.FC = () => {
    const [step, setStep] = useState(1);
    const [projectInfo, setProjectInfo] = useState({
        title: '',
        description: '',
        budget: '',
        startDate: '',
        endDate: ''
    });
    const [detailsAndTeam, setDetailsAndTeam] = useState({
        projectTypes: [],
        priority: 'low',
        attachments: null,
        projectManager: '',
        teamMembers: ''
    });

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handleBackStep = () => {
        setStep(step - 1);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (step === 1) {
            setProjectInfo({ ...projectInfo, [name]: value });
        } else if (step === 2) {
            setDetailsAndTeam({ ...detailsAndTeam, [name]: value });
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (checked) {
            setDetailsAndTeam({ ...detailsAndTeam, projectTypes: [...detailsAndTeam.projectTypes, name] });
        } else {
            setDetailsAndTeam({ ...detailsAndTeam, projectTypes: detailsAndTeam.projectTypes.filter(type => type !== name) });
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetailsAndTeam({ ...detailsAndTeam, attachments: e.target.files[0] });
    };

    return (
        <div className="flex w-full h-full rounded-[10px] bg-[#F7F6F6] p-8">
            {/* Left Side */}
            <div className="w-1/3 pr-8 ">
            <Image src={logo} alt="Company Logo" className="w-32 h-32 mb-6" />
                <h1 className="text-3xl font-bold mb-6">Create New Project</h1>
                <ul className="list-none">
                    <li className={`mb-2 ${step === 1 ? 'font-bold' : ''}`}>1. Project Information</li>
                    <li className={`mb-2 ${step === 2 ? 'font-bold' : ''}`}>2. Details & Team</li>
                    <li className={`mb-2 ${step === 3 ? 'font-bold' : ''}`}>3. Summary of the Project</li>
                </ul>
            </div>

            {/* Right Side */}
            <div className="w-3/4">
                {step === 1 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Project Information</h2>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Project Title</label>
                            <input
                                type="text"
                                name="title"
                                value={projectInfo.title}
                                onChange={handleInputChange}
                                className="p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Description</label>
                            <textarea
                                name="description"
                                value={projectInfo.description}
                                onChange={handleInputChange}
                                className="p-2 w-full border rounded-md"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Budget</label>
                            <input
                                type="number"
                                name="budget"
                                value={projectInfo.budget}
                                onChange={handleInputChange}
                                className="p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Project Duration</label>
                            <div className="flex space-x-4">
                                <input
                                    type="date"
                                    name="startDate"
                                    value={projectInfo.startDate}
                                    onChange={handleInputChange}
                                    className="p-2 w-full border rounded-md"
                                    required
                                />
                                <input
                                    type="date"
                                    name="endDate"
                                    value={projectInfo.endDate}
                                    onChange={handleInputChange}
                                    className="p-2 w-full border rounded-md"
                                    required
                                />
                            </div>
                        </div>

                        <div className='flex justify-end pt-2'>
                        <button onClick={handleNextStep} className="bg-[#C1934F] px-4 py-2 rounded-md text-black font-medium">Next Step: Details & Team</button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Details & Team</h2>
                        <div className="flex space-x-4">
                            <div className="w-1/2 pr-4">
                                <h3 className="text-lg font-semibold mb-2">Select Project Types</h3>
                                <div className="flex flex-col space-y-2">
                                    {['Construction', 'Home', 'Landscaping', 'Other'].map((type) => (
                                        <label className="flex items-center" key={type}>
                                            <input
                                                type="checkbox"
                                                name={type}
                                                checked={detailsAndTeam.projectTypes.includes(type)}
                                                onChange={handleCheckboxChange}
                                                className="mr-2"
                                            />
                                            {type}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="w-1/2">
                                <h3 className="text-lg font-semibold mb-2">Priority</h3>
                                <select
                                    name="priority"
                                    value={detailsAndTeam.priority}
                                    onChange={handleInputChange}
                                    className="p-2 w-full border rounded-md mb-4"
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Attachments</h3>
                                <input
                                    type="file"
                                    name="attachments"
                                    onChange={handleFileChange}
                                    className="p-2 w-full border rounded-md mb-4"
                                    accept=".pdf"
                                />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mt-8 mb-6">Team Information</h2>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Project Manager</label>
                            <input
                                type="text"
                                name="projectManager"
                                value={detailsAndTeam.projectManager}
                                onChange={handleInputChange}
                                className="p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Contractors/Team Members</label>
                            <input
                                type="text"
                                name="teamMembers"
                                value={detailsAndTeam.teamMembers}
                                onChange={handleInputChange}
                                className="p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className='flex justify-between pt-2'>
                        <button onClick={handleBackStep} className="bg-[#C1934F] px-4 py-2 rounded-md text-black font-medium">Back</button>
                        <button onClick={handleNextStep} className="bg-[#C1934F] px-4 py-2 rounded-md text-black font-medium">Next Step: Summary of the Project</button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Summary</h2>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Project Information</h3>
                            <p><strong>Title:</strong> {projectInfo.title}</p>
                            <p><strong>Description:</strong> {projectInfo.description}</p>
                            <p><strong>Budget:</strong> {projectInfo.budget}</p>
                            <p><strong>Duration:</strong> {projectInfo.startDate} to {projectInfo.endDate}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-2">Details & Team</h3>
                            <p><strong>Project Types:</strong> {detailsAndTeam.projectTypes.join(', ')}</p>
                            <p><strong>Priority:</strong> {detailsAndTeam.priority}</p>
                            <p><strong>Attachments:</strong> {detailsAndTeam.attachments|| 'No attachment'}</p>
                            <p><strong>Project Manager:</strong> {detailsAndTeam.projectManager}</p>
                            <p><strong>Team Members:</strong> {detailsAndTeam.teamMembers}</p>
                        </div>

                        <div className='flex justify-between pt-2'>
                        <button onClick={handleBackStep} className="bg-[#C1934F] px-4 py-2 rounded-md text-black font-medium">Back</button>
                        <button className="bg-[#C1934F] px-4 py-2 rounded-md text-black font-medium">Create This Project</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectForm;