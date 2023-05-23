export const Schedule: Day[] = [
  {
    ordinal: 1,
    date: new Date(Date.UTC(2023, 4, 30, 16)),
    events: [
      {
        time: new Date(Date.UTC(2023, 4, 30, 16, 0)),
        endTime: new Date(Date.UTC(2023, 4, 30, 18, 0)),
        title: 'Redwood Startup Showcase',
        description: (
          <>
            <div className="mt-4 mb-4 ml-4">
              <div className="p-3 border-l-2 ">
                <a
                  className="text-blue-400 underline"
                  href="https://youtu.be/B0CP0aAePsI"
                >
                  Watch the Recorded Event on YouTube
                </a>
              </div>
            </div>
            <p className="mb-4">
              Startups built with Redwood have raised over $60M. 🤯 Come watch
              both funded startups and indie devs share their experience with
              Redwood and the community.
            </p>
            <p className="mb-2 mt-6">
              <span className="font-bold">Demos</span>:<br />
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
              : Juan Pablo Marin Diaz
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
              : Paul Korver
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
              : Matt Dupree
            </p>
            <p className="mb-2">
              <a
                href="https://leftlanesoftware.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                LeftLane Software
              </a>
              : Michael Mentele
            </p>
            <p className="mb-2">
              <a
                href="https://diagontech.com"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Diagon Technologies, Ltd
              </a>
              : Shridharan (Shri) Muthu
            </p>
            <p className="mb-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Pullflow
              </a>
              : Zak Mandhro
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
              : Andy Boyan
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
              : Jose Lopez
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
              : Asher Eastham
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
              : Matt Perrott
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
              : Jamie Cannon
            </p>
            <p className="mb-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Constellation Notes
              </a>
              : Bill O&apos;Connor
            </p>
            <p className="mb-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Statapillar
              </a>
              : Robin Tully
            </p>
            <p className="mb-2">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="underline text-blue-400 hover:text-blue-500"
              >
                Teamstream
              </a>
              : Kris Coulson
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
              : Anh-Tuan Bui
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
              : Peter Pistorius
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
              Lee Staples
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
              : Christopher Burns
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
