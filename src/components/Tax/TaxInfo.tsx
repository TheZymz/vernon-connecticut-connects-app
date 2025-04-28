
import React from 'react';
import { Tax, Calendar, Info, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const TaxInfo = () => {
  return (
    <div className="space-y-6">
      <Alert variant="default" className="bg-vernon-blue text-white border-none">
        <Info className="h-5 w-5" />
        <AlertTitle>Tax Payment Due Dates</AlertTitle>
        <AlertDescription>
          July 1 and January 1 are the due dates for Vernon tax payments, with a 30-day grace period.
        </AlertDescription>
      </Alert>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tax className="h-5 w-5 text-vernon-blue" />
            <span>Property Tax Information</span>
          </CardTitle>
          <CardDescription>
            Information about property tax collection in Vernon
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-1">Tax Billing Schedule</h3>
            <p className="text-sm text-gray-600">
              Real Estate and Personal Property tax bills are mailed annually at the end of June. Motor Vehicle tax bills are mailed once a year.
            </p>
          </div>
          
          <div className="bg-gray-50 p-3 rounded-md">
            <h3 className="font-medium mb-1">Payment Due Dates</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex flex-col">
                <span className="font-medium text-vernon-blue">First Installment</span>
                <span>July 1 (grace period to August 1)</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-vernon-blue">Second Installment</span>
                <span>January 1 (grace period to February 1)</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-1">Interest on Late Payments</h3>
            <p className="text-sm text-gray-600">
              Interest is charged at the rate of 1.5% per month from the due date. Minimum interest charge is $2.00.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="font-medium mb-2">Payment Options</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-vernon-blue/10 p-2 rounded-full">
                  <span className="text-vernon-blue font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium">Online Payment</p>
                  <p className="text-sm text-gray-600">Pay securely online through the town's payment portal.</p>
                  <Button variant="link" className="p-0 h-auto text-vernon-blue">
                    Pay Online <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-vernon-blue/10 p-2 rounded-full">
                  <span className="text-vernon-blue font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-medium">Mail</p>
                  <p className="text-sm text-gray-600">
                    Mail check or money order to:<br />
                    Town of Vernon Tax Collector<br />
                    14 Park Place<br />
                    Vernon, CT 06066
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-vernon-blue/10 p-2 rounded-full">
                  <span className="text-vernon-blue font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-medium">In Person</p>
                  <p className="text-sm text-gray-600">
                    Pay at the Tax Collector's Office at Town Hall during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-vernon-blue" />
            <span>Tax Calendar {new Date().getFullYear()}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-medium">July 1</p>
                <p className="text-sm text-gray-500">First Installment Due</p>
              </div>
              <div className="text-sm bg-vernon-blue/10 px-2 py-1 rounded text-vernon-blue">
                Real Estate, Personal Property, Motor Vehicle
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-medium">August 1</p>
                <p className="text-sm text-gray-500">End of Grace Period</p>
              </div>
              <div className="text-sm bg-red-100 px-2 py-1 rounded text-red-600">
                Interest begins to accrue
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="font-medium">January 1</p>
                <p className="text-sm text-gray-500">Second Installment Due</p>
              </div>
              <div className="text-sm bg-vernon-blue/10 px-2 py-1 rounded text-vernon-blue">
                Real Estate, Personal Property
              </div>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <div>
                <p className="font-medium">February 1</p>
                <p className="text-sm text-gray-500">End of Grace Period</p>
              </div>
              <div className="text-sm bg-red-100 px-2 py-1 rounded text-red-600">
                Interest begins to accrue
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-3">
          <Info className="text-vernon-blue" size={24} />
          <h2 className="text-lg font-semibold text-vernon-blue">Contact the Tax Office</h2>
        </div>
        <div className="mt-2 space-y-2 text-sm">
          <div>
            <strong>Address:</strong> 14 Park Place, Vernon, CT 06066
          </div>
          <div>
            <strong>Phone:</strong> (860) 870-3660
          </div>
          <div>
            <strong>Hours:</strong> Monday-Wednesday 8:30am-4:30pm, Thursday 8:30am-7:00pm, Friday 8:30am-1:00pm
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxInfo;
