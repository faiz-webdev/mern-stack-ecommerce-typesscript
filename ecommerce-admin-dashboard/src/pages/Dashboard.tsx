import { BsSearch } from 'react-icons/bs'
import AdminSidebar from '../components/AdminSidebar'
import { FaRegBell } from 'react-icons/fa'
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi'


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

                <section className='widget-container'>
                    <WidgetItem
                        percent={40}
                        amount={true}
                        value={340000}
                        heading='Revenue'
                        color='rgb(0, 115, 255)' />

                    <WidgetItem
                        percent={-14}
                        value={400}
                        color="rgb(0 198 202)"
                        heading="Users"
                    />
                    <WidgetItem
                        percent={80}
                        value={23000}
                        color="rgb(255 196 0)"
                        heading="Transactions"
                    />

                    <WidgetItem
                        percent={30}
                        value={1000}
                        color="rgb(76 0 255)"
                        heading="Products"
                    />
                </section>
            </main>
        </div>
    )
}

interface WidgetItemProps {
    heading: string;
    value: number;
    percent: number;
    color: string;
    amount?: boolean
}

const WidgetItem = ({
    heading, value, percent, color, amount = false
}: WidgetItemProps) => (
    <article className='widget'>
        <div className='widget-info'>
            <p>{heading}</p>
            <h4>{amount ? `₹${value}` : value}</h4>
            {percent > 0 ? (
                <span className='green'>
                    <HiTrendingUp /> +{percent}% {" "}
                </span>
            ) : (
                <span className='red'>
                    <HiTrendingDown /> {percent}%{" "}
                </span>
            )}
        </div>

        <div className="widget-circle"
            style={{
                background: `conic-gradient(
                ${color} ${(Math.abs(percent) / 100) * 360}deg,
                rgb(255, 255, 255) 0)`
            }}
        >
            <span style={{ color }}>{percent}%</span>
        </div>
    </article>
);

export default Dashboard