import React from 'react';
import { Button } from '../components/atoms';

function Dashboard() {
  // eslint-disable-next-line
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="flex flex-wrap mxn1">
        <div className="col-12 sm-col-6 md-col-6 lg-col-6 px1 py1">
          <div className="card">
            <div className="cardHeader p2">
              <h3 className="center">Total Complain : 5</h3>
            </div>
            <div className="cardBody p2">
              <h3>Via Email : 2</h3>

            </div>
            <div className="cardFooter p2">
              <Button className="btn-block">View Complains</Button>
            </div>
          </div>
        </div>
        <div className="col-12 sm-col-6 md-col-6 lg-col-6 px1 py1">
          <div className="flex flex-column">

            <div className="card">
              <div className="cardHeader pt2">
                <h3 className="center">Active User</h3>
              </div>
              <div className="cardFooter pb2">
                <h2 className="center">1.920.237.692.302</h2>
              </div>
            </div>
            <div className="flex flex-wrap mxn1 ">
              <div className="col-6 px1 py1">

                <div className="card">
                  <div className="cardHeader pt2">
                    <h3 className="center">Like per day</h3>
                  </div>
                  <div className="cardFooter pb2">
                    <h2 className="center">3.000.000</h2>
                  </div>
                </div>

              </div>
              <div className="col-6 px1 py1">

                <div className="card">
                  <div className="cardHeader pt2">
                    <h3 className="center">Dislike per day</h3>
                  </div>
                  <div className="cardFooter pb2">
                    <h2 className="center">2.000</h2>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
