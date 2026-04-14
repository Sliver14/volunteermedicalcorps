'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Check, ShieldCheck, CreditCard, Landmark } from 'lucide-react';

const donationAmounts = [50, 100, 250, 500, 1000, 2500];

export function DonationForm() {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(100);
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
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', terms: false });
      setSelectedAmount(100);
      setCustomAmount('');
    }, 5000);
  };

  const finalAmount = isCustom && customAmount ? parseInt(customAmount) : selectedAmount;

  if (submitted) {
    return (
      <div className="bg-white p-8 md:p-16 shadow-2xl border-t-8 border-[#facc15] text-center max-w-2xl mx-auto my-12">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center animate-bounce">
            <Check className="w-10 h-10 text-green-600" />
          </div>
        </div>
        <h2 className="text-3xl font-black text-[#001f3f] uppercase mb-4">Generosity Received!</h2>
        <p className="text-xl text-gray-600 mb-6 font-medium">
          Your generous donation of <span className="text-[#001f3f] font-black">${finalAmount.toLocaleString()}</span> has been processed successfully.
        </p>
        <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">
          A receipt has been sent to {formData.email}
        </p>
        <Button className="mt-10 bg-[#001f3f] text-white rounded-none px-10 py-6 uppercase font-black tracking-widest" onClick={() => setSubmitted(false)}>
          Back to Donation
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden border-b-8 border-[#facc15] mb-24">
      {/* Header */}
      <div className="bg-[#001f3f] text-white p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#facc15]/10 skew-x-12 translate-x-1/2"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-[#facc15] fill-current" />
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Your Gift Saves Lives</h2>
          </div>
          <p className="text-lg text-white/70 max-w-2xl font-medium">Your contribution directly supports our medical missions and relief efforts globally. Join us in bringing healing to the nations.</p>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* Amount Selection */}
          <div className="space-y-6">
            <h3 className="text-lg font-black text-[#001f3f] uppercase border-b border-gray-100 pb-2">Select Donation Amount</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => handleAmountClick(amount)}
                  className={`py-4 px-2 rounded-none font-black transition-all text-sm uppercase tracking-widest border-2 ${
                    selectedAmount === amount && !isCustom
                      ? 'bg-[#001f3f] text-white border-[#001f3f] shadow-xl'
                      : 'bg-white border-gray-100 text-[#001f3f] hover:border-[#facc15] hover:bg-gray-50'
                  }`}
                >
                  ${amount.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">Or enter custom amount:</span>
              <div className="relative flex-1 w-full max-w-xs">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#001f3f] font-black">
                  $
                </span>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={customAmount}
                  onChange={handleCustomAmount}
                  min="1"
                  className="pl-10 py-6 rounded-none border-2 border-gray-100 focus-visible:ring-[#facc15] font-black text-[#001f3f]"
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-6">
            <h3 className="text-lg font-black text-[#001f3f] uppercase border-b border-gray-100 pb-2">Payment Method</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: 'card', label: 'Credit / Debit Card', icon: <CreditCard className="w-6 h-6" /> },
                { id: 'bank', label: 'Direct Bank Transfer', icon: <Landmark className="w-6 h-6" /> },
              ].map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center gap-4 p-6 rounded-none border-2 cursor-pointer transition-all ${
                    paymentMethod === method.id
                      ? 'border-[#001f3f] bg-gray-50'
                      : 'border-gray-100 hover:border-[#facc15]'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 accent-[#001f3f]"
                  />
                  <div className="text-[#001f3f]">{method.icon}</div>
                  <span className="font-black text-[#001f3f] uppercase tracking-widest text-xs">
                    {method.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Donor Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-black text-[#001f3f] uppercase border-b border-gray-100 pb-2">Donor Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">First Name</label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Last Name</label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="rounded-none border-gray-200 focus-visible:ring-[#facc15] py-6"
              />
            </div>
          </div>

          {/* Verification & Consent */}
          <div className="bg-gray-50 p-6 space-y-4">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                required
                className="w-5 h-5 mt-1 accent-[#001f3f] cursor-pointer"
              />
              <span className="text-xs text-gray-500 font-medium leading-relaxed group-hover:text-gray-700 transition-colors">
                I agree to the <Link href="/terms" className="text-[#001f3f] font-black underline">Terms of Use</Link> and <Link href="/privacy" className="text-[#001f3f] font-black underline">Privacy Policy</Link>. I authorize the Volunteer Medical Corps to process this donation.
              </span>
            </label>
            <div className="flex items-center gap-2 text-green-600">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Secure 256-bit SSL Encrypted Payment</span>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.terms || (finalAmount < 1)}
            className="w-full bg-[#001f3f] hover:bg-[#002855] text-white py-10 text-xl font-black rounded-none uppercase tracking-[0.2em] shadow-2xl transition-all active:scale-[0.98]"
          >
            Complete Donation of ${finalAmount > 0 ? finalAmount.toLocaleString() : '0'}
          </Button>
        </form>
      </div>
    </div>
  );
}
