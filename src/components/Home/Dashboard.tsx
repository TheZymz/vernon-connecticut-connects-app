
import React from 'react';
import { Link } from 'react-router-dom';
import { School, Leaf, DollarSign, MapPin, Calendar, Phone, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const featureItems = [
  {
    title: 'Schools',
    path: '/schools',
    icon: School,
    color: 'bg-blue-100 text-vernon-blue',
    description: 'School information and contacts'
  },
  {
    title: 'Leaf Pickup',
    path: '/leaf-pickup',
    icon: Leaf,
    color: 'bg-green-100 text-vernon-green',
    description: 'Schedules and guidelines'
  },
  {
    title: 'Tax Information',
    path: '/tax',
    icon: DollarSign,
    color: 'bg-red-100 text-red-600',
    description: 'Payment and assessments'
  },
  {
    title: 'Parks & Recreation',
    path: '/parks',
    icon: MapPin,
    color: 'bg-emerald-100 text-emerald-600',
    description: 'Parks, trails and facilities'
  },
  {
    title: 'News & Events',
    path: '/news',
    icon: Calendar,
    color: 'bg-amber-100 text-amber-600',
    description: 'Latest town news'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: Phone,
    color: 'bg-purple-100 text-purple-600',
    description: 'Town hall and emergency contacts'
  }
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="relative rounded-xl overflow-hidden h-48 mb-6">
        <div className="absolute inset-0 bg-vernon-blue/70 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Vernon Connecticut</h1>
            <p className="text-white/90">Your town, in your pocket</p>
          </div>
        </div>
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-80" 
          style={{ 
            backgroundImage: `url('https://www.vernon-ct.gov/home/showpublishedimage/412/637376970815170000')`,
            filter: 'saturate(0.7)'
          }}
        ></div>
      </div>

      <section>
        <h2 className="section-title">Town Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {featureItems.map((item) => (
            <Link key={item.title} to={item.path}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className={`${item.color} p-3 rounded-full mb-3`}>
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Recent Announcements</h2>
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex gap-4 items-start">
              <div className="bg-vernon-blue/10 p-2 rounded-full">
                <Info size={24} className="text-vernon-blue" />
              </div>
              <div>
                <h3 className="font-medium">Winter Parking Regulations</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Winter parking ban in effect. No overnight parking on town streets from December 1st through April 1st.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex gap-4 items-start">
              <div className="bg-vernon-green/10 p-2 rounded-full">
                <Calendar size={24} className="text-vernon-green" />
              </div>
              <div>
                <h3 className="font-medium">Town Hall Holiday Schedule</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Town Hall will be closed on upcoming holidays. See the full schedule for details.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="text-center mt-4">
          <Link to="/news" className="text-vernon-blue hover:underline text-sm font-medium">
            View All Announcements
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
