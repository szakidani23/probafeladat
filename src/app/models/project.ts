import { Guid } from 'typescript-guid';
export class Project {
  id: string = Guid.create().toString();
  name: string = '';
  description: string = '';
  status: string = '';
  contactName: string = '';
  contactEmail: string = '';

  resetProperties() {
    this.id = Guid.create().toString();
    this.name = '';
    this.description = '';
    this.status = '';
    this.contactName = '';
    this.contactEmail = '';
  }
}
