import UserCard from "@/components/common/UserCard"
import Header from "@/components/layout/Header"
import { UserProps } from "@/interfaces"
import { UsersProps } from "@/interfaces"
const Users : React.FC<UsersProps> =({posts})=>{
    console.log(posts)
    return(
        <div className="user mx-3">
            <Header/>
            <h1>Welcome to users page</h1>
            <div className="grid grid-cols-4 gap-2">
                {posts.map(({id, name, username, phone, email, website, address, company} : UserProps, key : number) => (
                    <UserCard  id={id} key={key} name={name} username={username} email={email} phone={phone} website={website} address={address} company={company} />
                ))}
            </div>
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

export default Users
