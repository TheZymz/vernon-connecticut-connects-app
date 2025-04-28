
import React from 'react';
import { School, Phone, MapPin, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const schools = [
  {
    name: 'Rockville High School',
    address: '70 Loveland Hill Road, Vernon, CT 06066',
    phone: '(860) 870-6050',
    email: 'info@rockvillehs.org',
    grades: '9-12',
    website: 'https://www.vernonpublicschools.org/rockville-high-school'
  },
  {
    name: 'Vernon Center Middle School',
    address: '777 Hartford Turnpike, Vernon, CT 06066',
    phone: '(860) 870-6070',
    email: 'info@vcms.org',
    grades: '6-8',
    website: 'https://www.vernonpublicschools.org/vernon-center-middle-school'
  },
  {
    name: 'Skinner Road School',
    address: '90 Skinner Road, Vernon, CT 06066',
    phone: '(860) 870-6180',
    email: 'info@skinnerroad.org',
    grades: 'PK-5',
    website: 'https://www.vernonpublicschools.org/skinner-road-school'
  },
  {
    name: 'Maple Street School',
    address: '20 Maple Street, Vernon, CT 06066',
    phone: '(860) 870-6175',
    email: 'info@maplestreet.org',
    grades: 'PK-5',
    website: 'https://www.vernonpublicschools.org/maple-street-school'
  },
  {
    name: 'Lake Street School',
    address: '201 Lake Street, Vernon, CT 06066',
    phone: '(860) 870-6085',
    email: 'info@lakestreet.org',
    grades: 'PK-5',
    website: 'https://www.vernonpublicschools.org/lake-street-school'
  },
  {
    name: 'Northeast School',
    address: '69 East Street, Vernon, CT 06066',
    phone: '(860) 870-6080',
    email: 'info@northeast.org',
    grades: 'PK-5',
    website: 'https://www.vernonpublicschools.org/northeast-school'
  }
];

const SchoolsList = () => {
  return (
    <div className="space-y-6">
      <div className="bg-vernon-blue/10 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <School className="text-vernon-blue" size={24} />
          <h2 className="text-lg font-semibold text-vernon-blue">Vernon Public Schools</h2>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          The Vernon Public School District is committed to providing a superior education for all students.
        </p>
        <a 
          href="https://www.vernonpublicschools.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-vernon-blue hover:underline text-sm font-medium mt-2 inline-block"
        >
          Visit Vernon Public Schools Website
        </a>
      </div>

      <div className="space-y-4">
        {schools.map((school) => (
          <Card key={school.name} className="overflow-hidden">
            <CardHeader className="bg-vernon-blue/5 pb-2">
              <CardTitle className="text-lg font-medium">{school.name}</CardTitle>
              <div className="text-xs text-gray-500">Grades {school.grades}</div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-vernon-blue mt-0.5" />
                  <span className="text-sm">{school.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-vernon-blue" />
                  <a href={`tel:${school.phone}`} className="text-sm hover:underline">{school.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-vernon-blue" />
                  <a href={`mailto:${school.email}`} className="text-sm hover:underline">{school.email}</a>
                </div>
              </div>
              <Separator className="my-3" />
              <a 
                href={school.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-vernon-blue hover:underline text-sm inline-block"
              >
                Visit School Website
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SchoolsList;
