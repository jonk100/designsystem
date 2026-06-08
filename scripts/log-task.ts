/**
 * Append a worklog entry.
 */

import fs from 'node:fs';

const entry = `
## ${new Date().toISOString()}

Task completed

`;

fs.appendFileSync(
  './.agents/worklog.md',
  entry
);