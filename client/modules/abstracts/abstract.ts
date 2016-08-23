export class Abstract {
    title: string;
    content: string;
    createdBy: string;
    // createdAt: Date;

    constructor( title: string,
    content: string,
    createdBy?: string
    // createdAt?: Date 
    ) {
      this.title = title;
      this.content = content;
      this.createdBy = createdBy;
    //   this.createdAt = createdAt
    }

}
