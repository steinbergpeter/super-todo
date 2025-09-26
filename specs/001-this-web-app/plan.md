# Implementation Plan: Discussions, Comments, and Likes Web App

**Branch**: `001-this-web-app` | **Date**: 2025-09-25 | **Spec**: [/Users/petermacbookpro/Developer/super-todo/specs/001-this-web-app/spec.md]

**Input**: Feature specification from `/specs/001-this-web-app/spec.md`


## Execution Flow (updated)

```text
1. Feature spec loaded and clarified
2. Technical context and constraints documented
3. Constitution Check completed and passed
4. Setup phase completed: mono repo structure, dependencies, linting/hooks, .env
5. Data model phase completed: centralized schema, Subscription entity added, migration validated
6. Contract phase completed: Zod schemas and API contract files for all endpoints
7. Ready for core implementation: authentication, CRUD endpoints, UI scaffolding, and testing
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:

- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)



## Summary (updated)

The project setup, data model, and contract phases are complete:

- Mono repo structure established (apps/client, apps/server, packages/db, packages/services, packages/ui, tests/*)
- Dependencies installed (React, Node.js, Prisma, Tailwindcss, Zod, Tanstack-Query)
- Linting, formatting, and pre-commit hooks configured at root
- .env file created for local PostgreSQL
- Centralized Prisma schema and models in packages/db, including Subscription entity
- Migration generated and validated
- Zod validation schemas and API contract files for all endpoints created

Next steps: Implement authentication, CRUD endpoints, UI scaffolding, and automated tests.

## Technical Context

**Performance Goals**: Responsive UI (<200ms p95), scalable to 10k concurrent users

**Constraints**: Must comply with constitutional principles (accessibility, reliability, security, privacy, maintainability, testability)

**Data Model**: Prisma schema includes User, Discussion, Comment, Like, and Subscription entities. Subscription is a first-class model to track user subscriptions to discussions.


### Setup Steps

- Revised folder structure for mono repo: apps/client, apps/server, packages/db, packages/services, packages/ui, tests/*
- Installed Prisma CLI in server app, generated Prisma client from shared schema
- Added Subscription entity to schema and updated relations
- Installed Prisma CLI in server app, generated Prisma client from shared schema
- Added Subscription entity to schema and updated relations

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Accessibility: All UI and output must be accessible (WCAG 2.1 AA).
- Security & Privacy: No personal data stored beyond session unless user consents. Data protected via secure authentication and authorization.
- Reliability: Optimistic updates must be reverted on failure, with user notification.
- Maintainability: Code and documentation must be clear, well-organized, and extensible.
- Testability: All features must be testable with automated tests.
- Strict formatting: Markdown, code blocks, and LaTeX must follow project rules.
- No high-number counting features allowed.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)

```text
apps/
├── client/              # React/TypeScript frontend
├── server/              # Node/TypeScript backend
packages/
├── services/            # Shared business logic/services
├── db/                  # Prisma schema and migrations
├── ui/                  # Shared UI components (if needed)
tests/
├── contract/
├── integration/
└── unit/
```

frontend/

├── src/

│   ├── components/

│   ├── pages/

│   └── services/
└── tests/

ios/ or android/

**Structure Decision**: [DEFAULT to Option 1 unless Technical Context indicates web/mobile app]

## Phase 0: Outline & Research

1. **Extract unknowns from Technical Context** above:

   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:

   - For each unknown in Technical Context:
     - Task: "Research {unknown} for {feature context}"
   - For each technology choice:
     - Task: "Find best practices for {tech} in {domain}"

3. **Consolidate findings** in `research.md` using format:

   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts

1. **Define data model** in `data-model.md`:

   - Based on feature spec and research
   - Include all entities, fields, relationships

2. **Design API contracts** in `/contracts/`:

   - OpenAPI or GraphQL schema files
   - Cover all endpoints, queries, mutations

3. **Generate contract tests** from contracts:

   - One test file per endpoint
   - Assert request/response schemas
   - Tests must fail (no implementation yet)

4. **Extract test scenarios** from user stories:

   - Each story → integration test scenario
   - Quickstart test = story validation steps

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh copilot`

     **IMPORTANT**: Execute it exactly as specified above. Do not add or remove any arguments.

   - If exists: Add only NEW tech from current plan

   - Preserve manual additions between markers

## Phase 2: Task Planning Approach

**Task Generation Strategy**:

- Load `.specify/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (contracts, data model, quickstart)
- Each contract → contract test task [P]
- Each entity → model creation task [P]
- Each user story → integration test task
- Implementation tasks to make tests pass

**Ordering Strategy**:

- TDD order: Tests before implementation
- Dependency order: Models before services before UI
- Mark [P] for parallel execution (independent files)

**Estimated Output**: 25-30 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation

These phases are beyond the scope of the /plan command

**Phase 3**: Task execution (/tasks command creates tasks.md)
**Phase 4**: Implementation (execute tasks.md following constitutional principles)
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking

Fill ONLY if Constitution Check has violations that must be justified

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |

## Progress Tracking

This checklist is updated during execution flow

**Phase Status**:

- [ ] Phase 0: Research complete (/plan command)
- [ ] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:

- [ ] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: PASS
- [ ] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---
*Based on Constitution v2.1.1 - See `/memory/constitution.md`*
