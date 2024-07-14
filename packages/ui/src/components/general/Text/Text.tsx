import { Typography } from 'antd';
const { Text: TextAnt, Title: TitleAnt } = Typography;

export interface TextProps {
  /**
   * The text content.
   */
  text: string
  /**
   * The type of the text. Can be 'secondary', 'success', 'warning', or 'danger'.
   */
  type?: 'secondary' | 'success' | 'warning' | 'danger'
  /**
   * Whether the text should be bold. Optional, defaults to false.
   */
  isBold?: boolean
  /**
   * The size of the title. Can be 2, 3, 4, 5, or null. Optional.
   */
  titleSize?: 2 | 3 | 4 | 5 | null
}

/**
 * A component for displaying a text and titles.
 */
const Text = ({ type = undefined, text, isBold = false, titleSize = null }: TextProps) => {
  if(titleSize){
    return (
      <TitleAnt level={titleSize} type={type}>
        {text}
      </TitleAnt>
    )
  }

  return (
    <TextAnt
      type={type}
      strong={isBold}
    >
      {text}
    </TextAnt>
  );
};

export default Text;