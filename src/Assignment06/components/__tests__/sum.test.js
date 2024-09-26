import { sum } from "../sum";

test('should calculate the sum of two numbers', () => { 
    const result = sum(4,6);
    expect(result).toBe(10);
 })