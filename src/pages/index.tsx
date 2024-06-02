import { Inter } from 'next/font/google'
import Intro from '@/components/Intro'
import TextRevealComponent from '@/components/TextReveal'
import Projects from '@/components/Projects'

const inter = Inter({
  weight: ['300', '400', '700', '800'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={`flex min-h-screen min-w-screen  flex-col items-center bg-primary-foreground justify-between  ${inter.className}`}>
      <Intro />
      <TextRevealComponent />
      <Projects />
    </main>
  )
}
