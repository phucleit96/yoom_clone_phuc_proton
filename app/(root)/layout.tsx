import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "Yoom Clone",
  description: "Video Calling App by Phuc Proton",
  icons: {
    icon: "/icons/logo.svg",
  }
};

const layout = ({children}: {children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
        </StreamVideoProvider>
    </main>
  )
}

export default layout