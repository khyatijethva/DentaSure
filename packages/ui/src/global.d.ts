declare module "*.css" {
  const styles: { readonly [className: string]: string };
  export default styles;
}

declare module "*.svg" {
  import type { FC, SVGProps } from "react";
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
