export interface BookReqDTO {
  name:string;
  description:string;
  authorId:string;
  publicationYear:string;
  image:string;
  category:string;
}
export interface BookResDTO {
  id: number;
  name: string;
  description: string;
  author: AuthorResDTO;
  publicationYear: number;
  image: string;
  category: CategoryResDTO;
}

export interface AuthorReqDTO {
  name: string;
  description: string;
  birthDate: Date;
}
export interface AuthorResDTO {
  id: number;
  name: string;
  description: string;
  birthDate: Date;
}

export interface CategoryReqDTO {
  name: string;
}
export interface CategoryResDTO {
  id: number;
  name: string;
}
