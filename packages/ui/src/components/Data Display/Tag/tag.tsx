import { Tag as TagAnt } from 'antd';

/**
 * Props for the Tag component.
 */
export interface TagProps {
  /**
   * The content of the tag.
   */
  children: React.ReactNode;

  /**
   * The color of the tag.
   * Can be one of the following values:
   * - "blue"
   * - "purple"
   * - "cyan"
   * - "green"
   * - "magenta"
   * - "pink"
   * - "red"
   * - "orange"
   * - "yellow"
   * - "volcano"
   * - "geekblue"
   * - "lime"
   * - "gold"
   * - "success"
   * - "processing"
   * - "error"
   * - "default"
   * - "warning"
   */
  color?: "blue" | 
  "purple" | 
  "cyan" | 
  "green" | 
  "magenta" | 
  "pink" | 
  "red" | 
  "orange" | 
  "yellow" | 
  "volcano" | 
  "geekblue" | 
  "lime" | 
  "gold" | 
  "success" | 
  "processing" | 
  "error" | 
  "default" | 
  "warning";
}

/**
 * Used for marking and categorization.
 */
const Tag = ({ children, color = "blue" }: TagProps) => {
  return (
    <TagAnt color={color}>
      {children}
    </TagAnt>
  );
};

export default Tag