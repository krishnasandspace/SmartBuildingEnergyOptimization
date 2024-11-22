import React, { useState, useEffect } from "react";

function Dashboard() {
  const [data, setData] = useState([]);

  // Replace <api-gateway-endpoint> with the actual Invoke URL
  const apiEndpoint = "https://<api-gateway-endpoint>/energy-data";

  useEffect(() => {
    fetch(apiEndpoint)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Energy Dashboard</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px auto" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Device ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Temperature (°C)</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.device_id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.temperature}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
