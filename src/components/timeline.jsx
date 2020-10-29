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
                <h2 className="colorlib-heading animate-box">Timeline</h2>
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
                        <h2>Just now <span>2017-present</span></h2>
                        <p>YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES YES</p>
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
                        <p>Nam et libero a tellus vulputate egestas. Morbi dignissim, mauris eget consectetur scelerisque, mi justo tincidunt nulla, id tempus massa tellus vel eros. Cras ex eros, ullamcorper ac porta sed, porta sit amet nunc. Pellentesque pellentesque euismod magna quis aliquet. Quisque placerat venenatis diam, vitae placerat augue mattis vel. Proin tincidunt orci felis, a vehicula metus pretium non. Aliquam erat volutpat. In luctus, dui scelerisque congue pretium, massa ligula vehicula ante, eu interdum odio mauris ac quam. Sed a laoreet justo, eget elementum nisl. Curabitur at porta arcu, sed aliquam mauris. Aenean ornare sapien quis ipsum ultricies egestas. Donec nec aliquam nisi, vitae elementum augue.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Education <span>OLD</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor est ultricies sem sollicitudin auctor sed at lectus. Integer efficitur, nibh ac venenatis elementum, nisl massa tempus justo, in volutpat felis mi bibendum dolor. Fusce non orci eu mauris luctus ornare. Duis sem velit, aliquet sed faucibus quis, porta eget neque. Aenean eget semper nunc. Vivamus eget nibh sapien. Suspendisse malesuada lacus eget convallis porttitor. Pellentesque in nunc rhoncus nunc dignissim sodales et tincidunt ante. Nullam quis tempor neque. Nam eleifend quam et urna varius aliquam. Fusce porta justo id elementum feugiat. Praesent luctus nulla arcu, vitae elementum erat tempor at. Ut pretium neque sit amet ipsum tempus imperdiet. </p> 
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
