'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Check } from 'lucide-react';

const donationAmounts = [10, 25, 50, 100, 250, 500];

export function DonationForm() {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [isCustom, setIsCustom] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    terms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(parseInt(value) || 0);
      setIsCustom(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation submitted:', {
      amount: selectedAmount || customAmount,
      method: paymentMethod,
      donor: formData,
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', terms: false });
      setSelectedAmount(50);
      setCustomAmount('');
    }, 3000);
  };

  const finalAmount = isCustom && customAmount ? parseInt(customAmount) : selectedAmount;

  if (submitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center animate-pulse">
                <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Thank You!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
              Your generous donation of ${finalAmount} has been received.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              A confirmation email has been sent to {formData.email}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="w-6 h-6" />
              <h2 className="text-3xl font-bold">Make Your Donation</h2>
            </div>
            <p className="text-amber-100">Your support creates lasting change in communities worldwide.</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Amount Selection */}
              <div>
                <label className="block text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Choose Donation Amount
                </label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountClick(amount)}
                      className={`py-3 px-3 rounded-lg font-bold transition-all ${
                        selectedAmount === amount && !isCustom
                          ? 'bg-amber-600 text-white shadow-lg'
                          : 'bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Custom:</span>
                  <div className="relative flex-1 max-w-xs">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
                      $
                    </span>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={handleCustomAmount}
                      min="1"
                      className="pl-8"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Select Payment Method
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
                    { id: 'bank', label: 'Bank Transfer', icon: '🏦' },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        paymentMethod === method.id
                          ? 'border-amber-600 bg-amber-50 dark:bg-amber-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-amber-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-2xl">{method.icon}</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Donor Information */}
              <div>
                <label className="block text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Donor Information
                </label>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mb-4"
                />
              </div>

              {/* Terms & Conditions */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    required
                    className="w-5 h-5 mt-1 rounded border-gray-300"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    I agree to the terms of use and privacy policy. I authorize Alone to charge my payment method for this donation.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.terms || (finalAmount < 1)}
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white py-4 text-lg font-bold rounded-lg"
              >
                Donate ${finalAmount > 0 ? finalAmount : '0'}
              </Button>

              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Your donation is secure and processed through verified payment partners.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
