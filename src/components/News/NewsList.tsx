
import React from 'react';
import { Calendar, Info } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const news = [
  {
    title: 'Winter Parking Ban in Effect',
    date: 'December 1, 2024',
    category: 'Public Safety',
    description: 'No overnight parking on town streets from December 1st through April 1st to allow for snow removal operations.'
  },
  {
    title: 'Town Hall Holiday Schedule',
    date: 'November 15, 2024',
    category: 'Town Services',
    description: 'Town Hall will be closed for upcoming holidays. See the full schedule for details.'
  },
  {
    title: 'New Recreation Programs Added',
    date: 'November 10, 2024',
    category: 'Parks & Recreation',
    description: 'New winter recreation programs announced. Registration opens November 15th.'
  },
  {
    title: 'Road Repaving Project Completed',
    date: 'October 25, 2024',
    category: 'Public Works',
    description: 'The summer road repaving project has been completed ahead of schedule and under budget.'
  },
  {
    title: 'Fall Festival a Success',
    date: 'October 15, 2024',
    category: 'Community Events',
    description: 'Thank you to all who attended our annual Fall Festival! Over 2,000 residents participated.'
  }
];

const events = [
  {
    title: 'Town Council Meeting',
    date: 'December 7, 2024',
    time: '7:30 PM',
    location: 'Town Hall Council Chambers',
    category: 'Government'
  },
  {
    title: 'Holiday Tree Lighting',
    date: 'December 3, 2024',
    time: '6:00 PM',
    location: 'Central Park',
    category: 'Community Events'
  },
  {
    title: 'Winter Farmers Market',
    date: 'December 10, 2024',
    time: '10:00 AM - 1:00 PM',
    location: 'Center 375',
    category: 'Community Events'
  },
  {
    title: 'Planning & Zoning Commission',
    date: 'December 15, 2024',
    time: '7:00 PM',
    location: 'Town Hall Council Chambers',
    category: 'Government'
  },
  {
    title: 'Senior Center Holiday Luncheon',
    date: 'December 17, 2024',
    time: '12:00 PM',
    location: 'Vernon Senior Center',
    category: 'Senior Activities'
  }
];

const getCategoryColor = (category: string) => {
  const categories: { [key: string]: string } = {
    'Public Safety': 'bg-red-100 text-red-700 border-red-200',
    'Town Services': 'bg-blue-100 text-blue-700 border-blue-200',
    'Parks & Recreation': 'bg-green-100 text-green-700 border-green-200',
    'Public Works': 'bg-amber-100 text-amber-700 border-amber-200',
    'Community Events': 'bg-purple-100 text-purple-700 border-purple-200',
    'Government': 'bg-gray-100 text-gray-700 border-gray-200',
    'Senior Activities': 'bg-teal-100 text-teal-700 border-teal-200',
  };
  
  return categories[category] || 'bg-gray-100 text-gray-700 border-gray-200';
};

const NewsList = () => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="news">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="news" className="space-y-4 mt-4">
          {news.map((item) => (
            <Card key={item.title}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <Badge variant="outline" className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
              <CardFooter className="text-xs text-gray-500 pt-0">
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {item.date}
                </div>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="events" className="space-y-4 mt-4">
          {events.map((event) => (
            <Card key={event.title}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <Badge variant="outline" className={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-vernon-blue" />
                  <div>
                    <div className="font-medium">{event.date}</div>
                    <div className="text-sm text-gray-600">{event.time}</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium">Location:</div>
                  <div className="text-sm text-gray-600">{event.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
      
      <div className="bg-vernon-blue/10 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <Info className="text-vernon-blue" size={24} />
          <h2 className="text-lg font-semibold text-vernon-blue">Stay Informed</h2>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          For the latest news and events in Vernon, follow the town on social media and sign up for email notifications.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <a 
            href="https://www.facebook.com/VernonCT/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm bg-blue-600 text-white py-1 px-3 rounded-full hover:bg-blue-700"
          >
            Facebook
          </a>
          <a 
            href="https://twitter.com/VernonCT" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-600"
          >
            Twitter
          </a>
          <a 
            href="https://www.vernon-ct.gov/residents/notifications" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm bg-vernon-blue text-white py-1 px-3 rounded-full hover:bg-blue-800"
          >
            Email Alerts
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
