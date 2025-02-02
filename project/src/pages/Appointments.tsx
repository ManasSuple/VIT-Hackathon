import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Search, 
  Filter,
  Brain,
  AlertCircle,
  User,
  MapPin,
  Phone,
  Plus
} from 'lucide-react';
import toast from 'react-hot-toast';
import Modal from '../components/Modal';

function Appointments() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false);
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    age: '',
    date: '',
    time: '',
    symptoms: '',
    contact: '',
    location: 'General Medicine'
  });
  
  const appointments = [
    {
      id: 'A001',
      patientName: 'John Smith',
      age: 45,
      appointmentTime: '10:30 AM',
      date: '2024-03-20',
      type: 'AI Recommended',
      symptoms: ['Chest Pain', 'Shortness of Breath'],
      priority: 'High',
      predictedConditions: ['Angina', 'Bronchitis'],
      location: 'Cardiology Department',
      contact: '+1 (555) 0123',
      status: 'Confirmed'
    },
    {
      id: 'A002',
      patientName: 'Emma Davis',
      age: 28,
      appointmentTime: '11:45 AM',
      date: '2024-03-20',
      type: 'Regular',
      symptoms: ['Fever', 'Cough'],
      priority: 'Medium',
      location: 'General Medicine',
      contact: '+1 (555) 0124',
      status: 'Waiting'
    }
  ];

  const handleNewAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be sent to a backend
    toast.success('Appointment scheduled successfully');
    setShowNewAppointmentModal(false);
    setNewAppointment({
      patientName: '',
      age: '',
      date: '',
      time: '',
      symptoms: '',
      contact: '',
      location: 'General Medicine'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Appointments</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Plus className="h-5 w-5" />
          New Appointment
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search appointments..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5 text-gray-500" />
            <span>Filter</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span>Date</span>
          </button>
        </div>
      </div>

      <Modal
        isOpen={showNewAppointmentModal}
        onClose={() => setShowNewAppointmentModal(false)}
        title="Schedule New Appointment"
      >
        <form onSubmit={handleNewAppointment} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Patient Name</label>
            <input
              type="text"
              required
              value={newAppointment.patientName}
              onChange={(e) => setNewAppointment({...newAppointment, patientName: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              required
              value={newAppointment.age}
              onChange={(e) => setNewAppointment({...newAppointment, age: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                required
                value={newAppointment.date}
                onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                required
                value={newAppointment.time}
                onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Symptoms</label>
            <textarea
              required
              value={newAppointment.symptoms}
              onChange={(e) => setNewAppointment({...newAppointment, symptoms: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              required
              value={newAppointment.contact}
              onChange={(e) => setNewAppointment({...newAppointment, contact: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <select
              value={newAppointment.location}
              onChange={(e) => setNewAppointment({...newAppointment, location: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option>General Medicine</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
              <option>Neurology</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={() => setShowNewAppointmentModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Schedule Appointment
            </button>
          </div>
        </form>
      </Modal>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['upcoming', 'today', 'completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Appointments List */}
      <div className="grid grid-cols-1 gap-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className={`
                  h-12 w-12 rounded-full flex items-center justify-center
                  ${appointment.type === 'AI Recommended' ? 'bg-purple-100' : 'bg-blue-100'}
                `}>
                  {appointment.type === 'AI Recommended' ? (
                    <Brain className="h-6 w-6 text-purple-600" />
                  ) : (
                    <Calendar className="h-6 w-6 text-blue-600" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {appointment.patientName}
                    </h3>
                    {appointment.type === 'AI Recommended' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        AI Recommended
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-1 text-sm text-gray-500">
                    {appointment.symptoms.join(', ')}
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-4">
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {appointment.appointmentTime}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {appointment.location}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      Age: {appointment.age}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Phone className="h-4 w-4 mr-1" />
                      {appointment.contact}
                    </div>
                  </div>

                  {appointment.type === 'AI Recommended' && appointment.predictedConditions && (
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-900">AI Predicted Conditions:</p>
                      <div className="mt-1 flex gap-2">
                        {appointment.predictedConditions.map((condition, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800"
                          >
                            {condition}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className={`
                  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${appointment.status === 'Confirmed' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'}
                `}>
                  {appointment.status}
                </span>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
                  View Details
                </button>
                {appointment.status === 'Waiting' && (
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Confirm
                  </button>
                )}
              </div>
            </div>

            {appointment.priority === 'High' && (
              <div className="mt-4 bg-red-50 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-red-800">High Priority Case</h4>
                  <p className="mt-1 text-sm text-red-700">
                    This patient requires immediate attention based on their symptoms and AI analysis.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;