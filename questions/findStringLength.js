/**
 * CHALLENGE: Find the length of a string without using '.length'.
 * * Your Task: Fill in the logic inside this function.
 * Do NOT use: str.length, Array.length, or other built-in length properties.
 */
function findStringLength(str) {
    
    // ------------------------------
}


// ============================================================================
// AUTOMATED TEST RUNNER (Simulating LeetCode Locally)
// ============================================================================

const testCases = [
    { input: "hello", expected: 5, description: "Standard lowercase string" },
    { input: "", expected: 0, description: "Empty string" },
    { input: "A B C", expected: 5, description: "String containing spaces" },
    { input: "1234567890", expected: 10, description: "String of numbers" },
    { input: "Special_@#$", expected: 11, description: "String with special characters" },
    { input: "🚀🔥", expected: 2, description: "String with emojis (Advanced Edge Case!)" }
];

function runTests() {
    let passedCount = 0;
    console.log("--------------------------------------------------");
    console.log("🚀 Starting Local Test Runner...");
    console.log("--------------------------------------------------\n");

    testCases.forEach((test, index) => {
        try {
            const result = findStringLength(test.input);
            const passed = result === test.expected;

            if (passed) {
                console.log(`✅ Test ${index + 1} PASSED: ${test.description}`);
                passedCount++;
            } else {
                console.log(`❌ Test ${index + 1} FAILED: ${test.description}`);
                console.log(`   - Input:    "${test.input}"`);
                console.log(`   - Expected: ${test.expected}`);
                console.log(`   - Got:      ${result}\n`);
            }
        } catch (error) {
            console.log(`💥 Test ${index + 1} CRASHED: ${test.description}`);
            console.log(`   - Error: ${error.message}\n`);
        }
    });

    console.log("\n--------------------------------------------------");
    console.log(`📊 RESULTS: ${passedCount} / ${testCases.length} Tests Passed.`);
    console.log("--------------------------------------------------");
}

// Run the suite
runTests();