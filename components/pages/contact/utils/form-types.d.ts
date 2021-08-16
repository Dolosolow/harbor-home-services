export interface CBProps {
  items: Array<string>;
  onCheckboxChange: (selectedItems: string[]) => void;
  label?: string;
  isInvalid: boolean;
  withInputField?: boolean;
}
