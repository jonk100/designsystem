---
description: Audit components for workspace compatibility and alignment with the rules herein. Optionally scope to a category, which would be a direct child of src/design..
---

# Workflow:

1. Read all files in the scoped directory + files in all subdirectories. 
2. List components in chat that are created but not completed or empty.
3. For .ts files:
  - read all exports. For each: 
    - consider if there's a better place to put each export.
    - if yes, report your opinion. if no, move to the next file
  For .css files:
  - check that all rules make sense to be scoped to the component, report issues, move to next file
  For .astro files:
  - If the file has a jsdoc comment, check it for consistency with the template defined in `AGENTS.md` (Section 4). Ensure the description is NOT a placeholder (like "Component description.") but rather briefly defines the purpose of the component and how it is generally used. Correct any issues.
  - If not, write a jsdoc comment following the template in `AGENTS.md` (Section 4), including a clear, meaningful purpose and usage description.
  - Ensure that the component strictly follows all established architectural patterns as defined in `AGENTS.md` (Section 5: Utilizing Established Patterns). This includes using `mergeClasses`, utilizing boolean styling props, extracting inline unions to shared types, and using frontmatter CSS imports.

If at any point you require or could benefit from additional context, ask for more context before continuing.

**Reference:** Always ensure you have read and internalized all component guidelines, file structures, and general rules established in `AGENTS.md` before performing an audit.

