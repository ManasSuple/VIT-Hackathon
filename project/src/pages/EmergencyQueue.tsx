import React, { useState } from 'react';
import { AlertCircle, Phone, MapPin, Clock } from 'lucide-react';
import toast from 'react-hot-toast';
import Modal from '../components/Modal';

function EmergencyQueue() {
  const [showNewEmergencyModal, setShowNewEmergencyModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedEmergency, setSelectedEmergency] = useState<any>(null);
  const [newEmergency, setNewEmergency] = useState({
    name: '',
    age: '',
    condition: '',
    location: '',
    phone: ''
  });

  const emergencyCases = [
    {
      id: 'E001',
      name: 'James Wilson',
      age: 45,
      condition: 'Severe Chest Pain',
      priority: 'Critical',
      arrivalTime: '09:30 AM',
      location: '2.5 km away',
      status: 'Ambulance Dispatched',
      phone: '+1 (555) 0123'
    },
    {
      id: 'E002',
      name: 'Emily Brown',
      age: 28,
      condition: 'Acute Appendicitis',
      priority: 'High',
      arrivalTime: '09:45 AM',
      location: '1.8 km away',
      status: 'Waiting for Ambulance',
      phone: '+1 (555) 0124'
    }
  ];

  const handleNewEmergency = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Emergency case added successfully');
    setShowNewEmergencyModal(false);
    setNewEmergency({
      name: '',
      age: '',
      condition: '',
      location: '',
      phone: ''
    });
  };

  const handleConfirmAmbulance = () => {
    toast.success('Ambulance dispatched successfully');
    setShowConfirmModal(false);
    setSelectedEmergency(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Emergency Queue</h1>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
          New Emergency Case
        </button>
      </div>

      <Modal
        isOpen={showNewEmergencyModal}
        onClose={() => setShowNewEmergencyModal(false)}
        title="New Emergency Case"
      >
        <form onSubmit={handleNewEmergency} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Patient Name</label>
            <input
              type="text"
              required
              value={newEmergency.name}
              onChange={(e) => setNewEmergency({...newEmergency, name: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              required
              value={newEmergency.age}
              onChange={(e) => setNewEmergency({...newEmergency, age: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Emergency Condition</label>
            <textarea
              required
              value={newEmergency.condition}
              onChange={(e) => setNewEmergency({...newEmergency, condition: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Location</label>
            <input
              type="text"
              required
              value={newEmergency.location}
              onChange={(e) => setNewEmergency({...newEmergency, location: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              placeholder="Address or location details"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="tel"
              required
              value={newEmergency.phone}
              onChange={(e) => setNewEmergency({...newEmergency, phone: e.target.value})}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={() => setShowNewEmergencyModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Add Emergency Case
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title="Confirm Ambulance Dispatch"
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            Are you sure you want to dispatch an ambulance for this emergency case?
          </p>
          {selectedEmergency && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-900">{selectedEmergency.name}</p>
              <p className="text-gray-600 mt-1">{selectedEmergency.condition}</p>
              <p className="text-gray-600 mt-1">{selectedEmergency.location}</p>
            </div>
          )}
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={() => setShowConfirmModal(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmAmbulance}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Confirm Dispatch
            </button>
          </div>
        </div>
      </Modal>

      <div className="grid grid-cols-1 gap-4">
        {emergencyCases.map((emergency) => (
          <div 
            key={emergency.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className={`
                  h-12 w-12 rounded-full flex items-center justify-center
                  ${emergency.priority === 'Critical' ? 'bg-red-100' : 'bg-orange-100'}
                `}>
                  <AlertCircle className={`
                    h-6 w-6
                    ${emergency.priority === 'Critical' ? 'text-red-600' : 'text-orange-600'}
                  `} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {emergency.name} ({emergency.age})
                  </h3>
                  <p className="text-gray-600">{emergency.condition}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <span className={`
                      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${emergency.priority === 'Critical' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-orange-100 text-orange-800'}
                    `}>
                      {emergency.priority}
                    </span>
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {emergency.arrivalTime}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {emergency.location}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Phone className="h-4 w-4 mr-1" />
                      {emergency.phone}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50">
                  View Details
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Confirm Ambulance
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-900">Status Updates</h4>
                <div className="mt-2 space-y-2">
                  <p className="text-sm text-gray-600">
                    • {emergency.status} - {emergency.arrivalTime}
                  </p>
                  <p className="text-sm text-gray-600">
                    • Emergency call received - {emergency.arrivalTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmergencyQueue;