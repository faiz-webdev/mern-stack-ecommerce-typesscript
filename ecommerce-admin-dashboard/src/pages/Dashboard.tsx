import { BsSearch } from 'react-icons/bs'
import AdminSidebar from '../components/AdminSidebar'
import { FaRegBell } from 'react-icons/fa'


const userImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp"

const Dashboard = () => {
    return (
        <div className='adminContainer'>
            <AdminSidebar />
            <main className='dashboard'>
                <div className="bar">
                    <BsSearch />
                    <input type="text" placeholder='search for data, users, docs' />
                    <FaRegBell />
                    <img src={userImg} alt="" />
                </div>
            </main>

        </div>
    )
}

export default Dashboard