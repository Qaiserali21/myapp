import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
            color: 'white',
            backgroundColor: 'black',
            fontFamily: 'Arial',
            padding: '20px',
            borderRadius: '5px',
            // marginBottom: '10px',    
    })

    const [btntext, setBtntext] = useState('Enable Light Mode')

    const togglebtn =()=>{
        if (myStyle.color === 'white') {
            setMyStyle ({
                color: 'black',
                backgroundColor: 'white',
                fontFamily: 'Arial',
                padding: '20px',
                borderRadius: '5px',
                // marginBottom: '10px',
            })
            setBtntext('Enable Dark Mode')
        }
        else {
            setMyStyle ({
                color: 'white',
                backgroundColor: 'black',
                fontFamily: 'Arial',
                padding: '20px',
                borderRadius: '5px',
                // marginBottom: '10px',
            })
            setBtntext('Enable Light Mode')
        }
    }
  return (
    <div className='container' style={myStyle}>
                <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                TextUtils History
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Benefits of using TextUtils
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Utilites
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        <button className="btn btn-primary my-3" onClick={togglebtn}>{btntext}</button>
    </div>
  )
}
