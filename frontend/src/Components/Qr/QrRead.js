import React, { useState, useRef } from 'react';
import QrReader from 'react-qr-reader';

function QrRead() {
  //useStates
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] = useState('');

  const qrRef = useRef(null);

  //function fro qr reader
  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result);
      console.log(result);
    }
  }
  //upload image
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }
  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  }
  return (
    <div>
      <div className='container is-max-widescreen'>
        <h2><b>QR Code</b></h2>
        <div className="columns">
          <div className="column is-half">
            <button className="button is-danger" onClick={(e) => { onScanFile() }}>scan to Insert</button>
            <QrReader
              ref={qrRef}
              delay={300}
              style={{ width: '100%' }}
              onError={handleErrorFile}
              onScan={handleScanFile}
              legacyMode
            />
            <h3>Scanned Code: {scanResultFile}</h3>
          </div>
          <div className="column">
            <h3>Qr Code Scan by Web Cam</h3>
            <QrReader
              delay={300}
              style={{ width: '100%' }}
              onError={handleErrorWebCam}
              onScan={handleScanWebCam}
            />
            <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
          </div>

        </div>
      </div>

    </div>
  )
}

export default QrRead