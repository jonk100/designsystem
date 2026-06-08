import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const design = defineCollection({
  loader: glob({ pattern: "*.mdx", base: "./src/content/design" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'analysis',         // BarChart, DescriptionList, Feed, KeyValueList, PieChart, Sparkline, Table, Timeline, TreeView
      'animation',        // 
      'controls',         // Button, ButtonGroup, Input, InputGroup, Select, Combobox, Checkbox, Radio, RadioGroup, Switch, DatePicker, Search, Collapsible, Slider, RangeSlider, Multiselect
      'display',          // Badge, Tag, Avatar, Icon, Indicator, Dot, Chip, Counter, Frame
      'feedback',         // Toast, Alert, AlertDialog, Spinner, Skeleton, Progress, Banner
      'layout',           // Separator, Spacer, Grid, Columns, Stack, Inline, Center, Container, AspectRatio, ScrollArea, Box
      'media',            // Image, Gallery, Waveform, Audio, Video, AvatarGroup, FilePreview, Lightbox, Cropper
      'nav',              // Header, Footer, Navbar, Breadcrumbs, Tabs, Pagination, Stepper, Menu, SkipLink
      'overlays',         // Modal, Popover, Tooltip, Sheet, DropdownMenu, Drawer, ContextMenu, CommandPalette
      'records',          // Stat, KeyValue, Event, Metric, ResultItem, TimelineItem, Article
      'semantics',        // Heading, Prose, Quote, Callout
      'surfaces',         // Paper, Card, CardHeader, CardContent, CardFooter, Screen, BentoCell, BentoGrid, Section, Panel, Well, Backdrop, Tile
      'typography',       // Text, Code, Link, Caption, Label, Kbd
    ]),
    related: z.array(z.string()).optional(),
    dependencies: z.array(z.string()).optional(),
    type: z.enum(["primitive", "role-based", "other"]).optional(),
    propsTable: z.array(z.object({
      name: z.string(),
      description: z.string(),
      options: z.array(z.string()).optional(),
      level: z.enum(["component", "category", "global"]).optional(),
      type: z.string(),
      defaultValue: z.string().optional(),
    })).optional(),
    icon: z.string().optional()
  })
});

export const collections = { design };