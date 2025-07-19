import {UserProps} from "@/interfaces"
const UserCard: React.FC<UserProps> =({id, name, username, phone, email, website, address, company})=>{

    return(
        <div className="bg-blue-950 text-white p-3 flex justify-between items-center rounded-xl">
            <div className="bg-white w-1/3 h-full mr-4 rounded-full"></div>
            <div className="text-white h-auto w-2/3 ">
                <p> Id : <span className="text-yellow-300">{id}</span></p>
                <p>Name : <span className="text-yellow-300">{name}</span></p>
                <p>Username : <span className="text-yellow-300">{username}</span></p>
                <p>Phone : <span className="text-yellow-300">{phone}</span></p>
                <p>Email : <span className="text-yellow-300">{email}</span></p>
                <p>Website : <span className="text-yellow-300">{website}</span></p>
                <p>Street : <span className="text-yellow-300">{address.street}</span></p>
                <p>Company name : <span className="text-yellow-300">{company.name}</span></p>
            </div>

        </div>
    )
}

export default UserCard;