/**
 * @file src\types\employee\index.ts
 * @description This file represents all employee types declarations
 * @author Ilia Kamilov <iliakmlv@gmail.com> (https://github.com/iliakamilov)
 * @date 27/02/2025
 * @license MIT
 * @version 1.0.0
 */

export interface EmployeeEntity {
  /** Unique identifier for the employee */
  id: string;

  /** Employee's name */
  name: string;

  /** Number of hours worked by the employee */
  hours: number;
}

export interface Employee extends EmployeeEntity {
  /** The employee's total earnings */
  earnings: number;
}
