import React, { useState } from 'react'
import './TeacherRegistration.css'
// import Validation from '../Validation'

const TeacherRegistraion = () => {
    const [teacherRegistraion, setTeacherRegistration] = useState({
        tFirstName: '',
        tLastName: '',
        tBirthday: '',
        tFatherName: '',
        tMotherName: '',
        tAadharNumber: '',
        tEmail: '',
        tPhone: '',
        tAltPhone: '',
        tPermanentAddress: '',
        tPermanentCity: '',
        tPermanentState: '',
        tPermanentPincode: '',
        tCorrespondenceAddress: '',
        tCorrespondenceCity: '',
        tCorrespondenceState: '',
        tCorrespondencePincode: '',
        tFile: '',
    })

    // const [error, setError] = useState({});

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setTeacherRegistration({ ...teacherRegistraion, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setError(Validation(values));

        const newRecord = { ...teacherRegistraion, id: new Date().getTime().toString() }
        console.log(newRecord)
        setTeacherRegistration(
            {
                tFirstName: '',
                tLastName: '',
                tEmail: '',
                tBirthday: '',
                tAadharNumber: '',
                tFatherName: '',
                tMotherName: '',
                tPhone: '',
                tAltPhone: '',
                tPermanentAddress: '',
                tPermanentCity: '',
                tPermanentState: '',
                tPermanentPincode: '',
                tCorrespondenceAddress: '',
                tCorrespondenceCity: '',
                tCorrespondenceState: '',
                tCorrespondencePincode: '',
                tFile: '',
            }
        )
    }

//validation
   // if(sFirstName && sLastName && sEmail && sPhone && sBirthDay && sReligion &&
  //      sFatherName && sFatherEmail && sFatherPhone && sFatherOccupation && sMotherName && sMotherEmail &&
    //    sMotherPhone && sMotherOccupation && sLocalGuardianName && sLocalGuardianEmail && sLocalGuardianPhone && 
   //     sLocalGuardianOccupation && sPermanentAddress && sPermanentCity && sPermanentState && sPermanentPincode &&
   //     sCorrespondenceAddress && sCorrespondenceCity && sCorrespondenceState && sCorrespondencePincode && sAadharNumber){
   //     axios.post("http://localhost:9002/StudentRegistration",studentRegistraion)
   //    .then( res => console.log(res))
      
   // } 

    return (
        <section className='teacher'>

            <div className='container'>
                <div className='title'> Registration</div>
                <div className="content">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="detail">Personal Details</div>
                            <hr />
                            <div className='input-box'>
                                <span htmlFor="tFirstName">First Name</span>
                                <input type="text"
                                    name='tFirstName'
                                    value={teacherRegistraion.tFirstName}
                                    onChange={handleInput}
                                    id='tFirstName'
                                    required
                                />
                                {/* {error.tFirstName && <p className='error'>{error.tFirstName}</p>} */}

                            </div>

                            <div className='input-box'>
                                <span htmlFor="tLastName">Last Name</span>
                                <input type="text"
                                    name='tLastName'
                                    value={teacherRegistraion.tLastName}
                                    onChange={handleInput}
                                    id='tLastName'
                                    required
                                />
                                {/* {/* {error.tLastName && <p className='error'>{error.tLastName}</p>} */}
                            </div>

                            <div className='input-box'>
                                <span htmlFor="tEmail">Email</span>
                                <input type="email"
                                    name='tEmail'
                                    value={teacherRegistraion.tEmail}
                                    onChange={handleInput}
                                    id='tEmail'
                                    required

                                />
                                {/* {/* {error.tEmail && <p className='error'>{error.tEmail}</p>} */}

                            </div>

                            <div className='input-box'>
                                <span htmlFor="tBirthday">Date of Birth</span>
                                <input type="date"
                                    name='tBirthday'
                                    value={teacherRegistraion.tBirthday}
                                    onChange={handleInput}
                                    id='tBirthday'
                                    required
                                />

                            </div>

                            <div className='input-box'>
                                <span htmlFor="tAadharNumber">Aadhar Numer</span>
                                <input type="number"
                                    name='tAadharNumber'
                                    value={teacherRegistraion.tAadharNumber}
                                    onChange={handleInput}
                                    id='tAadharNumber'
                                    required
                                    pattern="[0-9]{12}" title="Aadhar should be 12 digits"
                                />

                            </div>

                            <div className='input-box'>
                                <span htmlFor="tFatherName">Father's Name</span>
                                <input type="text"
                                    name='tFatherName'
                                    value={teacherRegistraion.tFatherName}
                                    onChange={handleInput}
                                    id='tFatherName'
                                    required
                                />

                            </div>

                            <div className='input-box'>
                                <span htmlFor="tMotherName">Mother's Name</span>
                                <input type="text"
                                    name='tMotherName'
                                    value={teacherRegistraion.tMotherName}
                                    onChange={handleInput}
                                    id='tMotherName'
                                    required

                                />

                            </div>

                            <div className='input-box'>
                                <span htmlFor="tPhone">Contact Number</span>
                                <input type="tel"
                                    name='tPhone'
                                    value={teacherRegistraion.tPhone}
                                    onChange={handleInput}
                                    id='tPhone'
                                    required
                                    pattern="[0-9]{10}" title="Number should be 10 digits"
                                />

                            </div>

                            <div className='input-box'>
                                <span htmlFor="tAltPhone">Alternate Contact Number</span>
                                <input type="tel"
                                    name='tAltPhone'
                                    value={teacherRegistraion.tAltPhone}
                                    onChange={handleInput}
                                    id='tAltPhone'
                               

                                />

                            </div>
                            <hr />


                            <div className="detail">Address Details</div>
                            <hr />

                            <div className="input-box">
                                <span htmlFor="tPermanentAddress">Permanent Address</span>
                                <input type="text"
                                    name='tPermanentAddress'
                                    value={teacherRegistraion.tPermanentAddress}
                                    onChange={handleInput}
                                    id='tPermanentAddress' required
                                />
                            </div>

                            <div className="input-box">
                                <span htmlFor="tPermanentCity">City</span>
                                <input type="text"
                                    name='tPermanentCity'
                                    value={teacherRegistraion.tPermanentCity}
                                    onChange={handleInput}
                                    id='tPermanentCity' required
                                />
                            </div>
                            <div className="input-box">
                                <span htmlFor="tPermanentState">State</span>
                                <input type="text"
                                    name='tPermanentState'
                                    value={teacherRegistraion.tPermanentState}
                                    onChange={handleInput}
                                    id='tPermanentState' required
                                />
                            </div>
                            <div className="input-box">
                                <span htmlFor="tPermanentPincode">Pincode</span>
                                <input type="number"
                                    name='tPermanentPincode'
                                    value={teacherRegistraion.tPermanentPincode}
                                    onChange={handleInput}
                                    id='tPermanentPincode' required
                                    pattern="[0-9]{6}" title="Pincode should be 6 digits"
                                />
                            </div>
                            <hr />
                            <div className="input-box">
                                <span htmlFor="tCorrespondenceAddress">Correspondance Address</span>
                                <input type="text"
                                    name='tCorrespondenceAddress'
                                    value={teacherRegistraion.tCorrespondenceAddress}
                                    onChange={handleInput}
                                    id='tCorrespondenceAddress' required
                                />
                            </div>
                            <div className="input-box">
                                <span htmlFor="tCorrespondenceCity">City</span>
                                <input type="text"
                                    name='tCorrespondenceCity'
                                    value={teacherRegistraion.tCorrespondenceCity}
                                    onChange={handleInput}
                                    id='tCorrespondenceCity' required
                                />
                            </div>
                            <div className="input-box">
                                <span htmlFor="tCorrespondenceState">State</span>
                                <input type="text"
                                    name='tCorrespondenceState'
                                    value={teacherRegistraion.tCorrespondenceState}
                                    onChange={handleInput}
                                    id='tCorrespondenceState' required
                                />
                            </div>
                            <div className="input-box">
                                <span htmlFor="tCorrespondencePincode">Pincode</span>
                                <input type="number"
                                    name='tCorrespondencePincode'
                                    value={teacherRegistraion.tCorrespondencePincode}
                                    onChange={handleInput}
                                    id='tCorrespondencePincode' required
                                    pattern="[0-9]{6}" title="Pincode should be 6 digits"
                                />
                            </div>

                            <div className="detail">Documents</div>
                            <hr />
                            <div className="fields">
                                <div className="input-box file-box">
                                    <span htmlFor="tFile">Document  File</span>
                                    <input type="file"
                                        name='tFile'
                                        value={teacherRegistraion.tFile}
                                        onChange={handleInput}
                                        id='tFile'
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="button">
                            <button type='submit'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default TeacherRegistraion
