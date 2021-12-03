import { React, useState } from 'react';
import Button from '../Components/Button'
import Carousel from '../Components/Carousel'
import Modal from '../Components/Modal'
import { ReactComponent as FormBg } from '../Images/Backgr_Form.svg'
const HomeScreen = () => {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [LoginModalActive, setLoginModalActive] = useState(false);
    const [RegisterModalActive, setRegisterModalActive] = useState(false);

    const handleSubmit = () => {
    };

    return (
        <div className="grid grid-cols-1 ">
            <div className=" flex flex-col sm:flex-row h-screen justify-center items-center">
                <div className="m-auto">
                    <div className=" flex flex-col items-center gap-y-3">
                        <div className="w-1/2">
                            <p className="text-xl font-semibold text-black sm:text-2xl sm:leading-7 sm:text-black md:text-5xl ">
                                Învățatul nu a fost niciodată mai simplu!
                            </p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-sm font-medium text-black sm:mb-1 md:text-2xl">
                                Platforma ideală pentru meditații online, atât pentru profesori, cât si pentru studenți.

                            </p>
                        </div>
                    </div>

                </div>
                <div className="bg-hero bg-contain bg-no-repeat bg-top sm:bg-center w-3/5 h-3/5 md:mr-10" />
            </div>
            {/* Card picker */}
            <div className="flex justify-center items-center h-screen top-0">
                {/* Background */}
                <div className="h-1/2 w-3/4 bg-gradient-to-b from-gradient1 to-gradient2 rounded-2xl mx-10 transform -translate-x-5">

                    <div className="bg-primary relative transform translate-x-10 translate-y-10 h-full w-full rounded-2xl grid-cols-1" >
                        <div className="text-white text-center text-2xl md:text-5xl h-1/3 py-10">
                            Cum funcționează ?
                        </div>
                        <div className="grid grid-cols-2 gap-y-5 justify-center relative">
                            <div className="items-center px-3 ">
                                <p className="text-white text-center">
                                    Știi prea multe si vrei să predai?<br />
                                    Înscrie-te ca profesor.
                                </p>

                            </div>
                            <div className="items-center px-3 " >
                                <p className="text-white text-center">
                                    Știi prea puține si vrei să înveți?<br />
                                    Înscrie-te ca student.
                                </p>
                            </div>
                            <div className="content-center flex justify-center">
                                <Button text="Predau"
                                    btn_type="bg-gradient-to-b from-gradient1 to-gradient2 text-center w-1/2"
                                    text_style="py-2"
                                    onClick={setRegisterModalActive(!RegisterModalActive)} />

                            </div>
                            <div className="content-center flex justify-center">
                                <Button text="Învăț"
                                    btn_type="bg-gradient-to-b from-gradient1 to-gradient2 text-center w-1/2"
                                    text_style="py-2"
                                    onClick={setLoginModalActive(!LoginModalActive)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Carrousel */}
            <div className="mx-10">
                <Carousel />
            </div>
            {/* Feedback form */}
            <div className="flex justify-center items-center h-screen relative mx-10 my-10">
                <FormBg className="absolute z-0 h-full w-full"></FormBg>
                <div className="z-10">
                    <p className="text-center text-4xl md:text-5xl">
                        Întâmpini dificultăți ? <br />

                        Contactează-ne!
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div >
                            {error && <span className="text-orange text-md border border-orange p-3 m-2 rounded-xl">{error}</span>}


                            <div className="flex flex-col py-3 gap-1">
                                <label htmlFor="name" className="text-black text-xl">
                                    Nume:
                                </label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    className="text-black bg-white border-4 border-black"
                                />
                            </div>

                            <div className="flex flex-col py-3 gap-1">
                                <label htmlFor="email" className="text-black text-xl">
                                    Email:
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    className="text-black bg-white  border-4 border-black"
                                />
                            </div>

                            <div className="flex flex-col py-3 gap-1">
                                <label htmlFor="message" className="text-black text-xl">
                                    Mesaj:
                                </label>
                                <input
                                    onChange={(e) => setMessage(e.target.value)}
                                    type="textarea"
                                    className="text-black bg-white border-4 border-black h-32"
                                />
                            </div>

                        </div>

                        <div className="flex justify-center">
                            <button className="bg-gradient-to-t from-gradient1 to-gradient2 p-3 text-black text-xl border rounded-xl">
                                Trimite
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Modal>

            </Modal>

        </div>
    );

};

export default HomeScreen;