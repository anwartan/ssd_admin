import React from 'react';

function Statistic() {
  return (
    <div>
      <h1>Statistic</h1>

      <div className="flex flex-wrap mxn1">
        <div className="col-12 sm-col-6 md-col-6 lg-col-6 px1 py1">
          <div className="card">
            <div className="cardHeader pt2">
              <h3 className="center">Registered Account</h3>
            </div>
            <div className="cardFooter pb2">
              <h2 className="center">1.920.237.692.302</h2>
            </div>
          </div>
        </div>
        <div className="col-12 sm-col-6 md-col-6 lg-col-6 px1 py1">
          <div className="card">
            <div className="cardHeader pt2">
              <h3 className="center">Active User Per Day</h3>
            </div>
            <div className="cardFooter pb2">
              <h2 className="center">1.920.237.692.302</h2>
            </div>
          </div>
        </div>
        <div className="col-12 sm-col-6 md-col-6 lg-col-6 px1 py1">
          <div className="card">
            <div className="cardHeader pt2">
              <h3 className="center">Profit Per Day</h3>
            </div>
            <div className="cardFooter pb2">
              <h2 className="center">1.920.237.692.302</h2>
            </div>
          </div>
        </div>
        <div className="col-12 sm-col-6 md-col-6 lg-col-6 px1 py1">
          <div className="flex flex-wrap mxn2">
            <div className="col-6 px2">

              <div className="card">
                <div className="cardHeader pt2">
                  <h3 className="center">Like per day</h3>
                </div>
                <div className="cardFooter pb2">
                  <h2 className="center">1.920.237.692.302</h2>
                </div>
              </div>
            </div>
            <div className="col-6 px2">

              <div className="card">
                <div className="cardHeader pt2">
                  <h3 className="center">Dislike per day</h3>
                </div>
                <div className="cardFooter pb2">
                  <h2 className="center">1.920.237.692.302</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 sm-col-6 md-col-6 lg-col-6 px1 py1">
          <div className="card">
            <div className="cardHeader pt2">
              <h3 className="center">Profit Per Month</h3>
            </div>
            <div className="cardFooter pb2">
              <h2 className="center">1.920.237.692.302</h2>
            </div>
          </div>
        </div>
        <div className="col-12 sm-col-6 md-col-6 lg-col-6 px1 py1">
          <div className="card">
            <div className="cardHeader pt2">
              <h3 className="center">Profit Per Year</h3>
            </div>
            <div className="cardFooter pb2">
              <h2 className="center">1.920.237.692.302</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
