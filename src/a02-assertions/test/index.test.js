import assert from "node:assert";
import { test } from "node:test";
// import { sum, sumAsync } from "../src/index.js";

const PLACEHOLDER = "PLACEHOLDER";

test("sum", () => {
	assert.deepStrictEqual(PLACEHOLDER, 6, "sum of [1, 2, 3] is 6");
	assert.ok(PLACEHOLDER, "typeof sum return is number");
	assert.doesNotThrow(PLACEHOLDER, 0, "empty array is valid");
	assert.deepStrictEqual(PLACEHOLDER, 0, "sum of empty array is 0");
	assert.throws(
		PLACEHOLDER,
		{ message: "Input must be an array of numbers" },
		"throws error for non-array input in sum",
	);
});

test("sumAsync", async () => {
	assert.deepStrictEqual(await PLACEHOLDER, 6, "sum of [1, 2, 3] is 6");
	assert.ok(PLACEHOLDER, "typeof sum return is number");
	await assert.doesNotReject(PLACEHOLDER, 0, "empty array is valid");
	assert.deepStrictEqual(PLACEHOLDER, 0, "sum of empty array is 0");
	await assert.rejects(
		PLACEHOLDER,
		{ message: "Input must be an array of numbers" },
		"throws error for non-array input in sumAsync",
	);
});

// extra assertions not coveredc by example
assert.match(PLACEHOLDER, /PLACEHOLDER/);
assert.doesNotMatch("foo", /PLACEHOLDER/);
