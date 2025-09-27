import React, { useState } from 'react';
import { SignupForm } from '@/components/SignupForm';
import { Button } from '@/components/ui/button';
import { Trophy, Star, Coins } from 'lucide-react';

const Index = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string; phone: string } | null>(null);

  const handleSignupComplete = (data: { name: string; email: string; phone: string }) => {
    setUserData(data);
    setIsSignedUp(true);
  };

  if (isSignedUp && userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-quiz-purple/10 to-quiz-blue/10 flex items-center justify-center p-4">
        <div className="text-center space-y-6">
          <div className="mb-8">
            <Trophy className="h-16 w-16 text-quiz-orange mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome, {userData.name}!
            </h1>
            <p className="text-lg text-muted-foreground">
              Your account is activated and ready to earn!
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="text-center p-4 bg-card rounded-lg shadow-sm">
              <Star className="h-8 w-8 text-quiz-purple mx-auto mb-2" />
              <p className="text-sm font-medium">Level 1</p>
            </div>
            <div className="text-center p-4 bg-card rounded-lg shadow-sm">
              <Coins className="h-8 w-8 text-quiz-orange mx-auto mb-2" />
              <p className="text-sm font-medium">0 Coins</p>
            </div>
            <div className="text-center p-4 bg-card rounded-lg shadow-sm">
              <Trophy className="h-8 w-8 text-quiz-green mx-auto mb-2" />
              <p className="text-sm font-medium">0 Wins</p>
            </div>
          </div>
          
          <Button className="w-full max-w-md bg-quiz-purple hover:bg-quiz-purple/90 text-white h-12 text-lg font-semibold">
            Start Playing Quiz
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-quiz-purple/10 to-quiz-blue/10 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Quiz <span className="text-quiz-purple">Master</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            💸 Turn Your Knowledge Into Cash! 💸
          </p>
          <div className="max-w-2xl mx-auto space-y-3 mb-6">
            <p className="text-sm md:text-base text-foreground">
              <span className="font-bold text-quiz-orange">Join thousands</span> of smart people earning 
              <span className="font-bold text-quiz-green"> $20-100 daily</span> just by answering simple questions!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🏆</div>
                <p className="font-semibold text-quiz-purple">Sarah M.</p>
                <p className="text-xs text-muted-foreground">"Earned $156 in my first week!"</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">💰</div>
                <p className="font-semibold text-quiz-green">John K.</p>
                <p className="text-xs text-muted-foreground">"Easy money during lunch breaks"</p>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">⚡</div>
                <p className="font-semibold text-quiz-orange">Mary L.</p>
                <p className="text-xs text-muted-foreground">"Paid my rent with quiz earnings!"</p>
              </div>
            </div>
          </div>
        </div>
        
        <SignupForm onSignupComplete={handleSignupComplete} />
      </div>
    </div>
  );
};

export default Index;
