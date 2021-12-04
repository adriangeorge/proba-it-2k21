import { React, useState } from 'react';
//import JWT from 'jsonwebtoken';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ModalCard = ({ title, color, callback, type_mod, show, func }) => {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(show);
    const [awardedPoints, setAwardedPts] = useState(0);
    const [rewardtitle, setRewardTitle] = useState('');
    const [description, setDescription] = useState('');

    const [loggedIn, setloggedIn] = useState(false);

    // FORM DATA 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let type = title === "Register" ? "/auth/register" : "/auth/login";

        let body = {
            email: email,
            password: password,
        };

        if (title === "Register") {
            body = {
                ...body,
                firstname: firstName,
                lastname: lastName,
                role: role,
                confirmation_password: confirmPassword
            }
        }

        let config = {
            method: 'post',
            url: 'https://proba2021.lsacbucuresti.ro' + type,
            headers: {
                'Content-Type': 'application/json',
                'boboc-token': '2a4abe7b-ce0a-4e60-a023-5f6194bc36fc'
            },
            data: body,
        };

        axios(config)
            .then(function (response) {

                if (type === "Register") {
                    let token = JSON.stringify(response.data);
                    localStorage.setItem('token', token);
                    setloggedIn(true);
                }

                navigate('/dashboard')

            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleChangeRole = () => {

    }

    return (
        <>
            {show ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-3/4 my-6 mx-auto bg-primary rounded-3xl">
                            {/*content*/}

                            <form className="border-0 shadow-lg relative flex flex-col w-full "
                                onSubmit={(e) => { e.preventDefault(); callback(awardedPoints, rewardtitle, description) }}
                            >
                                {/*header*/}
                                <div className="flex justify-center p-5 rounded-t">
                                    <p className="text-3xl font-semibold text-white">
                                        {title}
                                    </p>
                                </div>
                                <button
                                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-md top-0 right-0 absolute"
                                    type="button"
                                    onClick={func}
                                >
                                    X
                                </button>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    {/* CONTENT HERE */}

                                    {title === 'Register' ?
                                        (<>
                                            <div className="flex justify-end py-3 gap-1">
                                                <div>
                                                    <select
                                                        onChange={handleChangeRole}
                                                        className="text-black bg-form_bg rounded-lg bg-sel_arrow bg-no-repeat bg-right pl-1 pr-4 bg-small bg-origin-padding appearance-none outline-none"
                                                        name=""
                                                        id=""
                                                    >
                                                        <option value="student">Student</option>
                                                        <option value="teacher">Profesor</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="flex flex-col py-3 gap-1">
                                                <label htmlFor="nume" className="text-white text-xl">
                                                    Nume:
                                                </label>
                                                <input
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    type="text"
                                                    className="text-black bg-form_bg "
                                                />
                                            </div>

                                            <div className="flex flex-col py-3 gap-1">
                                                <label htmlFor="prenume" className="text-white text-xl">
                                                    Prenume:
                                                </label>
                                                <input
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    type="text"
                                                    className="text-black bg-form_bg"
                                                />
                                            </div>
                                        </>) : null
                                    }


                                    <div className="flex flex-col py-3 gap-1">
                                        <label htmlFor="email" className="text-white text-xl">
                                            Email
                                        </label>
                                        <input
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="text"
                                            className="text-black bg-form_bg"
                                        />
                                    </div>


                                    <div className="flex flex-col py-3 gap-1">
                                        <label htmlFor="password" className="text-white text-xl">
                                            Parola:
                                        </label>
                                        <input
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            className="text-black bg-form_bg "
                                        />
                                    </div>

                                    {title === 'Register' ?
                                        (<>
                                            <div className="flex flex-col py-3 gap-1">
                                                <label htmlFor="confirm" className="text-white text-xl">
                                                    Confirmare Parola:
                                                </label>
                                                <input
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    type="password"
                                                    className="text-black bg-form_bg"
                                                />
                                            </div>
                                        </>) : null}
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">

                                    <button
                                        className="bg-gradient-to-b from-gradient1 to-gradient2 rounded-2xl text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit"
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        {title === 'Register' ? "Inregistrare" : "Conectare"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null
            }
        </>);
};

export default ModalCard;