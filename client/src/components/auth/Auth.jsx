import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

function Auth() {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const BASE_URL = 'http://localhost:8000/api'
        const url = isLogin ? `${BASE_URL}/auth/login` : `${BASE_URL}/auth/register`

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })

        const data = await response.json()

        if (data.token) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.result))
            window.location.href = '/'  // ganti navigate('/') ke ini
        } else {
            alert(data.msg)
        }
    }

    return (
        <main className="auth-container">
            <div className="auth-card">
                <h1>{isLogin ? 'Login' : 'Register'}</h1>
                <div className="auth-form">
                    {!isLogin && (
                        <input
                            name="username"
                            placeholder="Username"
                            onChange={handleChange}
                        />
                    )}
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                    {!isLogin && (
                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                        />
                    )}
                    <button onClick={handleSubmit}>
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </div>
                <p onClick={() => setIsLogin(prev => !prev)} className="auth-switch">
                    {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                </p>
            </div>
        </main>
    )
}

export default Auth