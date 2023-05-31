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
      <h2 className="mb-3 text-4xl font-bold">The Showcase happened on May 30!</h2>
      {/* <h3 className="mb-3 text-2xl font-medium italic">Product and Startup Demos</h3>
      <h3 className="mb-4 text-2xl font-medium italic">Followed by two <span className='font-bold'>Big</span> Announcements</h3> */}
    </div>

    <div className="mt-4 mb-8">
      <div className="p-2 text-center">
        <h4 className="mb-3 text-2xl">📫 You&apos;re invited:&nbsp;
          <a
              className="text-blue-400 underline"
              href="https://redwoodjsconf.com"
              target="_blank"
              rel="noreferrer"
            >
              RedwoodJS Conference!
          </a>
        </h4>
        <p className="text-sm">September 26-29, 2023<br />
          In-person and Virtual Tickets Available<br />
          Full Details on&nbsp;
          <a
            className="underline"
            href="https://redwoodjsconf.com"
            target="_blank"
            rel="noreferrer"
          >
            RedwoodJSConf.com
          </a>
        </p>
      </div>
    </div>

    <h3>
      The RedwoodJS Showcase featured 20 inspiring demos, including a wide range of solutions
      across consumer, B2B, and enterprise — <span className="italic">from music to collaboration to dev tools to eComm
      to eGames to Web3 to data tools and beyond</span>. Most are multi-client. Some only use Redwood's
      backend and API. <span className="font-bold">All were built with Redwood.</span>
      <br />
      <br />
      It all led up to two <span className="font-bold">BIG</span> announcements. Check them out below!
    </h3>
    <div className="mt-6 mb-6 ml-8">
      <div className="p-4 border-l-2 ">
        All In on React Server Components (RSC):&nbsp;
        <a
          className="text-blue-400 underline"
          target="_blank"
          rel="noreferrer"
          href="https://tom.preston-werner.com/2023/05/30/redwoods-next-epoch-all-in-on-rsc.html"
        >
          Redwood&apos;s Next Epoch 🚀
        </a>
        <br /> <br />
        Announcing the First&nbsp;
        <a
          className="text-blue-400 underline"
          target="_blank"
          rel="noreferrer"
          href="https://redwoodjsconf.com"
        >
          In-person RedwoodJS Conf
        </a>
        <br /> <br />
        The New&nbsp;
        <a
          className="text-blue-400 underline"
          target="_blank"
          rel="noreferrer"
          href="https://redwoodjs.com/roadmap"
        >
          Public Roadmap
        </a>
        <br /> <br />
        Update about the&nbsp;
        <a
          className="text-blue-400 underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.redwoodstartupfund.com"
        >
          Redwood Startup Fund
        </a>
        <br /> <br />
        Watch the&nbsp;
        <a
          className="text-blue-400 underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/live/rx9jozroB8I"
        >
          Event Recording on YouTube 📺
        </a>
      </div>
    </div>

    <p className="text-gray-400 mt-12 mb-2">
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
