import { useAuth } from '../hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Loader2, Shield, LogIn, AlertCircle } from 'lucide-react';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { loading, isAuthenticated, isAdmin, login } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
            <p className="text-gray-600">Loading...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl text-gray-900">Admin Access Required</CardTitle>
            <p className="text-gray-600 mt-2">
              This is a restricted admin area. Please sign in to continue.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={login}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              size="lg"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Admin Sign In
            </Button>
            
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-900">Admin Only</span>
              </div>
              <p className="text-xs text-amber-700">
                This area is restricted to authorized administrators only. 
                Unauthorized access attempts are logged.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // User is authenticated but not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full w-fit">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl text-gray-900">Access Denied</CardTitle>
            <p className="text-gray-600 mt-2">
              You don't have admin privileges to access this area.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200 text-center">
              <p className="text-sm text-red-700 mb-3">
                This area is restricted to authorized administrators only.
              </p>
              <Button 
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="text-red-600 border-red-300 hover:bg-red-50"
              >
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;