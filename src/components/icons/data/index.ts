import type { PxlKitData } from "@pxlkit/core";
import { User as UserIconData } from "@pxlkit/social";

import {
  homeIcon,
  projectsIcon,
  blogIcon,
  aboutIcon,
  contactIcon,
  gridIcon,
  externalIcon,
} from "./navigation";

import {
  cartIcon,
  medicalIcon,
  navigationIcon,
  buildingIcon,
  globeIcon,
  documentIcon,
  chartIcon,
} from "./projects";

import { githubIcon, linkedinIcon } from "./social";

export const iconMap: Record<string, PxlKitData> = {
  user: UserIconData,
  cart: cartIcon,
  medical: medicalIcon,
  navigation: navigationIcon,
  building: buildingIcon,
  globe: globeIcon,
  document: documentIcon,
  chart: chartIcon,
  home: homeIcon,
  projects: projectsIcon,
  blog: blogIcon,
  about: aboutIcon,
  contact: contactIcon,
  grid: gridIcon,
  external: externalIcon,
  github: githubIcon,
  linkedin: linkedinIcon,
};
