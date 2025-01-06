import { ReactNode } from "react";

export enum Note {
  inProgress = "In progress",
  done = "(Done)",
}

export type ProjectType = {
  code: string;
  title: string;
  image: string;
  description: string;
  why?: string;
  press?: string;
  technology?: ReactNode;
  note?: Note;
  url?: string;
};
