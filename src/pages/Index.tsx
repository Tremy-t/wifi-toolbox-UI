
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Shield, Zap, Activity, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Index = () => {
  const [scanning, setScanning] = useState(false);
  
  const startScan = () => {
    setScanning(true);
    toast.info("This is a demo application. No actual scanning will occur.");
    setTimeout(() => setScanning(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 py-16 mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 text-gray-900 dark:text-white">
            WiFi Toolbox
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A sophisticated network analysis toolkit with premium design and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                <Wifi className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Network Scanner</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Advanced WiFi network detection and analysis capabilities.
            </p>
          </Card>

          <Card className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold">Security Analysis</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Comprehensive security assessment and vulnerability detection.
            </p>
          </Card>

          <Card className="glass-card p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900">
                <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">Network Monitor</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Real-time network performance monitoring and analysis.
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button
            onClick={startScan}
            disabled={scanning}
            className="glass-button px-8 py-6 rounded-full text-lg font-semibold"
          >
            {scanning ? (
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-4 bg-blue-500 rounded-full animate-wave animate-wave-${i + 1}`}
                    />
                  ))}
                </div>
                <span>Scanning...</span>
              </div>
            ) : (
              <span>Start Scan</span>
            )}
          </Button>
        </div>

        <div className="mt-16 p-6 glass-panel rounded-lg max-w-3xl mx-auto animate-fade-in">
          <div className="flex items-center space-x-4 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
            <h3 className="text-lg font-semibold">Educational Purpose Only</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            This application is designed for educational and network testing purposes only. 
            Always obtain proper authorization before conducting any network analysis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
