/**
 * @file src/lib/employee/utils/extract-hours.ts
 * @description Utility function to extract worked hours from an array of `EmployeeEntity` objects.
 *              Returns an array of numbers representing the hours worked by each employee.
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 27/02/2025
 * @license MIT
 * @version 1.0.0
 */

import type { EmployeeEntity } from '@/types/employee';

/**
 * Extracts the worked hours from an array of employee entities.
 *
 * @param {EmployeeEntity[]} employees - An array of employee entities containing hour information.
 * @returns {number[]} An array of numbers representing the hours worked by each employee.
 *
 * @example
 * const employees: EmployeeEntity[] = [
 *   { id: "1", name: "John", hours: 8 },
 *   { id: "2", name: "Alice", hours: 6 }
 * ];
 * const hours = extractHours(employees); // Returns [8, 6]
 */
export function extractHours(
  employees: EmployeeEntity[],
): EmployeeEntity['hours'][] {
  return employees.map((employee) => employee.hours);
}
