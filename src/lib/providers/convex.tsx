'use client';

import { ChildrenProps } from '@/types';
import { CONVEX_URL } from '../config/env';
import { ConvexProvider, ConvexReactClient } from 'convex/react';

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({ children }: ChildrenProps) => {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
};

export default ConvexClientProvider;
