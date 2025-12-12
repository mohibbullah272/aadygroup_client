import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar
} from 'recharts';
import { 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 

  CheckCircle,
  Clock,
  Activity
} from 'lucide-react';

// Performance data over time
const performanceData = [
  { time: '00:00', speed: 85, performance: 92, safety: 96, experience: 88 },
  { time: '04:00', speed: 87, performance: 90, safety: 95, experience: 89 },
  { time: '08:00', speed: 82, performance: 88, safety: 97, experience: 85 },
  { time: '12:00', speed: 79, performance: 86, safety: 94, experience: 83 },
  { time: '16:00', speed: 84, performance: 91, safety: 96, experience: 87 },
  { time: '20:00', speed: 88, performance: 93, safety: 98, experience: 90 },
];

// Current health metrics
const healthMetrics = [
  { name: 'Safety', value: 96, color: '#C8102E' },
  { name: 'Speed', value: 85, color: '#F9D342' },
  { name: 'Performance', value: 91, color: '#1A1A1A' },
  { name: 'Client Experience', value: 88, color: '#666666' },
];

// Security metrics
const securityData = [
  { category: 'SSL Certificate', status: 100, issues: 0 },
  { category: 'Malware Scan', status: 100, issues: 0 },
  { category: 'Blacklist Check', status: 100, issues: 0 },
  { category: 'Vulnerability Scan', status: 98, issues: 1 },
  { category: 'Content Security', status: 94, issues: 2 },
];

// Traffic and performance metrics
const trafficData = [
  { month: 'Jan', visitors: 12500, pageViews: 45000, bounceRate: 35 },
  { month: 'Feb', visitors: 13200, pageViews: 48000, bounceRate: 32 },
  { month: 'Mar', visitors: 14100, pageViews: 52000, bounceRate: 30 },
  { month: 'Apr', visitors: 15300, pageViews: 58000, bounceRate: 28 },
  { month: 'May', visitors: 16800, pageViews: 62000, bounceRate: 26 },
  { month: 'Jun', visitors: 18200, pageViews: 68000, bounceRate: 24 },
];

const MetricCard: React.FC<{
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  status?: 'good' | 'warning' | 'danger';
}> = ({ title, value, icon, trend, status = 'good' }) => {
  const statusColors = {
    good: 'border-green-500 bg-green-50',
    warning: 'border-yellow-500 bg-yellow-50',
    danger: 'border-red-500 bg-red-50'
  };

  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm border-l-4 ${statusColors[status]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-black mt-1">{value}</p>
          {trend && (
            <p className="text-sm text-green-600 mt-1 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              {trend}
            </p>
          )}
        </div>
        <div className="text-gray-400">
          {icon}
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
          
              <span className="ml-2 font-bold">Website Health Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                Last updated: {new Date().toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-1" />
                Status: Healthy
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Overall Health Score"
            value="92%"
            icon={<Activity className="w-8 h-8" />}
            trend="+3% from last week"
            status="good"
          />
          <MetricCard
            title="Security Score"
            value="96%"
            icon={<Shield className="w-8 h-8" />}
            trend="+1% from last week"
            status="good"
          />
          <MetricCard
            title="Page Load Speed"
            value="2.1s"
            icon={<Zap className="w-8 h-8" />}
            trend="-0.3s improvement"
            status="good"
          />
          <MetricCard
            title="Monthly Visitors"
            value="18.2K"
            icon={<Users className="w-8 h-8" />}
            trend="+8.3% growth"
            status="good"
          />
        </div>

        {/* Main Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Performance Over Time */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-black mb-4">Performance Metrics (24h)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="time" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="safety" 
                  stroke="#C8102E" 
                  strokeWidth={3}
                  name="Safety Score"
                />
                <Line 
                  type="monotone" 
                  dataKey="speed" 
                  stroke="#F9D342" 
                  strokeWidth={3}
                  name="Speed Score"
                />
                <Line 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="#1A1A1A" 
                  strokeWidth={3}
                  name="Performance"
                />
                <Line 
                  type="monotone" 
                  dataKey="experience" 
                  stroke="#666666" 
                  strokeWidth={3}
                  name="Client Experience"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Current Health Status */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-black mb-4">Current Health Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={healthMetrics}>
                <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: metric.color }}
                    ></div>
                    <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                  </div>
                  <div className="text-2xl font-bold text-black">{metric.value}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security and Traffic Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Security Metrics */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-black mb-4">Security Assessment</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={securityData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" domain={[0, 100]} stroke="#666" />
                <YAxis dataKey="category" type="category" width={120} stroke="#666" />
                <Tooltip />
                <Bar dataKey="status" fill="#C8102E" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Traffic Analytics */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-black mb-4">Traffic & Engagement (6 months)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="visitors" 
                  stroke="#C8102E" 
                  strokeWidth={3}
                  name="Unique Visitors"
                />
                <Line 
                  type="monotone" 
                  dataKey="pageViews" 
                  stroke="#1A1A1A" 
                  strokeWidth={3}
                  name="Page Views"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-green-600 mr-2" />
              <h4 className="text-lg font-semibold text-black">Security Status</h4>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">SSL Certificate</span>
                <span className="text-sm font-medium text-green-600">Valid</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Malware Scan</span>
                <span className="text-sm font-medium text-green-600">Clean</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Blacklist Status</span>
                <span className="text-sm font-medium text-green-600">Clear</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Vulnerabilities</span>
                <span className="text-sm font-medium text-yellow-600">1 Low Risk</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-blue-600 mr-2" />
              <h4 className="text-lg font-semibold text-black">Performance Metrics</h4>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">First Contentful Paint</span>
                <span className="text-sm font-medium text-green-600">1.2s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Largest Contentful Paint</span>
                <span className="text-sm font-medium text-green-600">2.1s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Time to Interactive</span>
                <span className="text-sm font-medium text-yellow-600">3.2s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Cumulative Layout Shift</span>
                <span className="text-sm font-medium text-green-600">0.05</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-purple-600 mr-2" />
              <h4 className="text-lg font-semibold text-black">User Experience</h4>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Bounce Rate</span>
                <span className="text-sm font-medium text-green-600">24%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Avg. Session Duration</span>
                <span className="text-sm font-medium text-green-600">4m 32s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pages per Session</span>
                <span className="text-sm font-medium text-green-600">3.7</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Mobile Friendliness</span>
                <span className="text-sm font-medium text-green-600">Excellent</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;