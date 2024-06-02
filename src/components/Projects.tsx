export default function Projects() {
  return (
    <div className="w-full min-h-[100vh] h-full  px-2 sm:px-10 py-[80px] mb-0 flex justify-center items-center" id="projects">
      <div className="container space-y-12 px-4 md:px-6 h-fit">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm ">My Projects</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my latest work</h2>
            {/* <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
            </p> */}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3  max-w-[1000px] mx-auto">
          <div className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border p-2">
            <div className="flex items-center justify-between flex-col lg:flex-row">
              <video
                src="https://www.andrewsofos.com/videos/IzyManiCutsPreviewUser.mp4"
                className="relative pointer-events-none mx-auto bottom-[-1.7px] lg:bottom-0  lg:right-[-3px] rounded-sm  sm:rounded-md  lg:rounded-r-none w-full lg:w-[50%] object-cover object-top"
                autoPlay
                muted
                loop
                playsInline
              ></video>
              <video
                src="https://www.andrewsofos.com/videos/IzyManiCutsPreviewAdmin.mp4"
                className="relative pointer-events-none mx-auto top-[-1.7px] lg:top-0 lg:left-[-3px] rounded-sm  sm:rounded-md  lg:rounded-l-none w-full lg:w-[50%] object-cover object-top"
                autoPlay
                muted
                loop
                playsInline
              ></video>
            </div>
            <div className="flex flex-col">
              <div className="space-y-1">
                <h3 className="font-semibold tracking-tight mt-1 text-base">Booking Platform</h3>
                {/* <time className="font-sans text-xs">Jan 2024 - Present</time> */}
                <div className="hidden font-sans text-xs underline print:visible"></div>
                <div className="max-w-full text-pretty font-sans text-sm text-muted-foreground">
                  As a solo developer, I designed and developed a booking platform for a client in the barber industry. The platform allows
                  customers to book appointments, get a personalized email confirmation and a reminder email before the appointment. The
                  platform also allows the client to manage their appointments, customers , services, working hours and more. The platform
                  is a full stack application hosted on Vercel and built with tools listed below.
                </div>
              </div>
            </div>
            <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col">
              <div className="mt-2 flex flex-wrap gap-1">
                <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary/80 px-2 py-1 text-[12px]">
                  Next.js
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary/80 px-2 py-1 text-[12px]">
                  Typescript
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary/80 px-2 py-1 text-[12px]">
                  Supabase
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary/80 px-2 py-1 text-[12px]">
                  Prisma
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary/80 px-2 py-1 text-[12px]">
                  TailwindCSS
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary/80 px-2 py-1 text-[12px]">
                  Styled Components
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary/80 px-2 py-1 text-[12px]">
                  NextAuth
                </div>
                <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary/80 px-2 py-1 text-[12px]">
                  Shadcn UI
                </div>
              </div>
            </div>
            <div className="flex items-center pt-2">
              <div className="flex flex-row flex-wrap items-start gap-1">
                <a target="_blank" href="https://www.izymanicuts.com">
                  <div className="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-4 py-1 text-[14px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    Website
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
