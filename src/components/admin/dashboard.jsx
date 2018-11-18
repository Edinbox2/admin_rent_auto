import React from 'react';
import AdminLayout from '../hoc/adminLayout';
import "./dashboard.css";

const Dashboard = () => {
    return (
        <AdminLayout>
              <div className="dashboard_main">
              <h1>Панель администратора</h1>
              </div>        
        </AdminLayout>
    );
};

export default Dashboard;