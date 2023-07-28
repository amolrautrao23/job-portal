import React from 'react'
import dt from 'date-and-time';

const AppliedCard = ({ value }) => {

    const { title, name, email, phone, cLeter, date,cv } = value;
    const FormatDate = () => {
        var now = new Date(date);
        now=dt.format(now, 'DD/MM/YYYY, HH:mm:ss A'); 
        // console.log(now)
        return now

    }
    return (
        <>
            <div className='job-cart application'>
                <div className="cart-inner">
                    <div className='cart-text'>
                        <h2 className="job-title"> {title}</h2>
                        <p><strong>Name :</strong> {name}</p>
                        <p><strong>Email :</strong> {email}</p>
                        <p><strong>Mobile :</strong> {phone}</p>
                        <p><strong>CV/Resume : </strong><a href={cv}>cv.pdf</a></p>
                    </div>
                    <div className="cover-letter">
                        <p>cover Letter :</p>
                        <p>{cLeter}</p>
                    </div>
                    <div className="time">
                        <p><FormatDate /> (1yr)</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppliedCard
