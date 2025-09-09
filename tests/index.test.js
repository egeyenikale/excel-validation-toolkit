import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Excel Validation Toolkit exposes project metadata", () => {
  assert.equal(project.slug, "excel-validation-toolkit");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
