import { PRIMARY_LIGHT } from "../../tokens"

interface TagProps {
  children: React.ReactNode
}

export const Tag: React.FC<TagProps> = ({ children }) => (
  <span
    style={{
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: PRIMARY_LIGHT,
      display: "block",
      marginBottom: 8
    }}
  >
    {children}
  </span>
)

export default Tag
