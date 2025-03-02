import { DepartureForm } from '@/components/DepartureForm/DepartureForm';
import Image from 'next/image';
import { Card, Logo } from 'ui';
import { Suspense } from 'react';
export default function Home() {
  return (
    <>
      <Image src={'/background.jpg'} fill alt="background" className="object-cover bg-left-top" priority />
      <div className="relative z-10 min-h-dvh h-full max-w-4xl mx-auto flex items-center">
        <div className="w-full">
          <Card className="flex flex-row overflow-hidden">
            <section className="max-w-2/3 px-6 py-12 flex flex-col gap-6">
              <Logo />
              <div className="space-y-4">
                <h1>Hello! Choose your departure below.</h1>
                <p>
                  This is a work assignment. This is not real so do not input any real data. This page will be
                  unpublished after the entire assessment process.
                </p>
              </div>
              <Suspense>
                <DepartureForm />
              </Suspense>
            </section>
            <div className="relative w-1/3">
              <Image src="/foreground.jpg" fill alt="foreground" className="object-cover bg-center" priority />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
