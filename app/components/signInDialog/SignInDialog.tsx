"use client";
import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { Dispatch, SetStateAction, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import apiService from '@/app/services/apiService';
import { handleLogin } from '@/app/lib/actions';

interface EditProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    onSuccess: (userId: string) => void;
}

export default function SignInDialog({ open, setOpen, onSuccess }: EditProps) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitSignup = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrors([]);

    const formData = {
      email: email,
      password1: password1,
      password2: password2,
    };

    try {
      const response = await apiService.postWithoutToken('/api/auth/register/', JSON.stringify(formData));
      if (response.access) {
        handleLogin(response.user.pk, response.access, response.refresh);
        onSuccess(response.user.pk);
        setOpen(false);
      } else {
        const tmpErrors: string[] = Object.entries(response).flatMap(([key, value]) => 
          Array.isArray(value) ? value.map(err => `${err}`) : [`${value}`]
        );
        setErrors(tmpErrors);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setErrors(['An unexpected error occurred. Please try again.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative p-6 h-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-8 py-6">
              <div className="text-center sm:text-left">
                <DialogTitle as="h3" className="text-xl font-bold leading-tight tracking-tight text-gray-900 mb-4">
                  Register Account
                </DialogTitle>
                {errors.length > 0 && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                    <p className="font-bold">Registration failed</p>
                    <ul className="list-disc list-inside mt-2">
                      {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <form className="space-y-4 md:space-y-6" onSubmit={submitSignup}>
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input onChange={(e) => setPassword1(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                  </div>
                  <div>
                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                    <input onChange={(e) => setPassword2(e.target.value)} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input onChange={(e) => setIsAdmin(e.target.checked)} id="admin" aria-describedby="admin" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="admin" className="font-medium text-gray-500">Admin?</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="text-white bg-indigo-700 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50"
                    >
                      {isSubmitting ? 'Registering...' : 'Register'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}