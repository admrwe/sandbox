import { ComponentProps, forwardRef, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import styles from './DefinitionList.module.css';
import { CSSMarginProps, getCssMarginPropsStyle } from '../utils';
import { Text } from '../Text';

interface DefinitionListProps extends CSSMarginProps, ComponentProps<'dl'> {
  /**
   * The DefinitionList.Items to display.
   */
  children: ReactNode;

  /**
   * Diplays items horizontally.,
   */
  horizontal?: boolean;

  /**
   * Display the label and content inline.
   */
  inlineLabels?: boolean;
}

const definitionListStyles = cva(styles['definition-list'], {
  variants: {
    horizontal: { true: styles.horizontal },
    inlineLabels: { true: styles['inline-labels'] },
  },
  defaultVariants: { horizontal: false, inlineLabels: false },
});

export const DefinitionList = forwardRef<HTMLDListElement, DefinitionListProps>(
  (props: DefinitionListProps, forwardedRef) => {
    const {
      children,
      horizontal = false,
      inlineLabels = false,
      className,
      marginInlineStart,
      marginInlineEnd,
      marginInline,
      marginBlockStart,
      marginBlockEnd,
      marginBlock,
      margin,
      ...remainingProps
    } = props;

    return (
      <dl
        ref={forwardedRef}
        className={definitionListStyles({
          horizontal,
          inlineLabels,
          className,
        })}
        style={{
          flexDirection: horizontal ? 'row' : 'column',
          ...remainingProps.style,
          ...getCssMarginPropsStyle({
            marginInlineStart,
            marginInlineEnd,
            marginInline,
            marginBlockStart,
            marginBlockEnd,
            marginBlock,
            margin,
          }),
        }}
        {...remainingProps}
      >
        {children}
      </dl>
    );
  }
);

interface DefinitionListItemProps extends ComponentProps<'div'> {
  /**
   * The content of the item.
   */
  children: ReactNode;

  /**
   * The label of the item.
   */
  label: ReactNode;
}

const definitionListItemStyles = cva(styles['item'], {
  variants: {},
  defaultVariants: {},
});

export const DefinitionListItem = forwardRef<
  HTMLDivElement,
  DefinitionListItemProps
>((props: DefinitionListItemProps, forwardedRef) => {
  const { children, label, className, ...remainingProps } = props;

  const labelIsString = typeof label === 'string';
  const getLabel = () => {
    if (labelIsString) {
      return (
        <Text fontWeight="bold" size="1-x">
          {label}
        </Text>
      );
    } else {
      return label;
    }
  };

  const childrenIsString = typeof children === 'string';
  const getChildren = () => {
    if (childrenIsString) {
      return <Text size="1-and-eighth-x">{children}</Text>;
    } else {
      return children;
    }
  };

  return (
    <div
      ref={forwardedRef}
      className={definitionListItemStyles({ className })}
      {...remainingProps}
    >
      <dt className={styles.label}>{getLabel()}</dt>
      <dd className={styles.content}>{getChildren()}</dd>
    </div>
  );
});
