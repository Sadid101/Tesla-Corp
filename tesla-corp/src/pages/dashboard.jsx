import React, { useEffect, useState } from "react";
import data from "../data/dummy.json"

import "../styles/dashboard.css";

function Dashboard() {

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            window.location.href = "/"
        }
    }, [])

    const [numberOfUsersToShow, setNumberOfUsersToShow] = useState(6);

    const getRecentApplicants = () => {

        // Get todays date
        const today = new Date();

        // Get the date of last week
        const lastWeek = new Date(today);
        lastWeek.setDate(lastWeek.getDate() - 7);

        // Filter applicants who applied between last week and today
        const filteredApplicants = data.applicants.filter(applicant => {
            const applyDate = new Date(applicant.apply_date);
            return applyDate >= lastWeek && applyDate <= today;
        });

        // Count the number of filtered applicants
        return (filteredApplicants.length)
    }



    return (
        <div className="dashboard-parent">
            <div className="dashboard-container">
                <div className="header text-extraheavy">
                    <div>Tesla Corp</div>
                    <img src="./images/HamburgerMenu.svg" alt="Menu" />
                </div>
                <div className="sub-header">
                    <div className="text-extraheavy secondary-text">11th May 2024</div>
                    <div className="text-light secondary-text">Friday</div>
                </div>
                <div className="body">
                    <div className="jobs-section">
                        <div className="job-header">Total Live Jobs : {data.jobs.length}</div>
                        <div className="border-divider rounded-7">
                            {data.jobs.map(item => (
                                <div className="jobs">
                                    <div key={item.id}>{item.position}</div>
                                    <img src="./images/Edit.svg" alt="Edit" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="summary rounded-7">
                        <div className="text-heavy">Total Applicants</div>
                        <div className="summary-count text-extraheavy">{data.applicants.length}</div>
                        <div className="summary-details text-heavy">
                            <span>+ </span>
                            <span>{getRecentApplicants()}</span>
                            <span> last week</span>
                        </div>
                    </div>
                    <div className="applicants rounded-7">
                        <div className="text-heavy primary-text">Matched Applicants</div>
                        <div className="applicant-list border-divider">
                            {data.applicants.slice(0, numberOfUsersToShow).map(applicant => (
                                <div className="flex applicant-details text-light secondary-text">
                                    <img src={applicant.image} alt="Menu" width={24} height={24} />
                                    <div key={applicant.id}>{applicant.name}</div>
                                    <div className="resume">View Resume</div>
                                </div>
                            ))}
                        </div>
                        <div className={`see-more text-light ${(numberOfUsersToShow >= data.applicants.length) && 'disabled'}`} onClick={() => setNumberOfUsersToShow(Math.min(numberOfUsersToShow + 6, data.applicants.length))}>See More</div>
                        <div className={`see-less text-light ${(numberOfUsersToShow === 6) && 'disabled'}`} onClick={() => setNumberOfUsersToShow(Math.max(numberOfUsersToShow - 6, 6))}>See Less</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;