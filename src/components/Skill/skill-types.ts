import { ReactNode } from "react";

export type Skill = {
  name: string;
  icon: ReactNode;
  color: string;
  animationType: string;
};

export type SkillCategory = "Languages" | "Frontend" | "Backend" | "Tools";

export type SkillData = Record<SkillCategory, Skill[]>;
