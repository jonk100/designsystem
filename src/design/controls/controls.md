# Controls

The Controls category contains interactive form elements, selection indicators, and utility group wrappers designed to facilitate user input and selection workflows. These components standardize focus behaviors, visual states, and device layouts, ensuring a highly responsive, accessible experience across various screen sizes. By wrapping native browser elements and augmenting them with unified CSS tokens and lightweight client scripts, the controls ensure robust keyboard navigation, native validation compatibility, and smooth transitions throughout the design system.

**Major Areas Documented:**
- **Unified Form State Modifiers**: Consistent BEM classes for handling disabled, hover, active, focused, and invalid states across all interactive input controls.
- **Visual Group Merging**: Layout wrappers (ButtonGroup and InputGroup) that collapse internal border radiuses and overlap adjacent boundaries to assemble multiple elements into a unified control interface.
- **Progressive Client Search**: Component patterns (Combobox and Multiselect) that enrich native single and multiple select inputs with real-time text filtration, keyboard navigation, and chip overlays.
- **Accessible Native Anchoring**: Using implicit label structures and aria-pressed/checked indicators to coordinate native focus loops and screen reader communications.

## Components

| Component | Type | Shared Props | Solo Props |
| :--- | :--- | :--- | :--- |
| [Button](file:///home/jk/Code/DesignSystem/src/design/controls/button/Button.astro) | Primitive | `size`, `variant`, `disabled`, `invalid`, `name` | `href`, `iconOnly`, `toggle`, `active` |
| [ButtonGroup](file:///home/jk/Code/DesignSystem/src/design/controls/button-group/ButtonGroup.astro) | Primitive | `size` | (none) |
| [Checkbox](file:///home/jk/Code/DesignSystem/src/design/controls/checkbox/Checkbox.astro) | Primitive | `disabled`, `invalid`, `name`, `value` | `checked` |
| [Collapsible](file:///home/jk/Code/DesignSystem/src/design/controls/collapsible/Collapsible.astro) | Primitive | (none) | `title`, `open`, `gap` |
| [Combobox](file:///home/jk/Code/DesignSystem/src/design/controls/combobox/Combobox.astro) | Primitive | `disabled`, `invalid`, `name` | `options`, `selected`, `placeholder` |
| [DatePicker](file:///home/jk/Code/DesignSystem/src/design/controls/date-picker/DatePicker.astro) | Primitive | `size`, `variant`, `disabled`, `readonly`, `invalid`, `name`, `value` | (none) |
| [Input](file:///home/jk/Code/DesignSystem/src/design/controls/input/Input.astro) | Primitive | `size`, `variant`, `disabled`, `readonly`, `invalid`, `name`, `value` | `type` |
| [InputGroup](file:///home/jk/Code/DesignSystem/src/design/controls/input-group/InputGroup.astro) | Primitive | (none) | (none) |
| [Multiselect](file:///home/jk/Code/DesignSystem/src/design/controls/multiselect/Multiselect.astro) | Primitive | `disabled`, `invalid`, `name`, `label` | `options`, `selected`, `placeholder` |
| [Radio](file:///home/jk/Code/DesignSystem/src/design/controls/radio/Radio.astro) | Primitive | `disabled`, `invalid`, `name`, `value` | `checked` |
| [RadioGroup](file:///home/jk/Code/DesignSystem/src/design/controls/radio-group/RadioGroup.astro) | Primitive | `name` | `orientation`, `gap` |
| [RangeSlider](file:///home/jk/Code/DesignSystem/src/design/controls/range-slider/RangeSlider.astro) | Primitive | (none) | `label`, `valLo`, `valHi`, `min`, `max`, `step`, `prefix` |
| [Search](file:///home/jk/Code/DesignSystem/src/design/controls/search/Search.astro) | Primitive | `size`, `variant`, `disabled`, `readonly`, `invalid`, `name`, `value` | `placeholder` |
| [Select](file:///home/jk/Code/DesignSystem/src/design/controls/select/Select.astro) | Primitive | `size`, `variant`, `disabled`, `invalid`, `name` | `placeholder` |
| [Slider](file:///home/jk/Code/DesignSystem/src/design/controls/slider/Slider.astro) | Primitive | `name`, `value` | `label`, `min`, `max`, `step` |
| [Switch](file:///home/jk/Code/DesignSystem/src/design/controls/switch/Switch.astro) | Primitive | `disabled`, `name`, `value` | `checked` |

*(Note: All control components implicitly inherit `BaseComponentProps` which includes standard properties like `class`, `class:list`, `animate`, `onScroll`, and `effects`.)*

---

## Component Details

### Button

Path: [Button.astro](file:///home/jk/Code/DesignSystem/src/design/controls/button/Button.astro)

#### Intentional User Action
The `Button` component triggers immediate developer commands (such as form submissions or dialog opens) or navigates between system routes. It standardizes click visual feedbacks, borders, and button geometries, ensuring high contrast levels and keyboard outlines.

#### Toggle and State Tracking
To support controls that retain a pressed state (like audio mutes or parameter filters), the component integrates toggle behaviors. It programmatically manages state transitions, adjusting screen reader attributes and theme border stylings dynamically.

---

### ButtonGroup

Path: [ButtonGroup.astro](file:///home/jk/Code/DesignSystem/src/design/controls/button-group/ButtonGroup.astro)

#### Contextual Segmented Control
The `ButtonGroup` component aggregates adjacent related button choices into a single contiguous segment. This helps users quickly compare and toggle options (such as alignment options or date filters) without cluttering the screen layout.

#### Interactive Border Overlap
By resetting internal radii and applying negative margin offsets, the group merges sibling borders cleanly. When a child button is focused, hovered, or active, the group raises its z-index so its focus outlines overlay neighbors properly.

---

### Checkbox

Path: [Checkbox.astro](file:///home/jk/Code/DesignSystem/src/design/controls/checkbox/Checkbox.astro)

#### Binary Choice Selection
The `Checkbox` component collects standalone binary preferences (such as newsletter subscriptions or terms of service agreements) in form fields. It wraps native hidden inputs to ensure accessible screen reader access while displaying a highly styled check indicator.

#### Visual State Springing
When checked, the indicator box transitions background states and pops a check icon using spring timing curves. If the component is marked invalid, it highlights border frameworks to draw attention to required choices.

---

### Collapsible

Path: [Collapsible.astro](file:///home/jk/Code/DesignSystem/src/design/controls/collapsible/Collapsible.astro)

#### Progressive Detail Disclosure
The `Collapsible` component hides verbose body details behind a clickable summary header title, conserving vertical viewport layout space. Clicking the summary toggles the disclosure panel natively and rotates chevron indicator icons smoothly.

#### Layout Integration Surface
It packages disclosures in structured surface layers (via `Paper`), providing standard backdrops, padding, and subtle elevations that visually separate collapsible sections from the surrounding page contents.

---

### Combobox

Path: [Combobox.astro](file:///home/jk/Code/DesignSystem/src/design/controls/combobox/Combobox.astro)

#### Searchable Option Selection
The `Combobox` component combines single-selection dropdown selectors with text-filtering search fields. This helps users quickly filter down options in long choice lists (such as selection menus for states, currencies, or users), preventing list scanning exhaustion.

#### Form-State Synchronization
By synchronizing search selections with hidden native inputs, the component maintains native browser form submissions, validation API bindings, and browser autocomplete states.

---

### DatePicker

Path: [DatePicker.astro](file:///home/jk/Code/DesignSystem/src/design/controls/date-picker/DatePicker.astro)

#### Standardized Calendar Picking
The `DatePicker` component standardizes date selections using browser-native calendar fields. This guarantees built-in keyboard adjustments, screen reader nodes, and native date selection drawers on mobile devices.

#### Custom Webkit Integration
It overrides native browser calendar pickers using CSS filter overrides, muting native calendar glyph indicators to fit dark and light theme styles.

---

### Input

Path: [Input.astro](file:///home/jk/Code/DesignSystem/src/design/controls/input/Input.astro)

#### Single-line Text Collection
The `Input` component collects simple alphanumeric text values (such as names, emails, and passwords) from user input forms. It unifies input sizing modifiers, border colors, and focus rings.

#### Inline Modifiers and States
It standardizes outline widths, focus halos, and disabled/readonly backdrops. When disabled or marked read-only, it dims input opacity and applies distinct background layers to denote lack of editability.

---

### InputGroup

Path: [InputGroup.astro](file:///home/jk/Code/DesignSystem/src/design/controls/input-group/InputGroup.astro)

#### Segmented Form Actions
The `InputGroup` component groups text fields adjacent to protocol tags, unit labels, or button triggers. By collapsing internal border radiuses, it packages inputs and action triggers into a single visual segment.

#### Child Flex Coordination
It coordinates flexbox widths inside the container, automatically stretching input fields to fill horizontal space while keeping buttons or addons at their compact fixed visual bounds.

---

### Multiselect

Path: [Multiselect.astro](file:///home/jk/Code/DesignSystem/src/design/controls/multiselect/Multiselect.astro)

#### Searchable Interval Selection
The `Multiselect` component selects multiple options from a dropdown list using real-time search filtering. It filters option arrays quickly, saving users from having to scroll through long option menus.

#### Dismissible Chip Organization
Selections are displayed inside the input trigger as interactive dismissible chips. Users can easily view their choices and click the close icon on individual chips to remove them.

---

### Radio

Path: [Radio.astro](file:///home/jk/Code/DesignSystem/src/design/controls/radio/Radio.astro)

#### Mutually Exclusive Choice
The `Radio` component lets users select a single choice from a list of options. It wraps native radio inputs for accessibility while rendering a styled outer circle and a gold center selection dot.

#### Springing Check Dot
When selected, the center dot scales up from a smaller size using spring transition functions. It highlights option indicators and supports native keyboard arrow key navigation.

---

### RadioGroup

Path: [RadioGroup.astro](file:///home/jk/Code/DesignSystem/src/design/controls/radio-group/RadioGroup.astro)

#### Selection Layout Coordination
The `RadioGroup` component organizes related radio options into structured vertical lists or horizontal rows with unified spacing. It sets role attributes to indicate option relationships to screen readers.

#### Auto-Propagated Name Routing
The group automatically distributes a single `name` prop to all nested native radio inputs via scripts, eliminating the need to write duplicate name attributes on individual radio children.

---

### RangeSlider

Path: [RangeSlider.astro](file:///home/jk/Code/DesignSystem/src/design/controls/range-slider/RangeSlider.astro)

#### Numeric Interval Boundaries
The `RangeSlider` component selects numeric intervals (such as price budgets or time bounds) between low and high limits. It displays the active value range and renders a gold fill line between the handles.

#### Overlapping Handle Physics
By stacking two range inputs, it allows users to grab either handle. An inline script prevents handles from crossing over, shifting z-indexes dynamically so active thumbs remain in focus.

---

### Search

Path: [Search.astro](file:///home/jk/Code/DesignSystem/src/design/controls/search/Search.astro)

#### Inline Search Prompts
The `Search` component collects user query inputs. It embeds a search icon inside the field, standardizing input outlines and clear-field actions.

#### Spacing and Icon Alignment
The search icon is positioned absolutely inside the input wrapper. The component adjusts left-hand padding based on the size modifier so text never overlaps the icon.

---

### Select

Path: [Select.astro](file:///home/jk/Code/DesignSystem/src/design/controls/select/Select.astro)

#### Structured Menu Picking
The `Select` component renders a single-option select dropdown. It wraps a native HTML select element, preserving default browser select menus, keyboard adjustments, and screen reader nodes.

#### Custom Chevron Layering
It hides default browser dropdown indicators, replacing them with a custom chevron icon. Sizing modifiers automatically adjust paddings to prevent options from overlapping the chevron.

---

### Slider

Path: [Slider.astro](file:///home/jk/Code/DesignSystem/src/design/controls/slider/Slider.astro)

#### Linear Value Selection
The `Slider` component selects a single numeric value by dragging a thumb handle horizontally. It displays current value numbers and lists boundaries at track edges.

#### Progress Fill Tracking
An inline script tracks value modifications, updating the width of the gold track fill dynamically as the handle is dragged to give instant visual feedback.

---

### Switch

Path: [Switch.astro](file:///home/jk/Code/DesignSystem/src/design/controls/switch/Switch.astro)

#### Instant Status Toggling
The `Switch` component enables users to toggle settings on or off instantly. It implements switch roles and checked attributes on native buttons to provide keyboard selection and screen reader compatibility.

#### Slider Track Translation
A BEM modifier slides the thumb handle horizontally across the track while shifting background colors to gold to signal active status.
