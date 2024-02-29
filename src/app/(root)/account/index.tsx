'use client';

import { signIn } from 'next-auth/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn, isObjectEmptyWithState } from '@/lib/utils/helpers';
import { ChangeEvent, HTMLAttributes, SyntheticEvent, useState } from 'react';
import { toast } from 'sonner';
import { createUser } from '@/lib/server';

interface UserAuthFormProps extends HTMLAttributes<HTMLDivElement> {
  auth: string;
}

export function UserAuthForm({ className, auth, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    authType: 'credentials',
  });

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setForm((preFormValues) => ({
      ...preFormValues,
      [target.name]: target.value,
    }));
  };

  const handleAuthButton = (authName: string) => {
    toast.info('Redirecting selected provider');
    setIsLoading(true);
    signIn(authName, {
      callbackUrl: '/dashboard',
    });
  };

  const handleSubmission = async (event: SyntheticEvent) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      toast.loading('Authenticating...');
      let success = false;
      if (auth === 'sign-up') {
        isObjectEmptyWithState(form, setIsLoading);
        const result = await createUser(form);
        if (result.success) {
          // console.log('form" ', form)
          success = true;
          toast.success('Authenticated successfully.');
        }
      } else if (auth === 'sign-in') {
        const { name, authType, ...signInForm } = form;
        isObjectEmptyWithState(signInForm, setIsLoading);
        success = true;
        toast.success('Authenticated successfully.');
      }
      if (success) {
        toast.dismiss();
        toast.message('Redirecting to your dashboard.');
        await signIn('credentials', {
          ...form,
          callbackUrl: '/dashboard',
        });
      }

      // if (redirect) {
      // const redirectURL = new URL(redirect);
      // if (redirectURL.hostname.includes("localhost")) {
      //       router.push(redirectURL.pathname);
      //     } else if (redirectURL.hostname.includes("bloggengine.vercel.app")) {
      //       router.push(redirectURL.pathname);
      //     }
      //   } else {
      // router.push("/dashboard");
      //   }
      // } catch (error) {
      //   console.error(error);
      //   const err = error as { massage: string };
      //   toast.error(`Something went wrong. Error: ${err.massage}`);
      // }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      {/* Auth Forms */}
      <form onSubmit={handleSubmission}>
        <fieldset className='grid gap-2'>
          {auth === 'sign-up' && (
            <fieldset className='grid gap-1'>
              <Label className='sr-only' htmlFor='name'>
                Name
              </Label>
              <Input
                name='name'
                value={form.name}
                onChange={handleOnChange}
                placeholder='John Doe'
                type='name'
                autoCapitalize='none'
                autoComplete='name'
                autoCorrect='off'
                disabled={isLoading}
              />
            </fieldset>
          )}
          <fieldset className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              name='email'
              value={form.email}
              onChange={handleOnChange}
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
            />
          </fieldset>
          <fieldset className='grid gap-1'>
            <Label className='sr-only' htmlFor='password'>
              Password
            </Label>
            <Input
              value={form.password}
              name='password'
              onChange={handleOnChange}
              placeholder='##############'
              type='password'
              autoCapitalize='none'
              disabled={isLoading}
            />
          </fieldset>
          <Button type='submit' disabled={isLoading}>
            {isLoading && 'loading'}
            Sign In with Email
          </Button>
        </fieldset>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>

      {/* Auth Buttons */}
      <Button
        onClick={() => handleAuthButton('github')}
        variant='outline'
        type='button'
        disabled={isLoading}
      >
        {isLoading ? 'loading' : 'github icon'} Github
      </Button>
      <Button
        onClick={() => handleAuthButton('google')}
        variant='outline'
        type='button'
        disabled={isLoading}
      >
        {isLoading ? 'loading' : 'google icon'} Google
      </Button>
      <Button
        onClick={() => handleAuthButton('linkedin')}
        variant='outline'
        type='button'
        disabled={isLoading}
      >
        {isLoading ? 'loading' : 'linkedin icon'} Linkedin
      </Button>
    </div>
  );
}
