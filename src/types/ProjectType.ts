import { ReactNode } from "react";

export type ProjectType = {
  code: string;
  title: string;
  image: string;
  description: string;
  why?: string;
  press?: string;
  technology?: ReactNode;
  note?: string;
};
