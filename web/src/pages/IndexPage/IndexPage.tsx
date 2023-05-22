import { MetaTags } from '@redwoodjs/web'
import Program from 'src/components/Program/Program'
import Header from 'src/components/Header/Header'
import { SocialLinks } from 'src/components/SocialLinks'

const IndexPage = () => {
  return (
    <>
      <MetaTags
        title="RedwoodJS Showcase"
        description="RedwoodJS Showcase is here!"
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
    <p className="text-gray-400 mb-8">
      Redwood is an opinionated, full-stack, JavaScript/TypeScript web app
      framework designed to keep you moving fast as your app grows from side
      project to startup. With React, GraphQL, Prisma, Storybook, and Jest all
      integrated, you can focus on building your app!&nbsp;
      <a className="text-blue-400 underline" href="https://redwoodjs.com/">
        Learn More
      </a>
    </p>
    <div className="mt-6 mb-6">
      <div className="p-4 text-center">
        📬 <span className="font-bold">You&apos;re invited:</span> RedwoodJS
        Showcase Meetup on May 30th
        <br />
        <a
          className="text-blue-400 underline"
          href="https://lu.ma/exbn205k"
          target="_blank"
          rel="noreferrer"
        >
          Details and Free Registration on Lu.ma
        </a>
      </div>
    </div>

    <div className="mb-6 text-center">
      <h2 className="mb-4 text-4xl font-bold">RedwoodJS Showcase on May 30!</h2>
    </div>
  </div>
)

const CTA = () => (
  <div className="mt-36">
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
