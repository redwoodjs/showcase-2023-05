import { MetaTags } from '@redwoodjs/web'
import Program from 'src/components/Program/Program'
import Header from 'src/components/Header/Header'
import { SocialLinks } from 'src/components/SocialLinks'

const IndexPage = () => {
  return (
    <>
      <MetaTags
        title="RedwoodJS Showcase"
        description="RedwoodJS Showcase product and startup demos on May 30, 2023. Followed by a Big announcement!"
        ogUrl="https://redwoodjs.com"
        ogContentUrl="https://redwoodjs.com/images/rw-og.png"
      />
      <Header />
      <div className="max-w-3xl p-12 m-auto">
        <Overview />
        <Program />
        <CTA />
      </div>
      <div>
        <SocialLinks />
      </div>
    </>
  )
}

const Overview = () => (
  <div>
    <div className="mb-6 text-center">
      <h2 className="mb-3 text-4xl font-bold">RedwoodJS Showcase on May 30!</h2>
      <h3 className="mb-3 text-2xl font-medium italic">Product and Startup Demos</h3>
      <h3 className="mb-4 text-2xl font-medium italic">Followed by two <span className='font-bold'>Big</span> Announcements</h3>
    </div>

    <div className="mt-6 mb-6">
      <div className="p-4 text-center">
        <h4 className="mb-4 text-3xl font-bold">📫 You&apos;re invited!</h4>
        <p className="mb-2 text-xl">
          Free&nbsp;
          <a
            className="text-blue-400 underline"
            href="https://lu.ma/redwoodjs-showcase"
            target="_blank"
            rel="noreferrer"
          >
            registration on Lu.ma
          </a>
        </p>
        <p>or via livestream on&nbsp;
          <a
            className="text-blue-400 underline"
            href="https://youtube.com/live/rx9jozroB8I"
            target="_blank"
            rel="noreferrer"
          >
            YouTube&nbsp;
          </a>
          and&nbsp;
          <a
            className="text-blue-400 underline"
            href="https://www.linkedin.com/video/event/urn:li:ugcPost:7066958599234727938/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>

    <p className="text-gray-400 mb-8">
      Redwood is an opinionated, full-stack, JS/TS web app
      framework designed to keep you moving fast as your app grows from side
      project to startup. Out of the box, it comes fully integrated with React, GraphQL, Prisma,
      Storybook, Jest, and <a className="text-blue-400 underline" href="https://redwoodjs.com/docs">much more</a>!
      Redwood is an independent open-source project started and sponsored by Tom Preston-Werner
      (GitHub cofounder).&nbsp;
      <a className="text-blue-400 underline" href="https://redwoodjs.com/">
        Learn More
      </a>
    </p>



  </div>
)

const CTA = () => (
  <div className="mt-24">
    <div className="max-w-md pt-4 mx-auto text-center border-t-2 border-gray-900">
      <div className="pb-8 text-xl">
        Ready to start your RedwoodJS adventure?
      </div>
      <a href="https://redwoodjs.com/tutorial">
        <button className="px-8 py-4 text-xl font-bold text-white bg-orange-500 rounded hover:bg-orange-400">
          Start the Tutorial
        </button>
      </a>
    </div>
  </div>
)

export default IndexPage
