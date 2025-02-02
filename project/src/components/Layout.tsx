import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  AlertCircle, 
  Users, 
  LogOut, 
  Bell,
  X
} from 'lucide-react';
import toast from 'react-hot-toast';

interface LayoutProps {
  onLogout: () => void;
}

function Layout({ onLogout }: LayoutProps) {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    { id: 1, message: 'New emergency case arrived', time: '2 minutes ago' },
    { id: 2, message: 'Dr. Wilson completed appointment', time: '5 minutes ago' },
    { id: 3, message: 'New appointment scheduled', time: '10 minutes ago' }
  ]);

  const handleLogout = () => {
    toast.success('Logged out successfully');
    onLogout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200">
          <AlertCircle className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">MediCare</span>
        </div>
        
        <nav className="p-4 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </NavLink>
          
          <NavLink
            to="/appointments"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <Calendar className="h-5 w-5" />
            Appointments
          </NavLink>
          
          <NavLink
            to="/emergency-queue"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <AlertCircle className="h-5 w-5" />
            Emergency Queue
          </NavLink>
          
          <NavLink
            to="/patients"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <Users className="h-5 w-5" />
            Patients
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-gray-900">Hospital Dashboard</h1>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 hover:bg-gray-50 rounded-full"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h3 className="font-medium">Notifications</h3>
                    <button 
                      onClick={() => setShowNotifications(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-4 hover:bg-gray-50">
                        <p className="text-sm text-gray-900">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => navigate('/profile')} 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
                alt="User"
                className="h-8 w-8 rounded-full"
              />
              <span>Dr. Sarah Wilson</span>
            </button>
            
            <button 
              onClick={handleLogout}
              className="p-2 text-gray-600 hover:text-red-600 rounded-full"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;