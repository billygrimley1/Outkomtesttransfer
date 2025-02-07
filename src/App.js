// src/App.js
import React, { useState } from "react";
import LeftNav from "./components/LeftNav";
import TopBar from "./components/TopBar";
import WorkflowKanban from "./components/WorkflowKanban";
import TaskKanban from "./components/TaskKanban";
import CustomerForm from "./components/CustomerForm";
import UserForm from "./components/UserForm";
import CustomFieldsManager from "./components/CustomFieldsManager";
import ReportsDashboard from "./components/ReportsDashboard";
import BoardConfigPanel from "./components/BoardConfigPanel";
import "./styles/App.css";

// Import the Supabase client
import { supabase } from "./supabaseClient";

function App() {
  // The view state controls which page is visible.
  const [view, setView] = useState("workflows");

  // Test function to insert a customer record into Supabase.
  const testInsertCustomer = async () => {
    const { data, error } = await supabase.from("customers").insert([
      {
        arr: 100000,
        health_rank: "Good",
        contract_start_date: "2024-02-15",
        renewal_date: "2025-02-15",
        last_login: "2024-04-10",
        product_usage: 200,
        number_of_users: 10,
        main_contact: "Jane Doe",
        main_contact_email: "jane.doe@example.com",
        status: "Active",
        csm: "Alice Smith",
        risk_status: "Low",
      },
    ]);

    if (error) {
      console.error("Error inserting customer:", error);
      alert("Error inserting customer. Check console for details.");
    } else {
      console.log("Inserted customer:", data);
      alert("Customer inserted successfully!");
    }
  };

  // Test function to read customer records from Supabase.
  const testReadCustomers = async () => {
    const { data, error } = await supabase.from("customers").select("*");

    if (error) {
      console.error("Error reading customers:", error);
      alert("Error reading customers. Check console for details.");
    } else {
      console.log("Fetched customers:", data);
      alert(`Fetched ${data.length} customers. Check console for details.`);
    }
  };

  const renderView = () => {
    switch (view) {
      case "workflows":
        return <WorkflowKanban />;
      case "actions":
        return <TaskKanban />;
      case "customers":
        return <CustomerForm />;
      case "users":
        return <UserForm />;
      case "customFields":
        return <CustomFieldsManager />;
      case "boardConfig":
        return <BoardConfigPanel />;
      case "reports":
        return <ReportsDashboard />;
      default:
        return <WorkflowKanban />;
    }
  };

  return (
    <div className="app-container">
      <LeftNav setView={setView} currentView={view} />
      <div className="main-content">
        <TopBar setView={setView} currentView={view} />
        {/* Buttons to test Supabase functionality */}
        <div className="test-buttons" style={{ margin: "1rem 0" }}>
          <button onClick={testInsertCustomer} style={{ marginRight: "1rem" }}>
            Test Insert Customer
          </button>
          <button onClick={testReadCustomers}>Test Read Customers</button>
        </div>
        <div className="view-container">{renderView()}</div>
      </div>
    </div>
  );
}

export default App;
