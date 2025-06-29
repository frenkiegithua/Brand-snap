import React, { useState, useEffect } from 'react';

const UploadForm = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [publicId, setPublicId] = useState('');
  const [uploading, setUploading] = useState(false);

  const [transformType, setTransformType] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [cropMode, setCropMode] = useState('fill');
  const [watermarkText, setWatermarkText] = useState('');
  const [quality, setQuality] = useState('auto');
  const [applyGrayscale, setApplyGrayscale] = useState(false);
  const [applyBlur, setApplyBlur] = useState(false);

  const [history, setHistory] = useState([]);

  const cloudName = 'dotjub0yn';
  const uploadPreset = 'brandsnap_present';

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('uploadHistory')) || [];
    setHistory(saved);
  }, []);

  const saveToHistory = (url) => {
    const newEntry = {
      url,
      time: new Date().toLocaleString(),
      transform: transformType || 'none',
    };
    const updated = [newEntry, ...history].slice(0, 10);
    setHistory(updated);
    localStorage.setItem('uploadHistory', JSON.stringify(updated));
  };

  const clearHistory = () => {
    localStorage.removeItem('uploadHistory');
    setHistory([]);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setPublicId('');
  };

  const handleUpload = async () => {
    if (!image) return alert('Please select an image.');
    setUploading(true);

    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', uploadPreset);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setPublicId(data.public_id);
      const finalUrl = getTransformedUrl(data.public_id);
      saveToHistory(finalUrl);
    } catch (err) {
      alert('Upload failed.');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const buildTransformation = () => {
    let t = [];

    if (transformType === 'resize') {
      if (width) t.push(`w_${width}`);
      if (height) t.push(`h_${height}`);
      if (cropMode) t.push(`c_${cropMode}`);
    }

    if (transformType === 'watermark' && watermarkText) {
      const overlayText = `l_text:arial_30_bold:${encodeURIComponent(watermarkText)},g_south_east,x_10,y_10,co_white`;
      t.push(overlayText);
    }

    if (transformType === 'compress') {
      t.push(`q_${quality}`);
      t.push('f_auto');
    }

    if (applyGrayscale) t.push('e_grayscale');
    if (applyBlur) t.push('e_blur:200');

    return t.join(',');
  };

  const getTransformedUrl = (id = publicId) => {
    const base = `https://res.cloudinary.com/${cloudName}/image/upload`;
    const transformation = buildTransformation();
    return `${base}/${transformation}/${id}.jpg`;
  };

  const downloadImage = () => {
    const url = getTransformedUrl();
    const link = document.createElement('a');
    link.href = url;
    link.download = 'transformed-image.jpg';
    link.click();
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🧰 Brand-Snap Image Transformer</h2>

      <div className="card shadow p-4 mb-4">
        <input
          type="file"
          className="form-control mb-3"
          onChange={handleImageChange}
          accept="image/*"
        />

        {previewUrl && (
          <div className="mb-4 text-center">
            <h6>Preview:</h6>
            <img
              src={previewUrl}
              alt="Preview"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '250px' }}
            />
          </div>
        )}

        <div className="mb-3">
          <label className="form-label fw-bold">Transformation Type:</label>
          <select
            className="form-select"
            value={transformType}
            onChange={(e) => setTransformType(e.target.value)}
          >
            <option value="">-- None --</option>
            <option value="resize">Resize + Crop</option>
            <option value="compress">Compress</option>
            <option value="watermark">Add Watermark</option>
          </select>
        </div>

        {transformType === 'resize' && (
          <>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
            <select
              className="form-select mb-3"
              value={cropMode}
              onChange={(e) => setCropMode(e.target.value)}
            >
              <option value="fill">Fill</option>
              <option value="pad">Pad</option>
              <option value="crop">Crop</option>
              <option value="thumb">Thumb (Smart Face)</option>
            </select>
          </>
        )}

        {transformType === 'watermark' && (
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Watermark text"
            value={watermarkText}
            onChange={(e) => setWatermarkText(e.target.value)}
          />
        )}

        {transformType === 'compress' && (
          <select
            className="form-select mb-3"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
          >
            <option value="auto">Auto</option>
            <option value="auto:low">Low</option>
            <option value="auto:eco">Eco</option>
            <option value="auto:good">Good</option>
            <option value="auto:best">Best</option>
          </select>
        )}

        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="grayscale"
            checked={applyGrayscale}
            onChange={() => setApplyGrayscale(!applyGrayscale)}
          />
          <label className="form-check-label" htmlFor="grayscale">Grayscale</label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="blur"
            checked={applyBlur}
            onChange={() => setApplyBlur(!applyBlur)}
          />
          <label className="form-check-label" htmlFor="blur">Blur</label>
        </div>

        <button className="btn btn-primary" onClick={handleUpload} disabled={uploading || !image}>
          {uploading ? 'Uploading...' : 'Upload & Transform'}
        </button>

        {publicId && (
          <div className="mt-4 text-center">
            <img
              src={getTransformedUrl()}
              alt="Transformed"
              className="img-fluid rounded border"
              style={{ maxHeight: '300px' }}
            />
            <br />
            <button className="btn btn-success mt-3" onClick={downloadImage}>
              ⬇️ Download Transformed
            </button>
          </div>
        )}
      </div>

      {/* Recent Uploads */}
      <div className="card p-4 shadow">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">📜 Recent Uploads</h5>
          <button onClick={clearHistory} className="btn btn-sm btn-danger">Clear History</button>
        </div>

        {history.length === 0 ? (
          <p className="text-muted">No uploads yet.</p>
        ) : (
          <div className="row">
            {history.map((item, idx) => (
              <div className="col-md-4 mb-3" key={idx}>
                <div className="card h-100">
                  <img src={item.url} alt="Recent" className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text"><strong>Transform:</strong> {item.transform}</p>
                    <p className="card-text text-muted">{item.time}</p>
                    <a href={item.url} download className="btn btn-sm btn-outline-primary">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadForm;
