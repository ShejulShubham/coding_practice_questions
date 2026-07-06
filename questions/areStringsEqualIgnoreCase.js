function areStringsEqualIgnoreCase(str1, str2) {

    if(typeof str1 !== "string" || typeof str2 !== "string" || str1.length !== str2.length){
        return false;
    }

    for(let i = 0; i < str1.length; i++){
        let first = convertToLowerCase(str1.charAt(i));
        let second = convertToLowerCase(str2.charAt(i));

        if(first !== second) return false;        
    }

    return true;
}

function convertToLowerCase(character){

}

// --- TEST RUNNER ---
const testCases = [
    { id: 1, input1: "hello", input2: "hello", expected: true, desc: "Exact match" },
    { id: 2, input1: "HELLO", input2: "hello", expected: true, desc: "Different casing" },
    { id: 3, input1: "apple", input2: "banana", expected: false, desc: "Different words" },
    { id: 4, input1: "hello ", input2: "hello", expected: false, desc: "Trailing space" },
    { id: 5, input1: "", input2: "", expected: true, desc: "Both empty strings" },
    { id: 6, input1: "Hello!", input2: "hello!", expected: true, desc: "With punctuation" },
    { id: 7, input1: 123, input2: "123", expected: false, desc: "Number vs String (Type safety)" },
    { id: 8, input1: null, input2: "hello", expected: false, desc: "Null input handling" }
];

console.log("--- Running Tests ---");
testCases.forEach(test => {
    const result = areStringsEqualIgnoreCase(test.input1, test.input2);
    const passed = result === test.expected;
    console.log(
        `${passed ? "✅ PASS" : "❌ FAIL"} - Test #${test.id} (${test.desc}): Expected ${test.expected}, got ${result}`
    );
});