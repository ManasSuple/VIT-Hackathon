import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus,
  User,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Activity
} from 'lucide-react';
import toast from 'react-hot-toast';
import Modal from '../components/Modal';

function Patients() {
  const [showNewPatientModal, setShowNewPatientModal] = useState(false);
  const [showBookAppointmentModal, setShowBookAppointmentModal] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: 'Male',
    contact: '',
    address: '',
    medicalHistory: ''
  });
  const [newAppointment, setNewAppointment] = useState({
    date: '',
    time: '',
    department: 'General Medicine',
    reason: ''
  });

  const handleNewPatient = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Patient added successfully');
    setShowNewPatientModal(false);
    setNewPatient({
      name: '',
      age: '',
      gender: 'Male',
      contact: '',
      address: '',
      medicalHistory: ''
    });
  };

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Appointment booked successfully');
    setShowBookAppointmentModal(false);
    setNewAppointment({
      date: '',
      time: '',
      department: 'General Medicine',
      reason: ''
    });
  };

  const patients = [
    {
      id: 'P001',
      name: 'John Smith',
      age: 45,
      gender: 'Male',
      contact: '+1 (555) 0123',
      address: '123 Main St, City',
      lastVisit: '2024-03-15',
      upcomingAppointment: '2024-03-20',
      medicalHistory: ['Hypertension', 'Diabetes'],
      recentDiagnosis: 'Chest Pain - Under Investigation',
      status: 'Active'
    },
    {
      id: 'P002',
      name: 'Emma Davis',
      age: 28,
      gender: 'Female',
      contact: '+1 (555) 0124',
      address: '456 Oak Ave, City',
      lastVisit: '2024-03-18',
      upcomingAppointment: '2024-03-20',
      medicalHistory: ['Asthma'],
      recentDiagnosis: 'Upper Respiratory Infection',
      status: 'Active'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Patients</h1>
        <button 
          onClick={() => setShowNewPatientModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add New Patient
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-5 w-5 text-gray-500" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <Modal
        isOpen={showNewPatientModal}
        onClose={() => setShowNewPatientModal(false)}
        title="Add New Patient"
      >
        <form onSubmit={handleNewPatient} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              required
              value={newPatient.name}
              onChange={(e) => setNewPatient({...newPatient, name: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Age</label>
              <input
                type="number"
                required
                value={newPatient.age}
                onChange={(e) => setNewPatient({...newPatient, age: e.target.value})}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Gender</label>
              <select
                value={newPatient.gender}
                onChange={(e) => setNewPatient({...newPatient, gender: e.target.value})}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              required
              value={newPatient.contact}
              onChange={(e) => setNewPatient({...newPatient, contact: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              required
              value={newPatient.address}
              onChange={(e) => setNewPatient({...newPatient, address: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              rows={2}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Medical History</label>
            <textarea
              value={newPatient.medicalHistory}
              onChange={(e) => setNewPatient({...newPatient, medicalHistory: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              rows={3}
              placeholder="Any pre-existing conditions, allergies, or past surgeries"
            />
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={() => setShowNewPatientModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add Patient
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={showBookAppointmentModal}
        onClose={() => setShowBookAppointmentModal(false)}
        title="Book Appointment"
      >
        <form onSubmit={handleBookAppointment} className="space-y-4">
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
            <label className="block text-sm font-medium text-gray-700">Department</label>
            <select
              value={newAppointment.department}
              onChange={(e) => setNewAppointment({...newAppointment, department: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option>General Medicine</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
              <option>Neurology</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Reason for Visit</label>
            <textarea
              required
              value={newAppointment.reason}
              onChange={(e) => setNewAppointment({...newAppointment, reason: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              rows={3}
            />
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={() => setShowBookAppointmentModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </Modal>

      {/* Patients List */}
      <div className="grid grid-cols-1 gap-4">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {patient.name}
                    </h3>
                    <span className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${patient.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'}
                    `}>
                      {patient.status}
                    </span>
                  </div>

                  <div className="mt-2 grid grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {patient.age} years • {patient.gender}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Phone className="h-4 w-4 mr-1" />
                      {patient.contact}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {patient.address}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      Last Visit: {patient.lastVisit}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-900">Medical History:</span>
                    </div>
                    <div className="flex gap-2">
                      {patient.medicalHistory.map((condition, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-900">Recent Diagnosis:</span>
                      <span className="text-sm text-gray-600">{patient.recentDiagnosis}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
                  View History
                </button>
                <button 
                  onClick={() => {
                    setSelectedPatient(patient);
                    setShowBookAppointmentModal(true);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Book Appointment
                </button>
              </div>
            </div>

            {patient.upcomingAppointment && (
              <div className="mt-4 bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-blue-800">Upcoming Appointment</h4>
                  <p className="mt-1 text-sm text-blue-700">
                    Scheduled for {patient.upcomingAppointment}
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

export default Patients;