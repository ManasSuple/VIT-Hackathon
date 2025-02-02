import React from 'react';
import { 
  Users, 
  Calendar, 
  AlertCircle, 
  Clock,
  TrendingUp,
  Activity
} from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Patients Today</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">45</p>
            </div>
            <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500 font-medium">12% increase</span>
            <span className="text-gray-600 ml-1">from yesterday</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Appointments Today</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">28</p>
            </div>
            <div className="h-12 w-12 bg-purple-50 rounded-full flex items-center justify-center">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <Clock className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-gray-600">Next appointment in 15 mins</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Emergency Cases</p>
              <p className="text-2xl font-semibold text-gray-900 mt-1">3</p>
            </div>
            <div className="h-12 w-12 bg-red-50 rounded-full flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <Activity className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-red-500 font-medium">1 critical case</span>
            <span className="text-gray-600 ml-1">needs attention</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            {
              time: '9:32 AM',
              title: 'New emergency case arrived',
              description: 'Patient with severe chest pain - Priority Level: High',
              type: 'emergency'
            },
            {
              time: '9:15 AM',
              title: 'Appointment completed',
              description: 'Dr. Wilson completed checkup with John Doe',
              type: 'appointment'
            },
            {
              time: '9:00 AM',
              title: 'New appointment scheduled',
              description: 'Sarah Smith booked for 2:30 PM',
              type: 'appointment'
            }
          ].map((activity, index) => (
            <div key={index} className="p-4 hover:bg-gray-50">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {activity.type === 'emergency' ? (
                    <div className="h-8 w-8 bg-red-50 rounded-full flex items-center justify-center">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    </div>
                  ) : (
                    <div className="h-8 w-8 bg-blue-50 rounded-full flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;