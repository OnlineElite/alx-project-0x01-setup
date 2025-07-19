export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsProps {
  posts: PostProps[];
}

export interface geo{
  lat : string;
  lng : string;
}
export interface address{
  street: string;
  suite : string;
  city : string;
  zipcode : number;
  geo : geo
}

export interface company{
  name : string;
  catchPhrase: string;
  bs : string;
}
export interface UserProps{
  id : number;
  name : string;
  username: string;
  email : string;
  address : address;
  phone : string;
  website : string;
  company : company
}

export interface UsersProps {
  posts: UserProps[];
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}