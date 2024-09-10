'use client'

import { Dispatch, SetStateAction, FormEvent } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import apiService from '@/app/services/apiService'
import { handleLogin } from '@/app/lib/actions'

interface LoginProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    onSuccess: (userId: string) => void;
}

export default function LoginDialog({ open, setOpen, onSuccess }: LoginProps) {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrors([]);

    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await apiService.postWithoutToken('/api/auth/login/', JSON.stringify(formData));
      if (response.access) {
        handleLogin(response.user.pk, response.access, response.refresh);
        onSuccess(response.user.pk);
        setOpen(false);
      } else {
        setErrors(response.non_field_errors);
      }
    } catch (error) {
      console.error('Login error:', error);
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
            className="relative transform overflow-hidden pr-5 pl-5 rounded-xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="text-center sm:text-left">
                <DialogTitle as="h3" className="text-lg pt-2 font-semibold leading-6 text-gray-900">
                  Sign in to your account
                </DialogTitle>

                {errors.length > 0 && (
                  <div className="bg-red-100 mt-2 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                    <p className="text-sm font-light">Login failed</p>
                    <ul className="list-disc list-inside mt-2">
                      {errors.map((error, index) => (
                        <li className='text-xs' key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-2">
                  <form className="space-y-6" onSubmit={submitLogin}>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                          Password
                        </label>
                        <div className="text-sm">
                          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          autoComplete="current-password"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>

                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-center gap-3">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-1.5 px-3 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <img
                          src="/google.png" 
                          alt="Google"
                          className="h-5 w-5"
                        />
                        <span className="ml-3">Google</span>
                      </button>

                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-1.5 px-3 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <img
                          src="/github.png" 
                          alt="GitHub"
                          className="h-5 w-5"
                        />
                        <span className="ml-3">GitHub</span>
                      </button>
                    </div>
                  </div>

                  <p className="mt-10 text-center text-sm text-gray-500 pb-2">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}