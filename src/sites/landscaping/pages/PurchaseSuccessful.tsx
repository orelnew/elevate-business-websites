import { CheckCircle, Mail, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PurchaseSuccessful = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto text-center shadow-xl border-blue-200">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-700 mb-2">
            Payment Successful!
          </CardTitle>
          <CardDescription className="text-gray-600">
            Thank you for choosing our website services
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 font-medium mb-2">
              Thank you for your payment. Your transaction has been completed, and a receipt for your purchase has been emailed to you.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-blue-600">
            <Mail className="w-5 h-5" />
            <span className="text-sm">Payment confirmation sent to your email</span>
          </div>

          <div className="flex items-center justify-center space-x-2 text-blue-600">
            <Receipt className="w-5 h-5" />
            <span className="text-sm">Transaction details included in receipt</span>
          </div>

          <div className="pt-4 space-y-3">
            <Button 
              asChild 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              <Link to="/">Return to Home</Link>
            </Button>
            
            <p className="text-xs text-gray-500">
              Need help? Contact our support team
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PurchaseSuccessful;