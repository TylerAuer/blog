export const H1 = (props: { children: React.ReactNode }) => (
  <_H level={1} {...props} />
)
export const H2 = (props: { children: React.ReactNode }) => (
  <_H level={2} {...props} />
)
export const H3 = (props: { children: React.ReactNode }) => (
  <_H level={3} {...props} />
)
export const H4 = (props: { children: React.ReactNode }) => (
  <_H level={4} {...props} />
)
export const H5 = (props: { children: React.ReactNode }) => (
  <_H level={5} {...props} />
)
export const H6 = (props: { children: React.ReactNode }) => (
  <_H level={6} {...props} />
)

export const P = (props: { children: React.ReactNode }) => (
  <p className="text-base text-gray-700 py-2">
    {props.children}
  </p>
)

export const A = (props: {
  children: React.ReactNode
  href: string
  target?: string
  rel?: string
}) => (
  <a
    className="text-blue-600 hover:text-blue-800 underline"
    href={props.href}
    target={props.target}
    rel={props.rel}
  >
    {props.children}
  </a>
)

function _H(props: {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
}) {
  switch (props.level) {
    case 1:
      return <h1 className="text-4xl font-bold">{props.children}</h1>
    case 2:
      return <h2 className="text-3xl font-bold">{props.children}</h2>
    case 3:
      return <h3 className="text-2xl font-bold">{props.children}</h3>
    case 4:
      return <h4 className="text-xl font-bold">{props.children}</h4>
    case 5:
      return <h5 className="text-lg font-bold">{props.children}</h5>
    case 6:
      return <h6 className="text-base font-bold">{props.children}</h6>
  }
}
