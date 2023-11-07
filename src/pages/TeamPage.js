import React from 'react'
import LeftPanel from '../components/LeftPanel'
import AbhinavIMG from "../assets/Abhinav.jpeg"
import VimalIMG from "../assets/Vimal Mishra.jpeg"
import HirenIMG from "../assets/Hiren.jpeg"
import AmanIMG from "../assets/Aman.jpeg"
import PreetamIMG from "../assets/Preetam.jpeg"
import YuvrajIMG from "../assets/Yuvraj.jpeg"

const TeamMembers = [
    {
        Name: "Prof. Vimal Mishra",
        Designation: "Professor, Civil Engineering, IIT Gandhinagar",
        Image: VimalIMG,
        Role: "Faculty Advisor"
    },
    {
        Name: "Hiren Solanki",
        Designation: "PhD, Civil Engineering, IIT Gandhinagar",
        Image: HirenIMG,
        Role: ""
    },
    {
        Name: "Abhinav Kumar",
        Designation: "B.Tech., IIT Gandhinagar",
        Image: AbhinavIMG,
        Role: ""
    },
    {
        Name: "Aman Chaudhary",
        Designation: "B.Tech., IIT Gandhinagar",
        Image: AmanIMG,
        Role: ""
    },
    {
        Name: "Preetam Chimpa",
        Designation: "B.Tech., IIT Gandhinagar",
        Image: PreetamIMG,
        Role: ""
    },
    {
        Name: "Yuvraj Gupta",
        Designation: "B.Tech., IIT Gandhinagar",
        Image: YuvrajIMG,
        Role: ""
    },
]


const TeamPage = () => {
    return (
        <div>
            <div className='main_dashboard'>
                <div className='left_panel'>
                    <LeftPanel />
                </div>
                <div className='right_panel'>
                    <div className='para_content'>
                        <h2>Our Team</h2>

                        <div className='team_member_container'>
                            <div className='row'>
                                {TeamMembers.map((member, index) => (
                                    <div className='col-md-4 col-sm-12 col-lg-4 col-xl-3'>
                                        <div className='team_item'>
                                            <img src={member.Image} />
                                            <p>{member.Name}</p>
                                            <p>{member.Designation}</p>
                                        </div>

                                    </div>
                                ))}
                            </div>






                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default TeamPage