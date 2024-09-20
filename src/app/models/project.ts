import { Guid } from 'typescript-guid';
export class Project {
  id: string = Guid.create().toString();
  name: string = '';
  description: string = '';
  status: string = '';
}
