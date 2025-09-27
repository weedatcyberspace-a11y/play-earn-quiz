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
            Join Quiz Master
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign up and activate your account to start earning
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
                  Activate Your Account
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete payment to activate your account and start earning
                </p>
              </div>
              
              <div className="border rounded-lg p-4 bg-muted/50">
                <iframe
                  width="100%"
                  height="400"
                  src="https://store.pesapal.com/embed-code?pageUrl=https://store.pesapal.com/moneyflow"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-md"
                />
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