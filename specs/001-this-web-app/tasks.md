# Task List: Discussions, Comments, and Likes Web App

**Feature Branch**: `001-this-web-app`
**Spec**: `/specs/001-this-web-app/spec.md`
**Plan**: `/specs/001-this-web-app/plan.md`

---

## Setup & Initialization

- T001: Initialize mono repo structure (client/server/packages/tests)
- T002: Install dependencies (React, Node.js, Prisma, Tailwindcss, Zod, Tanstack-Query)
- T003: Set up linting, formatting, and pre-commit hooks

---

## Data Model & Contracts

- T004 [P]: Create PostgreSQL schema and Prisma models for Discussions, Comments, Likes, Users
- T005 [P]: Generate initial migration and apply to dev database
- T006 [P]: Define Zod validation schemas for all entities
- T007 [P]: Create API contract files for all endpoints (REST/GraphQL)

---

## Core Implementation

- T008: Implement authentication (sign up, login, session management)
- T009: Implement Discussions CRUD endpoints and service logic
- T010: Implement Comments CRUD endpoints, including nested comments
- T011: Implement Likes endpoints and logic
- T012: Implement subscription and notification logic (in-app only)
- T013: Implement admin moderation (cascade/non-cascade delete)

---

## Client Application

- T014: Scaffold React app structure (pages/components/services)
- T015: Implement Discussions UI (list, create, subscribe)
- T016: Implement Comments UI (nested, like, delete)
- T017: Implement Likes UI (optimistic updates)
- T018: Implement notification UI (in-app delivery)
- T019: Integrate Tanstack-Query for server state management
- T020: Apply Tailwindcss styling and accessibility checks

---

## Testing & Validation

- T021 [P]: Write contract tests for all API endpoints
- T022 [P]: Write integration tests for user stories (sign up, create, comment, like, moderate)
- T023 [P]: Write unit tests for business logic/services
- T024 [P]: Write quickstart test for end-to-end validation
- T025: Verify that no features or endpoints allow counting to high numbers (e.g., 1000, 10000, Infinity) in compliance with the constitution. If any such feature is found, document and block implementation.
- T026 [P]: Performance validation: Run automated load tests to confirm UI median response time <200ms for all user actions and system supports 10,000 concurrent users without degradation. Document results and acceptance criteria.
- T027 [P]: Final accessibility audit (WCAG 2.1 AA)
- T028 [P]: Final code review and refactor
- T029: Test optimistic update failure: Simulate a database write failure after an optimistic UI update. Confirm that the UI reverts the change and the user is notified with actionable guidance (retry or support).

---

## Polish & Documentation

- T030 [P]: Write documentation (README, quickstart, API docs)
- T031 [P]: Performance validation (UI <200ms p95, 10k users)
- T032 [P]: Final accessibility audit (WCAG 2.1 AA)
- T033 [P]: Final code review and refactor

---

## Project Structure

See `plan.md` for complete project structure details. All implementation, documentation, and testing should follow the structure defined in the plan.

---

## Parallel Execution Guidance

- Tasks marked [P] can be executed in parallel.
- Setup tasks must be completed before any implementation or testing.
- Models/services must be implemented before endpoints and UI.
- Tests should be written before implementation (TDD).
- Polish/documentation tasks can run in parallel after core implementation.

---

## Dependency Notes

- T001 → T002 → T003 (sequential setup)
- T004, T005, T006, T007 [P] (parallel data model/contracts)
- T008 depends on T004, T005
- T009-T013 depend on T004-T007
- T014-T020 depend on T009-T013
- T021-T024 [P] depend on T007-T020
- T025-T033 [P] depend on all prior tasks

---

## Task Agent Commands

- To execute a parallel group: `run-tasks T004 T005 T006 T007`
- To execute all polish tasks: `run-tasks T025 T026 T027 T028`

---

**All tasks are actionable and dependency-ordered.**
