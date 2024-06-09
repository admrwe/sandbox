export type Spaces = 'half-x' | '1-x' | '1-and-half-x' | '2-x' | '3-x' | '5-x';

export type FontSizes =
  | 'three-quarter-x'
  | '1-x'
  | '1-and-eigth-x'
  | '1-and-half-x'
  | '2-x'
  | '3-x'
  | '5-x';

export interface CommonCSSProps {
  marginInlineStart?: Spaces;
  marginInlineEnd?: Spaces;
  marginInline?: Spaces;
  marginBlockStart?: Spaces;
  marginBlockEnd?: Spaces;
  marginBlock?: Spaces;
  margin?: Spaces;
}

/**
 * Accepts a ...remainingProps spread inside a component to check if css props
 * are used, and if so, to apply inline styles with appropriate tokens.
 */
export const getCommonCssPropStyles = (spread: any) => ({
  marginInlineStart:
    spread.marginInlineStart && `var(--space-${spread.marginInlineStart})`,
  marginInlineEnd:
    spread.marginInlineEnd && `var(--space-${spread.marginInlineEnd})`,
  marginInline: spread.marginInline && `var(--space-${spread.marginInline})`,
  marginBlockStart:
    spread.marginBlockStart && `var(--space-${spread.marginBlockStart})`,
  marginBlockEnd:
    spread.marginBlockEnd && `var(--space-${spread.marginBlockEnd})`,
  marginBlock: spread.marginBlock && `var(--space-${spread.marginBlock})`,
  margin: spread.margin && `var(--space-${spread.margin})`,
});
