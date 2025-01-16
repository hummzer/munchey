import React, { useEffect, useState } from "react";
import API from "../api/api";

const Dashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await API.get("patients/");
        setPatients(response.data);
      } catch (err) {
        console.error("Failed to fetch patients.", err);
      }
    };
    fetchPatients();
  },[]);

  return (
  <div>
      <h1>Dashboard</h1>
      <h2>Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} ({patient.age})
          </li>
        ))}
      </ul>
  </div>
  );
};

export default Dashboard;
