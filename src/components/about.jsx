import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Security Cleared with over fifteen years in Business Analysis, QA, and testing. 
                        Coding is a passion of mine, I have started to code more vigorously to become a Developer. 
                        A background in Science and Software Engineering has given me a great perspective on how to test 
                        and hence the need for great clean test-driven code. 
                        Eight plus year’s experience in Agile, from setting up agile as a Greenfield project 
                        to acting as Scrum Master. Strong communication skills, alongside a passion for learning 
                        and environment improvement.  Active in volunteering skills for not-for profit organisations, 
                        along with continual education and qualifications.  
                        Passionate about Web technologies in particular JavaScript Python Ruby 
                        and Java swift for mobile applications </p>
                    <p></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here is an example of what I've done</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Some Tech </h3>
                    <p>
                        I first programmed in Java and have been coding on and off for 20 years.<br/>
                        Also I've dabbled in .Net, Ruby, JavaScript and most Recently Python.<br/>
                        A little bit of database and SQL knowledge never did me any harm<br/>
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Science</h3>
                    <p>
                        I'm truly fascinated by this subject.  From reading the books:<br/>
                        Weapons of Math Destruction - Cathy O'Neil<br/>
                        Everybody lies - Seth Stephens-Davidowitz<br/>
                        Big Data, Does size matter? - Timandra Harkness<br/><br/>
                        Currently undertaking Andrew Ngs Machine Learning on Coursera<br/>
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Other</h3>
                    <p>
                        Very passionate about helping others with some tech.<br/>
                        In the past, I've volunteered with:<br/>
                        <a href="https://www.chatterbox.io/" target="_blank" rel="noopener noreferrer">Chatterbox</a><br/>
                        Go Sweat (Now called <a href="https://www.hekahappy.com/" target="_blank" rel="noopener noreferrer">Heka</a>)<br/>
                        Currently I volunteer at <a href="https://codeyourfuture.io/" target="_blank" rel="noopener noreferrer">Code Your Future</a> <br/>
                        It is been an honour to help the wonderful students on their journey.
                    </p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}