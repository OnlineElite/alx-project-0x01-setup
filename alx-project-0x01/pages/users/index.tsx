import UserCard from "@/components/common/UserCard"
import UserModal from "@/components/common/UserModal"
import { UserData } from "@/interfaces"
import {useState} from "react"
import Header from "@/components/layout/Header"
import { UserProps } from "@/interfaces"
import { UsersProps } from "@/interfaces"
const Users : React.FC<UsersProps> =({posts})=>{
    //console.log(posts)
    const [isModalOpen, setModalOpen] = useState(false);
      const [user, setUser] = useState<UserData | null>(null);
    
    
      const handleAddPost = (newPost: UserData) => {
        setUser({ ...newPost, id: posts.length + 1 });
      };

    return(
        <div>
            <Header/>
            <main className="mx-3">
              <div className="flex justify-between my-4">
                <h1 className=" text-2xl font-semibold">Post Content</h1>
                <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                  {posts.map(({id, name, username, phone, email, website, address, company} : UserProps, key : number) => (
                      <UserCard  id={id} key={key} name={name} username={username} email={email} phone={phone} website={website} address={address} company={company} />
                  ))}
              </div>
              {isModalOpen && (
                <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
              )}
            </main>
        </div>
    )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;
