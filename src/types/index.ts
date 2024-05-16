export interface UserInput {
  studentId: string;
  studentName: string;
  partial_1: number | string;
  partial_2: number | string;
  tracing: number | string;
}

export interface Student {
  id: string;
  name: string;
  status: string;
  finalNote: number;
}