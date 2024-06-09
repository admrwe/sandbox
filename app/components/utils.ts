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
export const getCssMarginPropsStyle = (obj: CSSMarginProps) => ({
  marginInlineStart:
    obj.marginInlineStart && `var(--space-${obj.marginInlineStart})`,
  marginInlineEnd: obj.marginInlineEnd && `var(--space-${obj.marginInlineEnd})`,
  marginInline: obj.marginInline && `var(--space-${obj.marginInline})`,
  marginBlockStart:
    obj.marginBlockStart && `var(--space-${obj.marginBlockStart})`,
  marginBlockEnd: obj.marginBlockEnd && `var(--space-${obj.marginBlockEnd})`,
  marginBlock: obj.marginBlock && `var(--space-${obj.marginBlock})`,
  margin: obj.margin && `var(--space-${obj.margin})`,
});
