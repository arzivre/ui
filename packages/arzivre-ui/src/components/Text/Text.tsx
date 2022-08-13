export interface TextProps {
  children: React.ReactNode
}

const Text = ({ children }: TextProps) => {
  return <p>{children}</p>
}

export default Text
