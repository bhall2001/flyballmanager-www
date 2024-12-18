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
                  <li className="grey">$10 per ring per tournament day**</li>
                  <li>
                    Generate Schedule including single elimination brackets
                  </li>
                  <li>Intuitive scoring interface</li>
                  <li>
                    Live "On Deck" website replaces Flyball Geek and includes
                    near realtime results
                  </li>
                  <li>Flexible placement scoring</li>
                  <li>Ringside judges display</li>
                  <li>C.2 and post tournament completed C.2 forms</li>
                  <li>Scoring labels with accumulated dog points</li>
                  <li>Generates NAFA scoring file</li>
                  <li>Install on as many computers as you need</li>
                  <li>Runs on Windows and Mac</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <p></p>
          <p>
            **The fee is based on the number of rings and days in the sanctioned
            tournament. You can use the app on multiple devices, both before and
            after the event, at no extra charge. For example, a two-day
            tournament with one ring costs only $20. This fee includes
            everything, like access to the online OnDeck and real-time results
            at ondeckmanager.com. Payments are securely processed via Stripe in
            app at the <code>Window {'>'} Payments</code> menu.
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
