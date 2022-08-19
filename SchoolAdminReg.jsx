import React, { useState } from 'react'
import './SchoolAdminReg.css'


const SchoolAdminReg = () => {
    const [schoolAdminReg, setSchoolAdminReg] = useState({
        schoolName: '',
        schoolDiceCode: '',
        schoolAddress: '',
        schoolCity: '',
        schoolState: '',
        schoolPincode: '',
        schoolBoard: '',
        schoolMedium1: '',
        schoolMedium2: '',
        schoolMedium3: '',
        schoolTeachers: '',
        schoolAdministration: '',
        schoolOtherStaff: '',
        schoolTechStaffName: '',
        schoolTechStaffPhone: '',
        schoolTechStaffEmail: '',
        schoolFinanceStaffName: '',
        schoolFinanceStaffNumber: '',
        schoolFinanceStaffEmail: '',
        schoolPrincipalName: '',
        schoolPrincipalFatherName: '',
        schoolPrincipalMotherName: '',
        schoolPrincipalAddress: '',
        schoolPrincipalCity: '',
        schoolPrincipalState: '',
        schoolPrincipalPincode: '',
        schoolPrincipalAadharNumber: '',
        schoolPrincipalPhone: '',
        schoolPrincipalAltPhone: '',
        schoolPrincipalEmail: '',
        schoolPrincipalAltEmail: '',
        schoolPrincipalFile: '',
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setSchoolAdminReg({ ...schoolAdminReg, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...schoolAdminReg, id: new Date().getTime().toString() }
        console.log(newRecord)
        setSchoolAdminReg(
            {
                schoolName: '',
                schoolDiceCode: '',
                schoolAddress: '',
                schoolCity: '',
                schoolState: '',
                schoolPincode: '',
                schoolBoard: '',
                schoolMedium1: '',
                schoolMedium2: '',
                schoolMedium3: '',
                schoolTeachers: '',
                schoolAdministration: '',
                schoolOtherStaff: '',
                schoolTechStaffName: '',
                schoolTechStaffPhone: '',
                schoolTechStaffEmail: '',
                schoolFinanceStaffName: '',
                schoolFinanceStaffNumber: '',
                schoolFinanceStaffEmail: '',
                schoolPrincipalName: '',
                schoolPrincipalFatherName: '',
                schoolPrincipalMotherName: '',
                schoolPrincipalAddress: '',
                schoolPrincipalCity: '',
                schoolPrincipalState: '',
                schoolPrincipalPincode: '',
                schoolPrincipalAadharNumber: '',
                schoolPrincipalPhone: '',
                schoolPrincipalAltPhone: '',
                schoolPrincipalEmail: '',
                schoolPrincipalAltEmail: '',
                schoolPrincipalFile: '',
            }
        )
    }

    //validation
  //  if(sFirstName && sLastName && sEmail && sPhone && sBirthDay && sReligion &&
   //     sFatherName && sFatherEmail && sFatherPhone && sFatherOccupation && sMotherName && sMotherEmail &&
   //     sMotherPhone && sMotherOccupation && sLocalGuardianName && sLocalGuardianEmail && sLocalGuardianPhone && 
   //     sLocalGuardianOccupation && sPermanentAddress && sPermanentCity && sPermanentState && sPermanentPincode &&
   //     sCorrespondenceAddress && sCorrespondenceCity && sCorrespondenceState && sCorrespondencePincode && sAadharNumber){
   //     axios.post("http://localhost:9002/StudentRegistration",studentRegistraion)
   //    .then( res => console.log(res))
      
  //  } 

    return (
        <section className="schoolAdmin">

            <div className="container">
                <header>Registration</header>

                <form action="#" onSubmit={handleSubmit}>
                    <div className="form first">
                        <div className="details school">
                            <span className='title'>School Details</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label htmlFor="schoolName">School Name</label>
                                    <input type="text"
                                        name='schoolName'
                                        value={schoolAdminReg.schoolName}
                                        onChange={handleInput}
                                        id='schoolName'
                                        required
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolDiceCode">School Dice Code</label>
                                    <input type="tel"
                                        name='schoolDiceCode'
                                        value={schoolAdminReg.schoolDiceCode}
                                        onChange={handleInput}
                                        id='schoolDiceCode'
                                        required 
                                        pattern="[0-9]{12}" title="Dice code should be 12 digits"
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolAddress">Address</label>
                                    <input type="text"
                                        name='schoolAddress'
                                        value={schoolAdminReg.schoolAddress}
                                        onChange={handleInput}
                                        id='schoolAddress'
                                        required
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolCity">City</label>
                                    <input type="text"
                                        name='schoolCity'
                                        value={schoolAdminReg.schoolCity}
                                        onChange={handleInput}
                                        id='schoolCity'
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="schoolState">State</label>
                                    <input type="text"
                                        name='schoolState'
                                        value={schoolAdminReg.schoolState}
                                        onChange={handleInput}
                                        id='schoolState' required
                                    />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="schoolPincode">Pincode</label>
                                    <input type="tel"
                                        name='schoolPincode'
                                        value={schoolAdminReg.schoolPincode}
                                        onChange={handleInput}
                                        id='schoolPincode' required
                                        pattern="[0-9]{6}" title="Pincode should be 6 digits"
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolBoard">Board</label>
                                    <input type="text"
                                        name='schoolBoard'
                                        value={schoolAdminReg.schoolBoard}
                                        onChange={handleInput}
                                        id='schoolBoard' required

                                    />
                                </div>

                                <hr />
                                <div className="medium-field">

                                    <label htmlFor="schoolMedium1">Medium</label>
                                    <div className="medium-input">
                                        {/* <div className="input-field"> */}
                                        <input type="text"
                                            name='schoolMedium1'
                                            value={schoolAdminReg.schoolMedium1}
                                            onChange={handleInput}
                                            id='schoolMedium1' required
                                        />
                                        {/* </div> */}

                                        {/* <div className="input-field"> */}
                                        <input type="text"
                                            name='schoolMedium2'
                                            value={schoolAdminReg.schoolMedium2}
                                            onChange={handleInput}
                                            id='schoolMedium2'
                                        />
                                        {/* </div> */}

                                        {/* <div className="input-field"> */}
                                        <input type="text"
                                            name='schoolMedium3'
                                            value={schoolAdminReg.schoolMedium3}
                                            onChange={handleInput}
                                            id='schoolMedium3'
                                        />
                                        {/* </div> */}
                                    </div>
                                </div>

                                <hr />

                                <div className="input-field">
                                    <label htmlFor="schoolTeachers">Number of Teachers</label>
                                    <input type="number"
                                        name='schoolTeachers'
                                        value={schoolAdminReg.schoolTeachers}
                                        onChange={handleInput}
                                        id='schoolTeachers' required

                                    />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="schoolAdministration">Number of Administration Staff</label>
                                    <input type="number"
                                        name='schoolAdministration'
                                        value={schoolAdminReg.schoolAdministration}
                                        onChange={handleInput}
                                        id='schoolAdministration' required

                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolOtherStaff">Number of Other Staff</label>
                                    <input type="number"
                                        name='schoolOtherStaff'
                                        value={schoolAdminReg.schoolOtherStaff}
                                        onChange={handleInput}
                                        id='schoolOtherStaff' required

                                    />
                                </div>
                            </div>
                        </div>

                        <div className="details Technical">
                            <span className="title">Technical Staff Details</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label htmlFor="schoolTechStaffName">Name</label>
                                    <input type="text"
                                        name='schoolTechStaffName'
                                        value={schoolAdminReg.schoolTechStaffName}
                                        onChange={handleInput}
                                        id='schoolTechStaffName' required
                                    />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="schoolTechStaffPhone">Contact Number</label>
                                    <input type="number"
                                        name='schoolTechStaffPhone'
                                        value={schoolAdminReg.schoolTechStaffPhone}
                                        onChange={handleInput}
                                        id='schoolTechStaffPhone' required
                                        pattern="[0-9]{10}" title="Number should be 10 digits"
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolTechStaffEmail">Email</label>
                                    <input type="email"
                                        name='schoolTechStaffEmail'
                                        value={schoolAdminReg.schoolTechStaffEmail}
                                        onChange={handleInput}
                                        id='schoolTechStaffEmail' required
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="details Finance">
                            <span className="title">Finance Staff Details</span>
                            <div className="fields">

                                <hr />
                                <div className="input-field">
                                    <label htmlFor="schoolFinanceStaffName">Name</label>
                                    <input type="text"
                                        name='schoolFinanceStaffName'
                                        value={schoolAdminReg.schoolFinanceStaffName}
                                        onChange={handleInput}
                                        id='schoolFinanceStaffName' required
                                    />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="schoolFinanceStaffNumber">Contact</label>
                                    <input type="tel"
                                        name='schoolFinanceStaffNumber'
                                        value={schoolAdminReg.schoolFinanceStaffNumber}
                                        onChange={handleInput}
                                        id='schoolFinanceStaffNumber' required
                                        pattern="[0-9]{10}" title="Number should be 10 digits"
                                    />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="schoolFinanceStaffEmail">Email</label>
                                    <input type="email"
                                        name='schoolFinanceStaffEmail'
                                        value={schoolAdminReg.schoolFinanceStaffEmail}
                                        onChange={handleInput}
                                        id='schoolFinanceStaffEmail' required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="details principal">
                            <span className='title'>Principal Details</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label htmlFor="schoolPrincipal">Name</label>
                                    <input type="text"
                                        name='schoolPrincipal'
                                        value={schoolAdminReg.schoolPrincipal}
                                        onChange={handleInput}
                                        id='schoolPrincipal' required
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolPrincipalFatherName">Father's Name</label>
                                    <input type="tel"
                                        name='schoolPrincipalFatherName'
                                        value={schoolAdminReg.schoolPrincipalFatherName}
                                        onChange={handleInput}
                                        id='schoolPrincipalFatherName' required
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolPrincipalMotherName">Mother's Name</label>
                                    <input type="tel"
                                        name='schoolPrincipalMotherName'
                                        value={schoolAdminReg.schoolPrincipalMotherName}
                                        onChange={handleInput}
                                        id='schoolPrincipalMotherName' required
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolPrincipalAddress">Address</label>
                                    <input type="text"
                                        name='schoolPrincipalAddress'
                                        value={schoolAdminReg.schoolPrincipalAddress}
                                        onChange={handleInput}
                                        id='schoolPrincipalAddress' required
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolPrincipalCity">City</label>
                                    <input type="text"
                                        name='schoolPrincipalCity'
                                        value={schoolAdminReg.schoolPrincipalCity}
                                        onChange={handleInput}
                                        id='schoolPrincipalCity' required
                                    />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="schoolPrincipalState">State</label>
                                    <input type="text"
                                        name='schoolPrincipalState'
                                        value={schoolAdminReg.schoolPrincipalState}
                                        onChange={handleInput}
                                        id='schoolPrincipalState' required
                                    />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="schoolPrincipalPincode">Pincode</label>
                                    <input type="number"
                                        name='schoolPrincipalPincode'
                                        value={schoolAdminReg.schoolPrincipalPincode}
                                        onChange={handleInput}
                                        id='schoolPrincipalPincode' required
                                        pattern="[0-9]{6}" title="Pincode should be 6 digits"
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolPrincipalAadharNumber">Aadhar Number</label>
                                    <input type="tel"
                                        name='schoolPrincipalAadharNumber'
                                        value={schoolAdminReg.schoolPrincipalAadharNumber}
                                        onChange={handleInput}
                                        id='schoolPrincipalAadharNumber' required
                                        pattern="[0-9]{12}" title="Aadhar should be 12 digits"
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolPrincipalPhone">Contact Number</label>
                                    <input type="tel"
                                        name='schoolPrincipalPhone'
                                        value={schoolAdminReg.schoolPrincipalPhone}
                                        onChange={handleInput}
                                        id='schoolPrincipalPhone' required
                                        pattern="[0-9]{10}" title="Number should be 10 digits"
                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolPrincipalAltPhone">Alternative Contact Number</label>
                                    <input type="tel"
                                        name='schoolPrincipalAltPhone'
                                        value={schoolAdminReg.schoolPrincipalAltPhone}
                                        onChange={handleInput}
                                        id='schoolPrincipalAltPhone' required

                                    />
                                </div>

                                <div className="input-field">
                                    <label htmlFor="schoolPrincipalEmail">Email</label>
                                    <input type="email"
                                        name='schoolPrincipalEmail'
                                        value={schoolAdminReg.schoolPrincipalEmail}
                                        onChange={handleInput}
                                        id='schoolPrincipalEmail' required

                                    />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="schoolPrincipalAltEmail">Alternative Email</label>
                                    <input type="email"
                                        name='schoolPrincipalAltEmail'
                                        value={schoolAdminReg.schoolPrincipalAltEmail}
                                        onChange={handleInput}
                                        id='schoolPrincipalAltEmail' required

                                    />
                                </div>
                            </div>
                        </div>


                        <div className="details document file-box">
                            <span className="title">Documents</span>

                            <div className="fields">
                                <div className="input-field">
                                    <label htmlFor="sFile">Document  File</label>
                                    <input type="file"
                                        name='sFile'
                                        value={schoolAdminReg.sFile}
                                        onChange={handleInput}
                                        id='sFile' required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="button">
                            <button type='submit'>Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SchoolAdminReg
