export const Schedule: Day[] = [
  {
    ordinal: 1,
    date: new Date(Date.UTC(2023, 4, 30, 16)),
    events: [
      {
        time: new Date(Date.UTC(2023, 4, 30, 16, 0)),
        endTime: new Date(Date.UTC(2023, 4, 30, 18, 30)),
        title: 'Product and Startup Demos',
        description: (
          <>
            {/* <div className="mt-4 mb-4 ml-4">
              <div className="p-3 border-l-2 ">
                <a
                  className="text-blue-400 underline"
                  href="https://youtu.be/B0CP0aAePsI"
                >
                  Watch the Recorded Event on YouTube
                </a>
              </div>
            </div> */}
            <p className="mb-4">
              Startups built with Redwood have raised over $60M. 🤯
              Come watch both funded startups and indie devs share
              their demos and experience with the community.
            </p>
            <p>
              📣 A <span className="font-bold">BIG</span> announcement to follow the presentations!
            </p>
            <p className="mb-3 mt-6">
              <span className="font-bold text-xl">Participants</span><br />
              <span className="italic text-sm">not listed in order of appearance</span>
            </p>
            <p className="mb-2">
              <a
                href="https://snaplet.dev"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Snaplet
              </a>
              &nbsp;Peter Pistorius
            </p>
            <p className="mb-2">
              <a
                href="https://nous.co"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Nous
              </a>
              &nbsp;Lee Staples
            </p>
            <p className="mb-2">
              <a
                href="https://datasketch.co"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Datasketch
              </a>
              &nbsp;JP Marin Diaz
            </p>
            <p className="mb-2">
              <a
                href="https://itlist.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                ItList
              </a>
              &nbsp;Kateryna Bilyk, Paul Korver, Stan Duprey
            </p>
            <p className="mb-2">
              <a
                href="https://buildpass.com.au"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                BuildPass
              </a>
              &nbsp;Aaron Vanston, Matt Perrott
            </p>
            <p className="mb-2">
              <a
                href="https://www.majr.app"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                majr
              </a>
              &nbsp;Jamie Cannon, Jeremy Jones
            </p>
            <p className="mb-2">
              <a
                href="http://joinatlas.ai"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                ATLAS
              </a>
              &nbsp;Matt Dupree, David Laprade
            </p>
            <p className="mb-2">
              <a
                href="https://leftlanesoftware.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                LeftLane
              </a>
              &nbsp;Michael Mentele, Khaled Bitar
            </p>
            <p className="mb-2">
              <a
                href="https://diagontech.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Diagon
              </a>
              &nbsp;Shri Muthu, Will Drewery
            </p>
            <p className="mb-2">
              <a
                href="https://infinitykeys.io"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Infinity Keys
              </a>
              &nbsp;Andy Boyan, Chris Bloom
            </p>
            <p className="mb-2">
              <a
                href="https://getinkworks.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Inkworks
              </a>
              &nbsp;Jose Lopez, Carl Ehrnrooth
            </p>
            <p className="mb-2">
              <a
                href="https://marvelbus.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                MarvelBus
              </a>
              &nbsp;Asher Eastham
            </p>
            <p className="mb-2">
              <a
                href="https://constellationnotes.com/"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Constellation Notes
              </a>
              &nbsp;Bill O&apos;Connor
            </p>
            <p className="mb-2">
              <a
                href="https://statapillar.com/"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Statapillar
              </a>
              &nbsp;Robin Tully
            </p>
            <p className="mb-2">
              <a
                href="http://teamstream.gg"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Teamstream
              </a>
              &nbsp;Kris Coulson
            </p>
            <p className="mb-2">
              <a
                href="https://konfigthis.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Konfig
              </a>
              &nbsp;Anh-Tuan Bui, Dylan Huang
            </p>
            <p className="mb-2">
              <a
                href="https://everfund.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Everfund
              </a>
              &nbsp;Christopher Burns
            </p>
            <p className="mb-2">
              <a
                href="https://today.th90.net"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Today
              </a>
              &nbsp;Thomas Seillan
            </p>
            <p className="mb-2">
              <a
                href="https://usekeyp.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Keyp
              </a>
              &nbsp;Joseph Schiarizzi
            </p>
            <p className="mb-2">
              <a
                href="https://pullflow.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Pullflow
              </a>
              &nbsp;Zak Mandhro
            </p>
          </>
        ),
      },
    ],
  },
]

export type Day = {
  ordinal: number
  date: Date
  events: Event[]
  description?: React.ReactNode
}

export type Event = {
  time: Date
  endTime?: Date
  title: string
  description?: string | React.ReactNode
  action?: Action
}

export type Action = {
  label: string
  url: string
}
