import { Lesson } from "./lesson";

export interface Aula {
  id: string;
  nome: string;
  categoria: string;
  lessons?: Lesson[];
}
