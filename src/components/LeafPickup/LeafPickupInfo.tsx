import React from 'react';
import { Leaf, Calendar, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const LeafPickupInfo = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="space-y-6">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Leaf Collection Season</AlertTitle>
        <AlertDescription>
          The {currentYear} leaf collection program typically runs from mid-October through early December, weather permitting.
        </AlertDescription>
      </Alert>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-vernon-green" />
            <span>Collection Schedule</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Leaf collection is divided into zones. Each zone will have multiple collections during the season. Please have leaves ready by the scheduled dates.
          </p>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Zone</TableHead>
                <TableHead>Areas</TableHead>
                <TableHead>Collection Dates</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Zone 1</TableCell>
                <TableCell>Rockville, Downtown</TableCell>
                <TableCell>Oct 15-18, Nov 12-15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Zone 2</TableCell>
                <TableCell>Vernon Center, Bolton Lake</TableCell>
                <TableCell>Oct 22-25, Nov 19-22</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Zone 3</TableCell>
                <TableCell>Talcottville, Box Mountain</TableCell>
                <TableCell>Oct 29-Nov 1, Nov 26-29</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Zone 4</TableCell>
                <TableCell>Lake Street, Phoenix Street</TableCell>
                <TableCell>Nov 5-8, Dec 3-6</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <p className="text-xs text-gray-500 mt-4">
            *Dates are subject to change due to weather conditions. Check the town website for updates.
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-vernon-green" />
            <span>Guidelines</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Proper Leaf Placement</h3>
            <p className="text-sm text-gray-600">
              Place leaves at the edge of your lawn, NOT on the street. Leaves should be no more than 3 feet from the curb and should not block storm drains.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Acceptable Materials</h3>
            <p className="text-sm text-gray-600">
              Only leaves will be collected. Do NOT mix sticks, rocks, garbage, or other debris with leaves.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Drop-Off Location</h3>
            <p className="text-sm text-gray-600">
              Residents may also bring leaves to the Transfer Station at 12 Hockanum Boulevard during regular hours.
            </p>
          </div>
          
          <Alert variant="default" className="bg-amber-50 border-amber-200">
            <Info className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-700">Important Reminder</AlertTitle>
            <AlertDescription className="text-amber-700">
              Burning leaves is prohibited in Vernon per local ordinance.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
      
      <div className="bg-vernon-green/10 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <Info className="text-vernon-green" size={24} />
          <h2 className="text-lg font-semibold text-vernon-green">Contact Information</h2>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          For questions about leaf collection, please contact:
        </p>
        <div className="mt-2 text-sm">
          <div><strong>Department:</strong> Vernon Public Works</div>
          <div><strong>Phone:</strong> (860) 870-3500</div>
          <div><strong>Email:</strong> publicworks@vernon-ct.gov</div>
        </div>
      </div>
    </div>
  );
};

export default LeafPickupInfo;
