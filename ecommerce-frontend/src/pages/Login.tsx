import { useState } from "react"
import { FcGoogle } from "react-icons/fc";

function Login() {
    const [gender, setGender] = useState<string>("");
    const [date, setDate] = useState<string>("");

    return (
        <div className="login">
            <main>
                <h1 className="heading">Login</h1>

                <div>
                    <label>Gender</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div>
                    <label>Gender</label>
                    <input type="date"
                        value={date} onChange={(e) => setDate(e.target.value)} />
                </div>

                <div>
                    <p>Already Signed In Once</p>
                    <button>
                        <FcGoogle /><span>Sing in with Google</span>
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Login