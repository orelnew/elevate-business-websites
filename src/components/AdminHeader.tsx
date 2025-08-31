import { useAuth } from '../hooks/useAuth';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { User, LogOut, Shield, Crown } from 'lucide-react';

const AdminHeader: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const displayName = user.user_metadata?.full_name || user.email;

  return (
    <Card className="mb-6 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <Crown className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-lg text-blue-900">Admin Dashboard</CardTitle>
              <p className="text-sm text-blue-700">Welcome back, {displayName}</p>
            </div>
          </div>
          <Button
            onClick={logout}
            variant="outline"
            size="sm"
            className="text-red-600 hover:text-red-700 hover:border-red-300 bg-white"
          >
            <LogOut className="h-4 w-4 mr-1" />
            Sign Out
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-2 text-sm">
          <Shield className="h-4 w-4 text-green-600" />
          <span className="text-green-700 font-medium">Administrator Access</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-600">{user.email}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminHeader;