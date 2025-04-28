
import React from 'react';
import { Phone, MapPin, Mail, Clock, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Navbar from '../components/Layout/Navbar';
import BottomNav from '../components/Layout/BottomNav';

const ContactPage = () => {
  const departments = [
    {
      name: 'Town Hall',
      phone: '(860) 870-3500',
      email: 'info@vernon-ct.gov',
      hours: 'Mon-Wed 8:30-4:30, Thu 8:30-7:00, Fri 8:30-1:00'
    },
    {
      name: 'Police Department (Non-Emergency)',
      phone: '(860) 872-9126',
      email: 'police@vernon-ct.gov',
      hours: '24 hours / 7 days'
    },
    {
      name: 'Fire Department (Non-Emergency)',
      phone: '(860) 871-7468',
      email: 'fire@vernon-ct.gov',
      hours: 'Mon-Fri 8:30-4:30'
    },
    {
      name: 'Public Works',
      phone: '(860) 870-3500',
      email: 'publicworks@vernon-ct.gov',
      hours: 'Mon-Fri 7:00-3:30'
    },
    {
      name: 'Parks & Recreation',
      phone: '(860) 870-3520',
      email: 'parksandrec@vernon-ct.gov',
      hours: 'Mon-Thu 8:30-4:30, Fri 8:30-1:00'
    },
    {
      name: 'Tax Collector',
      phone: '(860) 870-3660',
      email: 'taxcollector@vernon-ct.gov',
      hours: 'Mon-Wed 8:30-4:30, Thu 8:30-7:00, Fri 8:30-1:00'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="page-container">
        <h1 className="section-title">Contact Information</h1>
        
        <Card className="mb-6">
          <CardHeader className="bg-vernon-blue text-white">
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              <span>Emergency Contact</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-center py-2">
              <p className="text-xl font-bold text-red-600 mb-1">For Emergencies, Call 911</p>
              <p className="text-sm text-gray-600">For any life-threatening situation or emergency requiring immediate assistance</p>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          <h2 className="subsection-title">Town Departments</h2>
          
          {departments.map((dept) => (
            <Card key={dept.name} className="overflow-hidden">
              <CardHeader className="bg-vernon-blue/5 pb-2">
                <CardTitle className="text-lg font-medium">{dept.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-vernon-blue" />
                  <a href={`tel:${dept.phone}`} className="text-sm hover:underline">{dept.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-vernon-blue" />
                  <a href={`mailto:${dept.email}`} className="text-sm hover:underline">{dept.email}</a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock size={16} className="text-vernon-blue mt-0.5" />
                  <span className="text-sm">{dept.hours}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Separator className="my-6" />
        
        <div className="space-y-4">
          <h2 className="subsection-title">Town Hall Location</h2>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="pt-1">
                  <MapPin size={20} className="text-vernon-blue" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Vernon Town Hall</h3>
                  <p className="text-sm">14 Park Place<br />Vernon, CT 06066</p>
                  <a 
                    href="https://maps.google.com/?q=14+Park+Place,+Vernon,+CT+06066" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-vernon-blue hover:underline text-sm mt-2 inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.6574730290927!2d-72.45496722306425!3d41.86669356577629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6f0b0fe73def3%3A0x4aee87df19ed8e9e!2s14%20Park%20Pl%2C%20Vernon%2C%20CT%2006066!5e0!3m2!1sen!2sus!4v1713404585842!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
};

export default ContactPage;
