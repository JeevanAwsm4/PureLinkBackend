import React, { useState } from 'react';
import { Helmet } from "react-helmet";

export default function Dashboard() {
    const [requests, setRequests] = useState([
        {
            name: "Adil",
            blood: "B+",
            hospital: "Holy Cross Kollam",
        },
        {
            name: "Azvan",
            blood: "B+",
            hospital: "Mims Calicut",
        },
        {
            name: "Jeevan",
            blood: "B+",
            hospital: "Dhanalakshmi Kannur",
        },
    ])
  return (
    <div className='container'>
        <Helmet>
            <title>PureLink | Dashboard</title>
        </Helmet>

        <h1 className='top'>Dashboard</h1>
        <div className="counts">
                <ul>
                    <li>
                        <h1>200+</h1>
                        <h4>Patients<br />Received</h4>
                    </li>
                    <li>
                        <h1>500+</h1>
                        <h4>Donors</h4>
                    </li>
                    <li>
                        <h1>300+</h1>
                        <h4>Panchayats<br />Covered</h4>
                    </li>
                </ul>
        </div>
        <div className="noti">
            <h1 className="top">
                <img src={require("./../assets/images/bell.png")} alt="bell" />
                Recent Notifications
            </h1>
            {/* <div className="content">
                <p>Adil requested Ab+ blood at <span>Holy Cross Kollam</span></p>
                <ul>
                    <li><button>Ready!</button></li>
                    <li><span className='time'>3m Ago</span></li>
                </ul>
            </div> */}
            {requests.map((req) => (
                <div className="content">
                    <p>{req.name} requested {req.blood} blood at <span>{req.hospital}</span></p>
                    <ul>
                        <li><button>Ready!</button></li>
                        <li><span className='time'>3m Ago</span></li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}
