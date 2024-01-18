import { ReactNode } from 'react';
import * as Select from '@radix-ui/react-select';
import { CaretDown, Check } from '@phosphor-icons/react';
import styles from './SelectController.module.scss';

type Items = Array<{
  value: string;
  name: string;
}>;

type SelectControllerProps = Select.SelectProps & {
  placeholder: string;
  items: Items;
  className?: string;
};

type SelectItemProps = Select.SelectItemProps & { children: ReactNode };

const SelectItem = (props: SelectItemProps) => {
  const { children, ...rest } = props;
  return (
    <Select.Item className={styles.item} {...rest}>
      <Select.ItemText className={styles['item-text']}>
        {children}
      </Select.ItemText>
      <Select.ItemIndicator>
        <Check size={14} />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

export function SelectController(props: SelectControllerProps) {
  const { placeholder, className = '', items, ...rest } = props;

  return (
    <Select.Root {...rest}>
      <Select.Trigger className={`${styles.trigger} ${className}`}>
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <CaretDown size={14} />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          sideOffset={4}
          position='popper'
          className={styles.content}
        >
          <Select.Viewport className={styles.viewport}>
            {items.map((item) => (
              <SelectItem value={item.value} key={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
