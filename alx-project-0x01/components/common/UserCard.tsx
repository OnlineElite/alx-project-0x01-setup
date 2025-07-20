import { UserProps } from "@/interfaces"
//import Image from "next/image"
const UserCard: React.FC<UserProps> =({id, name, username, phone, email, website, address, company})=>{

    return(
        <div className="bg-blue-950 text-white p-3 flex justify-between items-center rounded-xl">
            <div className="bg-[url(/téléchargement.jpg)] w-1/3 h-full mr-4 rounded-full">
                {/* <Image src="/téléchargement.jpg" alt="Default image" width="100" height="100" /> */}
            </div>
            <div className="text-white h-auto w-2/3 ">
                <p className=""> Id : <span className="text-yellow-300 italic">{id}</span></p>
                <p className="">Name : <span className="text-yellow-300 italic">{name}</span></p>
                <p className="">Username : <span className="text-yellow-300 italic">{username}</span></p>
                <p className="">Phone : <span className="text-yellow-300 italic">{phone}</span></p>
                <p className="">Email : <span className="text-yellow-300 italic">{email}</span></p>
                <p className="">Website : <span className="text-yellow-300 italic">{website}</span></p>
                <p className="">Street : <span className="text-yellow-300 italic">{address.street}</span></p>
                <p className="">Company name : <span className="text-yellow-300 italic">{company.name}</span></p>
            </div>

        </div>
    )
}

export default UserCard;