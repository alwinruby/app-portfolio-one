import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">History</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Currently <span>2017-present</span></h2>
                        <p>CapGemini<br/>
                          Where I work as a DevOps Tester using Kubernetes and AWS technologies on Goverment projects<br/>
                          It's challenging and I love the learning and application of new technologies.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Before <span>2016</span></h2>
                        <p>Various IT positions<br/>
                          Worked for small, medium and large companies, from startups of less than twenty people to big corporates of tens of thousands.<br/>
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Education <span>Still ongoing</span></h2>
                        <p>
                          <b>BSc (Hons) Chemistry and Medical Chemistry, Glasgow University (1997)</b><br/><br/>
                          <b>Postgraduate Diploma in Information Technology (Software & Systems), Glasgow University (1999)</b><br/><br/>
                          <b>MSc Medical Science, Open University (2011)</b><br/><br/>
                          <b>Certificate in Animal Behavior, Kellogg College Oxford University (2016)</b><br/><br/>
                          <b>Introduction to Computer Science and Programming Certificate, Massachusetts Institute of Technology(2017)</b><br/><br/>
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
