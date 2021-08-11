import { Children, isValidElement, cloneElement } from "react";

const addPropsToChildren = (reactChildren: React.ReactNode, props: { [key: string]: any }) => {
  return Children.map(reactChildren, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...props });
    }
    return child;
  });
};

export { addPropsToChildren };
