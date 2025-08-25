// Re-export types
export type { Resource as Tool, Tag } from '../types';
export { tagColorMap } from '../types';

// Re-export all tool categories
export { fontsAndTypography } from './fonts-and-typography';
export { designAndUI } from './design-and-ui';
export { aiAndData } from './ai-and-data';
export { documentationAndLearning } from './documentation-and-learning';
export { audioAndVideo } from './audio-and-video';
export { developmentLibrariesAndFrameworks } from './development-libraries-and-frameworks';
export { openSourceToolsAndUtilities } from './open-source-tools-and-utilities';

import { aiAndData } from './ai-and-data';
import { audioAndVideo } from './audio-and-video';
import { designAndUI } from './design-and-ui';
import { developmentLibrariesAndFrameworks } from './development-libraries-and-frameworks';
import { documentationAndLearning } from './documentation-and-learning';
import { fontsAndTypography } from './fonts-and-typography';
import { openSourceToolsAndUtilities } from './open-source-tools-and-utilities';

const allTags = [
  ...new Set([
    ...fontsAndTypography.flatMap((tool) => tool.tags),
    ...designAndUI.flatMap((tool) => tool.tags),
    ...aiAndData.flatMap((tool) => tool.tags),
    ...documentationAndLearning.flatMap((tool) => tool.tags),
    ...audioAndVideo.flatMap((tool) => tool.tags),
    ...developmentLibrariesAndFrameworks.flatMap((tool) => tool.tags),
    ...openSourceToolsAndUtilities.flatMap((tool) => tool.tags),
  ]),
].sort();

export { allTags };
