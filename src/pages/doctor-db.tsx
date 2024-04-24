import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Button, Paper, TextField, MenuItem } from '@material-ui/core';
import axios from 'axios';
import Header1 from '@/components/NavBard';
interface Appointment {
  id: number;
  patientName: string;
  appointmentTime: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface Message {
  id: number;
  senderName: string;
  recipientName: string;
  message: string;
}

interface Doctor {
  id: number;
  name: string;
  specialization: string;
}

const DoctorDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      patientName: 'Sridhar Reddy',
      appointmentTime: '2024-04-23 10:00 ',
      reason: 'Checkup',
      status: 'pending'
    },
    {
      id: 2,
      patientName: 'Virat Kohli',
      appointmentTime: '2024-04-23 14:00 ',
      reason: 'Follow-up',
      status: 'pending'
    }
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      senderName: 'Patient Sridhar',
      recipientName: 'Sridhar Reddy',
      message: 'Doctor, please give medications.'
    },

  ]);

  const [doctor] = useState<Doctor>({
    id: 1,
    name: 'Dr. Baali',
    specialization: 'Cardiologist'
  });


  const [responseMessage, setResponseMessage] = useState('');
  const [recipient, setRecipient] = useState<string>(''); // To store the selected recipient

  const handleApproveAppointment = (appointmentId: number) => {
    setAppointments(prevAppointments =>
      prevAppointments.map(appointment =>
        appointment.id === appointmentId ? { ...appointment, status: 'approved' } : appointment
      )
    );
  };

  const handleSendMessage = async (message: string) => {
    if (message.trim() !== '') {
      const newMessage: Message = {
        id: messages.length + 1,
        senderName: doctor.name,
        recipientName: recipient,
        message: message.trim()
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setResponseMessage('');
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('/api/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <main>
      <Header1 />
      <div>
        <Typography variant="h4" align="center">Welcome, Dr. {doctor.name}</Typography>
        <Typography variant="h5" align="center">Upcoming Appointments</Typography>
        <List style={{justifyContent:'center', width: '80%', marginBottom: '1rem' }}>
          {appointments.map(appointment => (
            <ListItem key={appointment.id} alignItems="center" style={{ textAlign: 'center' }}>
              <ListItemText 
                primary={`Patient: ${appointment.patientName}`}
                secondary={`Time: ${appointment.appointmentTime}`}
                style={{ textAlign: 'center' }}
              />
              <div style={{ marginTop: '0.5rem' }}></div>
              {appointment.status === 'pending' && (
                <>
                  <Button variant="contained"
                    color="primary"
                    onClick={() => handleApproveAppointment(appointment.id)}
                    style={{marginLeft:'center'}}
                  >
                    Approve
                  </Button>
                </>
              )}
              {appointment.status === 'approved' && (
                <Typography variant="body2" color="primary">Approved</Typography>
              )}

            </ListItem>
          ))}
        </List>

        <main style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <Typography variant="h5" align='center'>Patient Messages</Typography>
            <Paper style={{
              padding: '1rem', marginTop: '1rem', width: '500px'
              , boxShadow: '0px 6px 9px rgba(0, 0, 0, 0.1)'
              , borderRadius: '12px'
            }}>
              {messages.map(message => (
                <div key={message.id}>
                  <Typography variant="subtitle1">From: {message.senderName}</Typography>
                  <Typography variant="subtitle1">To: {message.recipientName}</Typography>
                  <Typography variant="body1">{message.message}</Typography>
                  <hr style={{ margin: '0.5rem 0' }} />
                </div>
              ))}
            </Paper>
          </div>
        </main>

        <Typography variant="h5" align='center' style={{ marginTop: '2rem' }}>Send Message to Patient</Typography>
        <main style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <div style={{ display: 'flex',borderRadius: '20px', flexDirection: 'column', alignItems: 'center', marginBottom: '1rem' }}> {/* Center align and stack vertically */}
              <div style={{ marginBottom: '1rem' }}> {/* Margin between fields */}
                <TextField
                  label="Recipient"
                  variant="outlined"
                  select
                  fullWidth
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value as string)}
                  style={{ width: '300px',borderRadius: '20px', boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.1)' }}
                >
                  {appointments.map(appointment => (
                    <MenuItem key={appointment.id} value={appointment.patientName}>{appointment.patientName}</MenuItem>
                  ))}
                </TextField>
              </div>
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                value={responseMessage}
                onChange={(e) => setResponseMessage(e.target.value)}
                style={{ width: '300px',borderRadius: '20px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}> {/* Center align the button */}
              <Button variant="contained" color="primary" 
                onClick={() => handleSendMessage(responseMessage)}
                style={{ borderRadius: '20px',
                width: '100px', height: '40px', fontSize: '1.0rem',
                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)' }}
                >Send</Button>
            </div>
          </div>
        </main>


      </div>
    </main>
  );
};

export default DoctorDashboard;
