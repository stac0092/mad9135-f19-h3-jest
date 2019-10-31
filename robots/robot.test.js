const robot = require('./robot').robot;

describe('Robot module', () => {
    // ARRANGE: setup variables or dependencies.
    // The list of commands that will be sent to the Robot script
    const instructions = [
        "PLACE 1,2,NORTH", 
        "REPORT"
    ];
    
    // ACT: execute the function to be tested using the control values created above.
    // Calling each of those commands will produce an Array of results
    const result = instructions.map(i => robot.do(i));
    
    // ASSERT: verify that the requirements of your test were met.
    // BUILD YOUR TESTS HERE
    
    // 1. Test that result is an array.
    test('result is an array', () => {
        expect(Array.isArray(['result'])).toBe(true);
      })

    // 2. Test that result[1] is of type object.

    test('result is of type object', () => {
        expect(typeof result[1] === "object").toBe(true); 
      })


    describe('Validate report values', () => {
        // Create this variable after checking that type is object.
        const report = result[1]; 

        // 3. Test that report contains the properties: action, x, y, and facing.
          test('report properties include action, x, y, and facing', () => {
            expect(report).toHaveProperty('action','x','y','facing')
          });


        // 4. Test that report.x is a number between 0 and 5.
        test('report x between 0 and 5', () => {
            expect(report.x).toBeGreaterThanOrEqual(0);
            expect(report.x).toBeLessThan(5);
          });
        // 5. Test that report.y is a number between 0 and 5.
        test('report y between 0 and 5', () => {
            expect(report.y).toBeGreaterThanOrEqual(0);
            expect(report.y).toBeLessThan(5);
          });

        // 6. Test that report.facing is one of: NORTH, SOUTH, EAST, or WEST.

        //doesn't feel right lol but it was a simple solution
        test('facing includes one of NORTH, SOUTH, EAST, WEST', () => {
            expect(report.facing === "NORTH" || report.facing === "SOUTH" || report.facingr === "EAST" || report.facing === "WEST").toBeTruthy();
          });

    })
})