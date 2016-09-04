export class Abstract {
    
    author: string;
    title: string;
    content: string;
    section: string;
    createdBy: string;
    createdAt: string;  
    abstractId: string;   
  
constructor (author: string, title: string, content: string, section: string,  abstractId?: string, createdBy?: string, createdAt?: string) {
        this.author = author;
        this.title = title;
        this.content = content;
        this.section = section;
        this.createdBy = createdBy;
        this.createdAt = createdAt;
        this.abstractId = abstractId;
        
    }
}