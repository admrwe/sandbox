export type CommonSizes = 'small' | 'medium' | 'large';

export type Spaces = 'half-x' | '1-x' | '1-and-half-x' | '2-x' | '3-x' | '5-x';

export type FontSizes =
  | 'three-quarter-x'
  | '1-x'
  | '1-and-eigth-x'
  | '1-and-half-x'
  | '2-x'
  | '3-x'
  | '5-x';

export interface CSSMarginProps {
  marginInlineStart?: Spaces;
  marginInlineEnd?: Spaces;
  marginInline?: Spaces;
  marginBlockStart?: Spaces;
  marginBlockEnd?: Spaces;
  marginBlock?: Spaces;
  margin?: Spaces;
}

/**
 * Accepts an object of CSSMarginProps inside a component to check if those props
 * are used, and if so, to apply inline styles with appropriate tokens.
 */
export const getCssMarginPropsStyle = (obj: CSSMarginProps) => {
  const spacePrefix = 'var(--space-';

  return {
    margin: obj.margin && `${spacePrefix}${obj.margin})`,
    marginBlock: obj.marginBlock && `${spacePrefix}${obj.marginBlock})`,
    marginInline: obj.marginInline && `${spacePrefix}${obj.marginInline})`,
    marginInlineStart:
      obj.marginInlineStart && `${spacePrefix}${obj.marginInlineStart})`,
    marginInlineEnd:
      obj.marginInlineEnd && `${spacePrefix}${obj.marginInlineEnd})`,
    marginBlockStart:
      obj.marginBlockStart && `${spacePrefix}${obj.marginBlockStart})`,
    marginBlockEnd:
      obj.marginBlockEnd && `${spacePrefix}${obj.marginBlockEnd})`,
  };
};
