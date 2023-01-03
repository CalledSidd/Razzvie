import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";
import swal from 'sweetalert'
import { ToastContainer, toast } from "react-toastify";
const customId = "hi";
const AuthContext = createContext()




export default AuthContext


export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(false)
    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null))
    let [loading, setLoading] = useState()
    const navigate = useNavigate()




    const login = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/account/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',

            },
            body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
        })
        let data = await response.json()
        console.log(data)
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            console.log(authTokens)
            if ((jwtDecode(data.access).is_superuser)) {
                navigate('/admin')
            } else {
                let username = jwt_decode(authTokens.access)
                const name = JSON.stringify(username.username)
                const finalName = name.replaceAll('"', '')
                    toast.success("Welcome " + finalName, {
                        toastId: customId,
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                navigate('/')
            }
        } else {
            setError(true)
        }
    }

    let updateToken = async () => {
        let response = await fetch('http://127.0.0.1:8000/account/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                { 'refresh': authTokens.refresh }
            )
        })
        let data = await response.json()

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            forcelogout()
        }
    }

    let forcelogout = () => {
        setAuthTokens(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }



    useEffect(() => {
        let fiveminutes = 1000 * 60 * 10
        let interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fiveminutes)
        return () => clearInterval(interval)
    }, [authTokens, loading])


    let logout = () => {
        swal({
            title: "Are you sure you want to logout",
            icon: "warning",
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                console.log("Logged Out")
                setAuthTokens(null)
                localStorage.removeItem('authTokens')
                navigate('/login')
            } else {

            }
        })
    }


    let contextData = {
        user: user,
        setUser: setUser,
        login: login,
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        logout: logout,
        error: error
    }

    return (
        <AuthContext.Provider value={contextData}>{
            loading ? null : children}
        </AuthContext.Provider>
    )
}
