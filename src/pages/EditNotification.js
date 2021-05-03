import React from 'react';
import { Gambar } from '../assets/image';
import { Button } from '../components/atoms';

function EditNotification() {
  return (
    <div>
      <h1>Edit Notification</h1>
      <div className="flex flex-wrap content-stretch mxn2">
        <div className="flex col-12 sm-col-12 md-col-6 lg-col-6 px2 py2">
          <div className="card">
            <div className="cardHeader center p2">

              <img className="fit" alt="Gambar" src={Gambar} />
              <h3>CEO Gojek telah mendapatkan</h3>
            </div>
            <div className="cardBody p2">
              <p className="bold" style={{ color: 'grey' }}>
                Thomas Nugroho, Head of Retail
                Equity PT RHB Sekuritas Indonesia
                mengatakan berdasarkan riset yang
                sudah dilakukan, target harga
                saham dari ASII sampai dengan
              </p>

            </div>
            <div className="cardFooter p2 flex justify-between">
              <Button>Edit</Button>
              <Button style={{ backgroundColor: 'red' }}>Hapus</Button>

            </div>
          </div>
        </div>
        <div className="flex col-12 sm-col-12 md-col-6 lg-col-6 px2 py2">
          <div className="card">
            <div className="cardHeader center p2">

              <img className="fit" alt="Gambar" src={Gambar} />
              <h3>CEO Gojek telah mendapatkan</h3>
            </div>
            <div className="cardBody p2">
              <p className="bold" style={{ color: 'grey' }}>
                Thomas Nugroho, Head of Retail
                Equity PT RHB Sekuritas Indonesia
                mengatakan berdasarkan riset yang
                sudah dilakukan, target harga
                saham dari ASII sampai dengan
              </p>

            </div>
            <div className="cardFooter p2 flex justify-between">
              <Button>Edit</Button>
              <Button style={{ backgroundColor: 'red' }}>Hapus</Button>

            </div>
          </div>
        </div>
        <div className="flex col-12 sm-col-12 md-col-6 lg-col-6 px2 py2">
          <div className="card">
            <div className="cardHeader center p2">

              <img className="fit" alt="Gambar" src={Gambar} />
              <h3>CEO Gojek telah mendapatkan</h3>
            </div>
            <div className="cardBody p2">
              <p className="bold" style={{ color: 'grey' }}>
                Thomas Nugroho, Head of Retail
                Equity PT RHB Sekuritas Indonesia
                mengatakan berdasarkan riset yang
                sudah dilakukan, target harga
                saham dari ASII sampai dengan
              </p>

            </div>
            <div className="cardFooter p2 flex justify-between">
              <div>
                <Button>Edit</Button>
              </div>
              <Button style={{ backgroundColor: 'red' }}>Hapus</Button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditNotification;
