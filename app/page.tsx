"use client";

import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-900 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Landing Page</h1>
      <p className="text-lg mb-8">Discover amazing features and content.</p>
      <Button variant="outline">Get Started</Button>
    </div>
  );
};

export default LandingPage;