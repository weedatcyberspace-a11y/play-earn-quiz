import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Smartphone, Mail, User, CreditCard } from 'lucide-react';

interface SignupFormProps {
  onSignupComplete: (userData: { name: string; email: string; phone: string }) => void;
}

export const SignupForm: React.FC<SignupFormProps> = ({ onSignupComplete }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [showPayment, setShowPayment] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setShowPayment(true);
    }
  };

  const handlePaymentComplete = () => {
    onSignupComplete(formData);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="shadow-lg border-0 bg-card">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold text-quiz-purple">
            🚀 Start Earning Today!
          </CardTitle>
          <CardDescription className="text-muted-foreground space-y-2">
            <p className="font-semibold text-quiz-orange">Join 10,000+ successful quiz players</p>
            <p>✅ Earn $5-50 per quiz completed</p>
            <p>✅ Instant payouts via mobile money</p>
            <p>✅ Play anytime, anywhere on your phone</p>
            <div className="mt-3 p-2 bg-quiz-green/10 rounded-lg">
              <p className="text-xs font-medium text-quiz-green">
                🔥 LIMITED TIME: First 100 members get 2X earning bonus!
              </p>
            </div>
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {!showPayment ? (
            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-quiz-purple" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-quiz-blue" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                  <Smartphone className="h-4 w-4 text-quiz-green" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                  className="h-12"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-quiz-purple hover:bg-quiz-purple/90 text-white font-semibold"
              >
                Continue to Payment
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="text-center">
                <CreditCard className="h-12 w-12 text-quiz-orange mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  🎯 Just One Step Away From Earning!
                </h3>
                <div className="bg-quiz-purple/10 p-3 rounded-lg mb-4">
                  <p className="text-sm font-semibold text-quiz-purple mb-1">
                    One-time activation fee: Only $10
                  </p>
                  <p className="text-xs text-muted-foreground">
                    💰 Average member earns back in first 2 quizzes!
                  </p>
                </div>
                <div className="space-y-1 text-xs text-left">
                  <p className="flex items-center gap-2">
                    <span className="text-quiz-green">✓</span> Instant account activation
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-quiz-green">✓</span> Access to premium quizzes
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-quiz-green">✓</span> 24/7 earning opportunities
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-quiz-green">✓</span> Guaranteed payout system
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={() => window.open('https://store.pesapal.com/moneyflow', '_blank')}
                  className="w-full h-12 bg-quiz-orange hover:bg-quiz-orange/90 text-white font-semibold"
                >
                  Pay via PesaPal MoneyFlow
                </Button>
                
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-2">
                    Click the button above to complete your payment
                  </p>
                  <iframe 
                    width="200" 
                    height="40" 
                    src="https://store.pesapal.com/embed-code?pageUrl=https://store.pesapal.com/moneyflow" 
                    frameBorder="0" 
                    allowFullScreen
                    className="mx-auto"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handlePaymentComplete}
                className="w-full h-12 bg-quiz-green hover:bg-quiz-green/90 text-white font-semibold"
              >
                I've Completed Payment
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};