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
