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
                  <li className="grey">$10 per ring per tournament day*</li>
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
        <div className="container">
          <p>
            *The fee is determined by the number of rings and the number of days
            of the sanctioned tournament. Application usage across multiple
            devices, both before and after the tournament, is included at no
            additional cost. For example, a single-ring, two-day tournament
            costs just $20. This fee covers all costs including accessing the
            online ondeck and realtime results at ondeckmanager.com. Payments
            are securely processed via Stripe in app at the{' '}
            <code>Window > Payments</code> menu.
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
}

export default Pricing;
