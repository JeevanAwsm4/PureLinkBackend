import React,{useEffect,useState} from 'react';

export default function Want_or_donate_before(){
    const popup = () => {
        container.style.display='block'
    }   
    const closepopup = () => {
       container.style.display='none'
     }
    return(
        <>
    <div id="donatePopupContainer">
        <div class="formContainer" id="donateFormContainer">
            <div class="closeBtn" id="closeDonatePopup">
                <img src="{% static 'template/want_blood/images/close.png' %}" onClick={closepopup()}alt="close.png"/>
            </div>
            <h2>Donate Blood Form</h2>
            <form action="{% url 'web:donate_blood' %}" method="post" id="donateForm">
                {% csrf_token %}
                <div class="topContainer">
                    <div class="inputLeft">
                        <div class="inputRow">
                            {{form.name}}
                        </div>
                        <div class="inputRow">
                            {{form.phone_no}}
                        </div>
                        <div class="inputRow">
                            {{form.age}}
                        </div>
                        <div class="inputRow">
                            {{form.has_tattoo}}
                        </div>
                    </div>
                    <div class="inputRight">
                        <div class="inputRow">
                            {{form.blood_group}}
                        </div>
                        <div class="inputRow">
                            {{form.aadhaar_number}}
                        </div>
                        <div class="inputRow">
                            {{form.address}}
                        </div>
                        <div class="inputRow">
                            {{form.latitude}}
                            {{form.longitude}}
                        </div>
                        <button id="open_map_btn" type="button">Access My coordinates</button>
                    </div>
                </div>

                <div class="bottomContainer">
                    <div class="btnContainer">
                        <button type="submit" class="submitButton" id="donateSubmit">Submit</button>
                        <span id="donateformerrormessage"></span>
                        <h5 id="alreadyregistered"><a href="{% url 'web:registered' %}">Already Registered ?</a></h5>
                    </div>
                </div>
            </form>


            <form action="" method="post" id="otpFormDonateSubmission">
                
            </form>
        </div>
    </div>
            <section class="body">
                <section class="wrapper">
                    <section class="box">
                        <h1>Request or give blood</h1>
                        <section class="flexy">
                            <button class="want" onClick={popup()}>Want Blood</button>
                            <button class="donate">Donate Blood</button>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}