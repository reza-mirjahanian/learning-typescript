// TypeScript only allows type assertions which convert to a more specific or less specific version of a type. This rule prevents “impossible” coercions like:
const x = "hello" as number;

// const a = (expr as any) as T;

// -----------------

const req = {url: "https://example.com", method: "GET"};
// handleRequest(req.url, req.method);
// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

// Change 1:
// const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
// handleRequest(req.url, req.method as "GET");
// Change 1 means “I intend for req.method to always have the literal type "GET"”, preventing the possible assignment of "GUESS" to that field after.
// Change 2 means “I know for other reasons that req.method has the value "GET"“.


// You can use as const to convert the entire object to be type literals:

const req2 = {url: "https://example.com", method: "GET"} as const;

// handleRequest(req2.url, req.method);

function testReq(a: typeof req2) {

}

testReq({url: 'https://example.com', method: "GET"})
testReq({url: 'http://', method: "POST"})
// The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number
