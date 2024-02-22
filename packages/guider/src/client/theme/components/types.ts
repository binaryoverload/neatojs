import type { ReactNode } from 'react';

type NestedLinkComponentChildren = LinkComponent | SeperatorComponent;

interface ExtraLinkOptions {
  icon?: string;
  newTab?: boolean;
}

interface LinkOptions {
  title: string;
  to: string;
  icon?: string;
  newTab?: boolean;
}

interface NestedLinkOptions {
  title: string;
  to?: string;
  icon?: string;
  newTab?: boolean;
  items: LinkComponent[];
}

export interface LinkComponent {
  type: 'link';
  title: string;
  to: string;
  newTab: boolean;
  icon?: string;
}

export interface NestableLinkComponent {
  type: 'nested-link';
  title: string;
  to?: string;
  newTab: boolean;
  icon?: string;
  items: NestedLinkComponentChildren[];
}

export interface LinkBuilder {
  (title: string, url: string, ops?: ExtraLinkOptions): LinkComponent;
  (options: LinkOptions): LinkComponent;
  nested: {
    (
      title: string,
      url: string,
      items: NestedLinkComponentChildren[],
    ): NestableLinkComponent;
    (
      title: string,
      items: NestedLinkComponentChildren[],
    ): NestableLinkComponent;
    (options: NestedLinkOptions): NestableLinkComponent;
  };
}

type GroupComponentChildren =
  | NestableLinkComponent
  | LinkComponent
  | SeperatorComponent
  | CustomComponentComponent;

interface GroupOptions {
  title: string;
  items: GroupComponentChildren[];
}

export interface GroupComponent {
  type: 'group';
  title: string;
  items: GroupComponentChildren[];
}

export interface GroupBuilder {
  (title: string, items: GroupComponentChildren[]): GroupComponent;
  (options: GroupOptions): GroupComponent;
}

export interface SeperatorComponent {
  type: 'seperator';
}

export type SeperatorBuilder = () => SeperatorComponent;

interface CustomComponentOptions {
  component: () => ReactNode;
}

export interface CustomComponentComponent {
  type: 'component';
  component: () => ReactNode;
}

export interface CustomComponentBuilder {
  (component: () => ReactNode): CustomComponentComponent;
  (options: CustomComponentOptions): CustomComponentComponent;
}

type DirectoryComponentChildren =
  | NestableLinkComponent
  | LinkComponent
  | SeperatorComponent
  | CustomComponentComponent
  | GroupComponent;

interface DirectoryOptions {
  id: string;
  sidebarItems: DirectoryComponentChildren[];
}

export interface DirectoryComponent {
  id: string;
  sidebarItems: DirectoryComponentChildren[];
}

export type DirectoryBuilder = (
  options: DirectoryOptions,
) => DirectoryComponent;

export type TopNavChildren =
  | LinkComponent
  | SeperatorComponent
  | CustomComponentComponent;

export type TabsChildren = LinkComponent | CustomComponentComponent;
