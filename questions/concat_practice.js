/**
 * CHALLENGE: Concatenate two strings without using built-in methods like .concat().
 * * Your Task: Fill in the logic inside this function.
 * Hint: Try to do this by iterating through the strings or using basic operators.
 */
function concatenateStrings(str1, str2) {
    // ---- WRITE YOUR CODE HERE ----
    
    // ------------------------------
}


// ============================================================================
// AUTOMATED TEST RUNNER
// ============================================================================

const testCases = [
    { str1: "hello ", str2: "world", expected: "hello world", description: "Standard concatenation" },
    { str1: "", str2: "lonely", expected: "lonely", description: "First string is empty" },
    { str1: "apple", str2: "", expected: "apple", description: "Second string is empty" },
    { str1: "123", str2: "456", expected: "123456", description: "String of numbers" },
    { str1: "🚀", str2: "🔥", expected: "🚀🔥", description: "Concatenating emojis" }
];

function runTests() {
    let passedCount = 0;
    console.log("--------------------------------------------------");
    console.log("🚀 Starting Local Test Runner...");
    console.log("--------------------------------------------------\n");

    testCases.forEach((test, index) => {
        try {
            const result = concatenateStrings(test.str1, test.str2);
            const passed = result === test.expected;

            if (passed) {
                console.log(`✅ Test ${index + 1} PASSED: ${test.description}`);
                passedCount++;
            } else {
                console.log(`❌ Test ${index + 1} FAILED: ${test.description}`);
                console.log(`   - Inputs:   "${test.str1}" + "${test.str2}"`);
                console.log(`   - Expected: "${test.expected}"`);
                console.log(`   - Got:      "${result}"\n`);
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

runTests();