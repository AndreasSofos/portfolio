import IconCloud from './magicui/icon-cloud'
import WordRotate from './magicui/word-rotate'

export default function Intro() {
  return (
    <div className="flex flex-wrap justify-between w-full max-w-[1200px] h-[100vh] gap-10 items-center px-5">
      <div className="space-y-2">
        <h1
          className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none
          "
        >
          Hi, I&apos;m Andreas Sofos 👋
        </h1>
        <span className="max-w-[600px] md:text-xl">
          I&apos;m a passionate software engineer with an interest in
          <div className="overflow-hidden py-2 text-md">
            <WordRotate
              words={[
                'Full-Stack Development.',
                'JavaScript Frameworks.',
                'Emerging Technologies.',
                'Mobile-First Design.',
                'API Development.',
                'UI/UX Design.',
              ]}
              className="inline-flex w-full text-left font-bold leading-none tracking-tighter"
            />
          </div>
        </span>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <a
            className="
                inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8
                whitespace-pre md:flex group relative gap-1 overflow-hidden
                rounded-lg text-base font-semibold tracking-tighter transform-gpu
                ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2
              "
            href="#projects"
          >
            View My Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right h-4 w-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
          {/* <a
            target="_blank"
            className="inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-10 px-8 whitespace-pre md:flex group relative gap-1 overflow-hidden rounded-full text-base font-semibold tracking-tighter"
            href="mailto:hello@example.com"
          >
            Contact Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right h-4 w-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a> */}
        </div>
      </div>

      <div className="max-w-[400px]">
        <IconCloud
          iconSlugs={[
            'react',
            'nextdotjs',
            'typescript',
            'javascript',
            'tailwindcss',
            'postgresql',
            'mongodb',
            'prisma',
            'vercel',
            'nodejs',
            'docker',
            'supabase',
            'github',
            'git',
            'shadcnui',
            'css3',
          ]}
        />
      </div>
    </div>
  )
}
