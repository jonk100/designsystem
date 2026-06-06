# Bootstrap Roadmap Instructions

你当前的任务是为这个项目生成真正可执行的定制化路线图，并直接重写 `.solopreneur/roadmap.csv`。

## 必做前置阅读
- 阅读当前项目目录中的 README、docs、源码入口以及 `.solopreneur/README.md`（如果存在）。
- 阅读 `.solopreneur/roadmap-methodology.md`，按项目真实目标选择适用的推进框架。
- 理解这个项目当前要交付什么、服务谁、是否需要对外获客或销售，以及当前文件里已经有哪些线索。

## 你的唯一交付物
- 直接重写 `.solopreneur/roadmap.csv`。
- 不要只在终端输出路线图建议。
- 不要把本文件内容、提示词模板或解释性说明写回 CSV。

## CSV 硬约束
1. 保留 CSV 表头，字段顺序必须严格是：`id,title,description,stage,dependencies,agentCli,agentPrompt,status,createdAt,completedAt`。
2. 生成 2 到 8 个环节，数量应服从真实交付路径，不为套模板增加任务。
3. 标题、描述、agentPrompt 全部使用中文。
4. `stage` 使用用户能理解的推进阶段名称；如果这是面向外部用户并需要获客或转化的产品，优先使用：`问题与客户发现`、`产品与 MVP`、`营销与销售`、`反馈与规模化`。
5. 每一行 `agentCli` 都写 `agy`。
6. `dependencies` 必须反映真实前置关系；第一步留空，后续按需要依赖前面环节的 id。
7. `status` 全部写 `Pending`，`completedAt` 留空，`createdAt` 写当前 ISO 时间。
8. 面向外部用户并需要获客或转化的产品，默认覆盖四个方法论阶段；内部工具、迁移、研究、内容或基础设施项目不得被强行改写成营销销售路线。
9. 把 Build -> Sell -> Learn -> Improve 作为底层审查：商业化产品不能只有 Build，必须让用户后续能触达市场、吸收反馈并调整路线图。
10. 不要把四阶段方法论写成用户需要维护的解释任务；它只应用来生成更好的下一步和环节。
11. 每个 `agentPrompt` 都必须要求后续 Agent 直接创建或修改项目本地文件，并在适用时执行最窄验证命令。
12. 不要生成空泛咨询任务；每个环节都必须有看得见的本地交付物。

## 结束前自检
- 重新读取 `.solopreneur/roadmap.csv`。
- 必须运行 `node .solopreneur/validate-roadmap.cjs --mode bootstrap` 校验最终路线图。
- 如果校验失败，按终端输出修正 `.solopreneur/roadmap.csv` 后重新运行，直到通过。
- 只有校验通过后，才允许在最终回复中说明任务完成。
- 确认 CSV 中没有残留“生成初始路线图”、本文件原文或提示词模板。