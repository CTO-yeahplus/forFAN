export type Phase = "Before" | "During" | "After";

export type CardItem = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  icon?: string;
  phase?: Phase;
};

export type JourneyItem = {
  phase: Phase;
  icon: string;
  title: string;
  bullets: string[];
};

export type CopyBucket = {
  icon: string;
  title: string;
  lines: string[];
};

export type LogicItem = {
  icon: string;
  title: string;
  desc: string;
  bullets: string[];
};
