import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { BsFill1SquareFill,BsFill2SquareFill,BsFill3SquareFill,BsFill4SquareFill,BsFill5SquareFill } from "react-icons/bs"

const Working = () => {
  return (
    <div className='flex flex-col pt-28 md:pt-32'>

        <div>
            <h1 className=" flex sm:px-10 text-7xl font-anton font-bold py-5 px-0.5 text-[#121212]">Methodology</h1>
        </div>

        <div className="sm:py-2 sm:px-10 px-0.5">
                <h1 className="text-lg font-semibold sm:text-3xl underline">Project Management - 360 degree view</h1>
        </div>

        <div className='flex w-full justify-center gap-2 md:gap-5 py-20'>

            <div className="flex flex-col justify-start items-center px-0.5 gap-3 shadow md:px-5 shadow-slate-700 bg-[#fbfcf8] rounded-lg">
                <h1 className="text-lg font-semibold md:text-4xl text-center mt-4"><p>System</p><p>Solution</p></h1>
                <ul className='flex flex-col gap-1 md:text-lg text-center text-[#fbfcf8] py-5'>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Linear Transfer Assembly Line</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Servo controlled special purpose machines</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Lean assembly lines</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Motor-Testing machines</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Armature testing machines</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Leak testing machines</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Servo controlled presses</li>
                </ul>
            </div>
            <div className="flex flex-col justify-start items-center px-0.5 gap-3 shadow md:px-5 shadow-slate-700 bg-[#fbfcf8] rounded-lg">
                <h1 className="text-lg font-semibold md:text-4xl text-center mt-4"><p>Process</p><p>Employed</p></h1>
                <ul className='flex flex-col gap-1 md:text-lg text-center text-[#fbfcf8] py-5'>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Assembly</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Screw / Nut tightening</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Press work</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Winding</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Magnetization</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Glue dispensing and curing</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Convey raised curing ovens</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Trickle varnish, gel application & curing</li>
                </ul>
            </div>
            <div className="flex flex-col justify-start items-center px-0.5 gap-3 shadow md:px-5 shadow-slate-700 bg-[#fbfcf8] rounded-lg">
                <h1 className="text-lg font-semibold md:text-4xl text-center mt-4"><p>Control</p><p>Used</p></h1>
                <ul className='flex flex-col gap-1 md:text-lg text-center text-[#fbfcf8] py-5'>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Servo Control</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>PC based (NI and Labview)</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>PLC control ( Mitsuibishi, Unitronics, Siemens etc)</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Remote Diagnosis</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Force, Load, Pressure, Flow measurements</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Electrical Parameters and Measurements</li>
                    <li className='bg-[#3b3b3b] px-0.25 md:px-2 rounded'>Labeling and Barcode Printing</li>
                </ul>
            </div>

        </div>

        <div className="flex flex-col">
            <div className="sm:py-2 sm:px-10 px-0.5">
                <h1 className="text-lg font-semibold sm:text-3xl underline">We Work by Project Management Standard</h1>
                <p>(PMI Standard)</p>
            </div>
        </div>

        <div className="flex justify-center items-center py-10">
            <div className=" flex flex-col justify-start items-center gap-1 p-1 bg-[#e7e9e7] rounded-md shadow-md md:p-10">
                <BsFill1SquareFill></BsFill1SquareFill>
                <h1 className="md:text-xl font-semibold">Initiate</h1>
            </div>
            <AiOutlineArrowRight size={15}></AiOutlineArrowRight>
            <div className="flex flex-col justify-start items-center gap-1 p-1 bg-[#e7e9e7] rounded-md shadow-md md:p-10">
                <BsFill2SquareFill></BsFill2SquareFill>
                <h1 className="md:text-xl font-semibold w-100">Plan</h1>
            </div>
            <AiOutlineArrowRight size={15}></AiOutlineArrowRight>
            <div className="flex flex-col justify-start items-center gap-1 p-1 bg-[#e7e9e7] rounded-md shadow-md md:p-10">
                <BsFill3SquareFill></BsFill3SquareFill>
                <h1 className="md:text-xl font-semibold">Execute</h1>
            </div>
            <AiOutlineArrowRight size={15}></AiOutlineArrowRight>
            <div className="flex flex-col justify-start items-center gap-1 p-1 bg-[#e7e9e7] rounded-md shadow-md md:p-10">
                <BsFill4SquareFill></BsFill4SquareFill>
                <h1 className="md:text-xl font-semibold">Monitor</h1>
            </div>
            <AiOutlineArrowRight size={15}></AiOutlineArrowRight>
            <div className="flex flex-col justify-start items-center gap-1 p-1 bg-[#e7e9e7] rounded-md shadow-md md:p-10">
                <BsFill5SquareFill></BsFill5SquareFill>
                <h1 className="md:text-xl font-semibold">Close</h1>
            </div>
        </div>
        
        <h1 className="text-lg font-semibold sm:text-3xl sm:py-1 sm:px-10 px-0.5 py-5">Detailed Approach to Project Management</h1>
        
        <div className='flex flex-col w-full justify-center'>

            <div className=' w-full p-2 md:p-5'>
                <div className="flex flex-col justify-evenly items-start md:items-center bg-[#e7e9e7] rounded-md shadow-md md:grid md:grid-col-2 gap-2 py-5">
                    <h1 className="ml-2 flex justify-center items-center text-3xl text-white bg-gray-500 w-[23vh] h-[50px] p-1 rounded col-start-1 col-end-3 ">1.0 Initiate</h1>

                    <ol className='text-sm md:text-lg flex flex-col gap-2 md:w-[17vw] p-10' style={{ listStyleType: "dise" }}>
                        <li>Gather Requirements</li>                    
                        <li>Process Analysis</li>
                        <li>Process Improvement Proposal</li>
                        <li>Finilize Initial Scope</li>
                    </ol>
                    <table className="max-w-[500px] border border-black">
                        <thead>
                            <tr>
                                <th>Input</th>
                                <th>Activities</th>
                                <th>Output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black">Inquiry</td>
                                <td class="border px-1 md:px-4 py-2 border-black">Meeting and Discussion</td>
                                <td class="border px-1 md:px-4 py-2 border-black">Requirements Documentation</td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black">Requirements Documents</td>
                                <td class="border px-1 md:px-4 py-2 border-black"><p>Detailed Requirement Study</p><br></br><p>Existing Customer Process Analysis (If available)</p></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Process Improvement Plans/Proposals</td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black">Process Improvement Proposals</td>
                                <td class="border px-1 md:px-4 py-2 border-black">Clarify Scope, and  Value-Analysis / Engineering</td>
                                <td class="border px-1 md:px-4 py-2 border-black">Updated Requirement Scope</td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black">Improvised Requirement Documents</td>
                                <td class="border px-1 md:px-4 py-2 border-black">Prepare Supply of Work (SOW) statement</td>
                                <td class="border px-1 md:px-4 py-2 border-black">Finalize Initial SOW</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className=' w-full p-2 md:p-5'>
                <div className="flex flex-col justify-evenly items-start md:items-center bg-[#e7e9e7] rounded-md shadow-md md:grid md:grid-col-2 gap-2 py-5">
                    <h1 className="ml-2 flex justify-center items-center text-3xl text-white bg-gray-500 w-[23vh] h-[50px] p-1 rounded col-start-1 col-end-3 ">2.0 Plans</h1>

                    <ol className='text-sm md:text-lg flex flex-col gap-2 md:w-[17vw] p-10' style={{ listStyleType: "dise" }}>
                        <li>Plan Scope</li>                    
                        <li>Plan Cost</li>
                        <li>Plan Risks</li>
                        <li>Plan Time</li>
                        <li>Plan Quality</li>
                        <li>Other Plans</li>
                    </ol>
                    <table className="max-w-[500px] border border-black">
                        <thead>
                            <tr>
                                <th>Input</th>
                                <th>Activities</th>
                                <th>Output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black">Requirements Documents</td>
                                <td class="border px-1 md:px-4 py-2 border-black"><p>Detailed Technical Design & Planning</p><br></br><p>Work Breakdown Structure (WBS)</p></td>
                                <td class="border px-1 md:px-4 py-2 border-black"><p>Project Management Plans</p><br></br><p>(Including New Scope for improvements)</p></td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Cost Estimation and budgeting</td>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Risks analysis and planning</td>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Time Planning</td>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Quality Process Planning</td>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Communications Plan</td>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Others</td>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    

            </div>

            <div className=' w-full p-2 md:p-5'>
                <div className="flex flex-col justify-evenly items-start md:items-center bg-[#e7e9e7] rounded-md shadow-md md:grid md:grid-col-2 gap-2 py-5">
                    <h1 className="ml-2 flex justify-center items-center text-3xl text-white bg-gray-500 w-[23vh] h-[50px] p-1 rounded col-start-1 col-end-3 ">3.0 Execute</h1>

                    <ol className='text-sm md:text-lg flex flex-col gap-2 md:w-[17vw] p-10' style={{ listStyleType: "dise" }}>
                        <li>Build System</li>                    
                        <li>Audit Test Process</li>
                        <li>Implement Changes</li>
                    </ol>
                    <table className="max-w-[500px] border border-black">
                        <thead>
                            <tr>
                                <th>Input</th>
                                <th>Activities</th>
                                <th>Output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"><p>Initiate outputs</p><br></br><p>Plan outputs</p></td>
                                <td class="border px-4 py-2 border-black">
                                    <ul className='pl-1' style={{ listStyleType: "dise" }}>
                                        <li>Build Equipment as per plans & drawings</li>
                                        <li>Unit Testing</li>
                                        <li>Module Testing</li>
                                    </ul>
                                </td>
                                <td class="border px-1 md:px-4 py-2 border-black">Equipment to be delivered</td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Perform system process audit</td>
                                <td class="border px-1 md:px-4 py-2 border-black">Ensures that the system are built as per project process or quality assurance plans</td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Implement changes that occur from recommendations, defect repairs, scope improvements</td>
                                <td class="border px-1 md:px-4 py-2 border-black">Ensures quality deliverable system</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className=' w-full p-2 md:p-5'>
                <div className="flex flex-col justify-evenly items-start md:items-center bg-[#e7e9e7] rounded-md shadow-md md:grid md:grid-col-2 gap-2 py-5">
                    <h1 className="ml-2 flex justify-center items-center text-3xl text-white bg-gray-500 w-[23vh] h-[50px] p-1 rounded col-start-1 col-end-3 ">4.0 Monitor</h1>

                    <ol className='text-sm md:text-lg flex flex-col gap-2 md:w-[17vw] p-10' style={{ listStyleType: "dise" }}>
                        <li>Internal Testing</li>                    
                        <li>Engage Customer</li>
                        <li>Recommend Changes</li>
                    </ol>
                    <table className="max-w-[500px] border border-black">
                        <thead>
                            <tr>
                                <th>Input</th>
                                <th>Activities</th>
                                <th>Output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"><p>Initiate outputs</p><br></br><p>Plan outputs</p><br></br><p>Execution outputs</p></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Internal Testing (Parts Testing, Module Testing, System Testing, Integration Testing, Calibration  of measured parameters as per Standards)</td>
                                <td class="border px-1 md:px-4 py-2 border-black">Change requirements</td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-1 md:px-4 py-2 border-black"><p>Visualization of New system</p><br></br><p>Inspection by Client at company location</p></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Seek Improvements</td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-4 py-2 border-black">
                                    <p>Recommendations</p>
                                    <ul className='pl-1' style={{ listStyleType: "dise" }}>
                                        <li>Corrective measures</li>
                                        <li>Preventive measures</li>
                                        <li>New scope improvement</li>
                                    </ul>
                                </td>
                                <td class="border px-4 py-2 border-black">
                                    <p>To Ensure </p>
                                    <ul className='pl-1' style={{ listStyleType: "dise" }}>
                                        <li>Scope of supply is as per expectations</li>
                                        <li>Quality certified system to be delivered</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>

            <div className=' w-full p-2 md:p-5'>
                <div className="flex flex-col justify-evenly items-start md:items-center bg-[#e7e9e7] rounded-md shadow-md md:grid md:grid-col-2 gap-2 py-5">
                <h1 className="ml-2 flex justify-center items-center text-3xl text-white bg-gray-500 w-[23vh] h-[50px] p-1 rounded col-start-1 col-end-3 "> 5.0 Close</h1>

                    <ol className='text-sm md:text-lg flex flex-col gap-2 md:w-[17vw] p-10' style={{ listStyleType: "dise" }}>
                        <li>Installation</li>                    
                        <li>Acceptance Testing</li>
                        <li>Training</li>
                        <li>Documentation</li>
                        <li>Sign-Offs</li>
                        <li>Seek Improvements</li>
                    </ol>
                    <table className="max-w-[500px] border border-black">
                        <thead>
                            <tr>
                                <th>Input</th>
                                <th>Activities</th>
                                <th>Output</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"><p>Initiate outputs</p><br></br><p>Plan outputs</p><br></br><p>Execution outputs</p><br></br><p>Monitor outputs</p></td>
                                <td class="border px-4 py-2 border-black">
                                    <ul className='pl-1' style={{ listStyleType: "dise" }}>
                                        <li>Installation of system at customer site</li>
                                        <li>Perform acceptance testing as per customer specification as per agreed SOW</li>
                                    </ul>
                                </td>
                                <td class="border px-4 py-2 border-black">
                                    <ul className='pl-1' style={{ listStyleType: "dise" }}>
                                        <li>Scope of improvements</li>
                                        <li>Expected delivery of new system</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Training on new system to Engineering, Methods, Manufacturing, Maintenance staffs</td>
                                <td class="border px-1 md:px-4 py-2 border-black">Realize value added benefits of the new system</td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-1 md:px-4 py-2 border-black">Documentation works</td>
                                <td class="border px-1 md:px-4 py-2 border-black">Operation manuals, administrative closure document submission etc</td>
                            </tr>
                            <tr>
                                <td class="border px-1 md:px-4 py-2 border-black"></td>
                                <td class="border px-1 md:px-4 py-2 border-black"><p>Sign-offs</p><br></br><p>Seek Improvements</p></td>
                                <td class="border px-4 py-2 border-black">
                                    <ul className='pl-1' style={{ listStyleType: "dise" }}>
                                        <li>Successful Project closure</li>
                                        <li>Support on scope of improvements</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                

            </div>

        </div>

    </div>
  )
}

export default Working