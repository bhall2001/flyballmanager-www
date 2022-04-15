import React from 'react';
import clsx from 'clsx';

function Pricing() {
  return (
    <>
      <section>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--12')}>
                <ul className="price">
                  <li className="header" style={{ backgroundColor: '#2e8555' }}>
                    Pricing
                  </li>
                  <li className="grey">$10 / day</li>
                  <li>Generate Schedule</li>
                  <li>Intuitive Scoring Interface</li>
                  <li>Live "On Deck" Website Replaces Flyball Geek</li>
                  <li>Flexible Placement Scoring</li>
                  <li>Ringside Judges Display</li>
                  <li>Prints C.2 and Post Tournament Completed C.2 Forms</li>
                  <li>Scoring Labels with Accumulated Dog Points</li>
                  <li>Generates NAFA Scoring File</li>
                  <li>Runs on Windows and Mac</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
}

export default Pricing;
