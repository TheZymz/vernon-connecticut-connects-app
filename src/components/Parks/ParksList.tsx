
import React from 'react';
import { MapPin, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const parks = [
  {
    name: 'Henry Park',
    address: '120 South Street, Vernon, CT',
    features: ['Playgrounds', 'Ball Fields', 'Swimming Pool', 'Picnic Areas', 'Walking Trails'],
    description: 'One of Vernon\'s largest parks featuring sports fields, a pool, and the Fox Hill Tower with panoramic views.'
  },
  {
    name: 'Valley Falls Park',
    address: 'Valley Falls Road, Vernon, CT',
    features: ['Beach', 'Hiking Trails', 'Picnic Areas', 'Fishing', 'Historic Buildings'],
    description: 'Scenic park with a beach on Valley Falls Pond, historic buildings, and miles of hiking trails.'
  },
  {
    name: 'Newhoca Park',
    address: 'Grier Road, Vernon, CT',
    features: ['Beach', 'Picnic Areas', 'Boating', 'Fishing', 'Volleyball Courts'],
    description: 'Waterfront park featuring a beach on Bolton Lake, picnic facilities, and boat launch.'
  },
  {
    name: 'Dart Hill Park',
    address: 'Dart Hill Road, Vernon, CT',
    features: ['Ball Fields', 'Playground', 'Picnic Areas', 'Walking Paths'],
    description: 'Community park with soccer fields, baseball diamonds, and playground equipment.'
  },
  {
    name: 'Rails to Trails',
    address: 'Multiple Access Points in Vernon, CT',
    features: ['Walking/Biking Path', 'Historical Markers', 'Bird Watching', 'Picnic Areas'],
    description: 'Former railroad bed converted to a multi-use trail connecting to the larger regional trail system.'
  },
  {
    name: 'Community Gardens',
    address: 'West Street, Vernon, CT',
    features: ['Garden Plots', 'Water Access', 'Community Space'],
    description: 'Garden plots available for residents to grow vegetables, flowers, and herbs.'
  }
];

const recreational = [
  {
    name: 'Vernon Community Pool',
    address: '375 Hartford Turnpike, Vernon, CT',
    features: ['Indoor Pool', 'Swimming Lessons', 'Water Aerobics', 'Open Swim'],
    description: 'Year-round indoor aquatic facility offering swimming lessons and recreational swimming.'
  },
  {
    name: 'Center 375',
    address: '375 Hartford Turnpike, Vernon, CT',
    features: ['Indoor Courts', 'Fitness Classes', 'Community Events', 'Senior Activities'],
    description: 'Multi-purpose recreation center with various programs and activities for all ages.'
  },
  {
    name: 'Vernon Skate Park',
    address: 'O\'Connell Road, Vernon, CT',
    features: ['Ramps', 'Rails', 'Half-pipe', 'Open Skating'],
    description: 'Outdoor skate park for skateboarders and inline skaters of all skill levels.'
  }
];

const ParksList = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="parks">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="parks">Parks</TabsTrigger>
          <TabsTrigger value="facilities">Recreational Facilities</TabsTrigger>
        </TabsList>
        
        <TabsContent value="parks" className="space-y-4 mt-4">
          {parks.map((park) => (
            <Card key={park.name}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-vernon-green" />
                  {park.name}
                </CardTitle>
                <CardDescription>{park.address}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{park.description}</p>
                <div className="flex flex-wrap gap-2">
                  {park.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="bg-vernon-green/10 text-vernon-green border-vernon-green/20">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="facilities" className="space-y-4 mt-4">
          {recreational.map((facility) => (
            <Card key={facility.name}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5 text-vernon-blue" />
                  {facility.name}
                </CardTitle>
                <CardDescription>{facility.address}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{facility.description}</p>
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="bg-vernon-blue/10 text-vernon-blue border-vernon-blue/20">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-vernon-blue" />
            <span>Parks & Recreation Department</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <h3 className="font-medium mb-1">Contact Information</h3>
            <div className="text-sm">
              <div><strong>Address:</strong> 375 Hartford Turnpike, Vernon, CT 06066</div>
              <div><strong>Phone:</strong> (860) 870-3520</div>
              <div><strong>Email:</strong> parksandrec@vernon-ct.gov</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Office Hours</h3>
            <div className="text-sm">
              <div>Monday - Thursday: 8:30 AM - 4:30 PM</div>
              <div>Friday: 8:30 AM - 1:00 PM</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Program Registration</h3>
            <p className="text-sm text-gray-600">
              Register for recreational programs, sports leagues, and special events online or at the Parks & Recreation office.
            </p>
            <a 
              href="https://www.vernon-ct.gov/departments/parks-recreation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-vernon-blue hover:underline text-sm mt-1 inline-block"
            >
              Visit the Parks & Recreation Website
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ParksList;
