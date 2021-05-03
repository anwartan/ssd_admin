import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button } from '../components/atoms';

import 'react-datepicker/dist/react-datepicker.css';

function PushNotification() {
  const file = useRef();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h1>Push Notification</h1>
      <div className="card">
        <div className="cardHeader">
          <div className="textInput">
            <input placeholder="Topic : " />
          </div>
        </div>
        <div className="cardBody">

          <div className="textInput" style={{ height: 200 }}>
            <textarea style={{ minHeight: 200, resize: 'none' }} placeholder="Pesan :" />
          </div>
        </div>
        <div className="cardFooter">
          <div className="flex justify-between p2">
            <input ref={file} type="file" style={{ display: 'none' }} />

            <Button onClick={() => file.current.click()} type="file">Attach</Button>
            <div className="flex flex-wrap justify-end">
              <DatePicker className="btn" selected={startDate} onChange={(date) => setStartDate(date)} />
              <div className="ml2" />
              <Button>Schedule</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PushNotification;
