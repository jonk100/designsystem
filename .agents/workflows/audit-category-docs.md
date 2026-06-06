---
description: Audit or generate comprehensive category-level documentation for a specific design system category.
---

# Workflow:

1. Identify the target category directory (e.g., `src/design/controls`, `src/design/display`).
2. Read the files within the category directory to discover all existing components and gather context on their functionality.
3. Analyze the component properties to distinguish between core **shared properties** passed down across most components in the category versus component-specific **solo properties**.
4. Check if a `[category-name].md` documentation file exists in the root of the category directory.
5. If the documentation file exists:
   - Audit it to ensure it strictly follows the established layout template defined in `src/design/typography/typography.md`.
   - Verify that the Components Matrix Table is up to date with the latest component props, newly added components, and correct component categorizations (Primitive vs. Role-based).
   - Ensure every component has its File Path, Purpose, Role, and Implementation Notes documented. Update any missing sections.
6. If the documentation file does NOT exist:
   - Generate a new `[category-name].md` utilizing the exact layout template from `src/design/typography/typography.md`.
   - Write an introduction defining the category and its major architectural principles.
   - Build a comprehensive Components Matrix Table detailing Component Name, Type (Primitive or Role-based), Shared Props, and Solo Props.
   - Document the File Path, Purpose, Role, and Specific Implementation Notes for each component within the category. Use highly descriptive, SEO-friendly `####` headers based on the specific content of the component rather than repeating generic templates like "Purpose".

If at any point you require or could benefit from additional context on what a specific component does, view its `*.astro` file to gather prop definitions, JSDoc comments, and internal logic before making assumptions.

**Reference:** Always align with the established documentation template and matrix structure found at `src/design/typography/typography.md`.
