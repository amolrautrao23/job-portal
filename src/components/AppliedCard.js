import React from 'react'

const AppliedCard = () => {
    return (
        <>
            <div className='job-cart application'>
                <div className="cart-inner">
                    <div className='cart-text'>
                        <h2 className="job-title">Title</h2>
                        <p><strong>Name :</strong> salary</p>
                        <p><strong>Email :</strong> expe</p>
                        <p><strong>Mobile :</strong> desc</p>
                        <p><strong>CV/Resume : </strong><button>cv.pdf</button></p>
                    </div>
                    <div className="cover-letter">
                        <p>cover Letter :</p>
                        <p>dfsdfsjfsjhh</p>
                    </div>
                    <div className="time">
                        <p>7/11/2022, </p><p>1:10:56 PM (1yr)</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppliedCard
