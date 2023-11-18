

let title = 'Contacto';
let text_area_content = "By entering my mobile number and checking this box I agree to receive case status updates, meeting updates, and legal news notifications from Abogado Eric Price Los Angeles Immigration Attorneys. Message frequency varies. Text HELP to 94289 for help. Text STOP to 94289 to end. Msg & data rates may apply. By opting in, I authorize Abogado Eric Price Los Angeles Immigration Attorneys to deliver SMS messages using an automatic telephone dialing system and I understand that I am not required to opt in as a condition of purchasing any property, goods, or services. By leaving this box unchecked you will not be opted in for SMS messages at this time. Click to read";

export default function test() {
    return (
        <section className="mt-16 sm:py-16 lg:px-6 p-16" id="Contacto">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-90">{title}</h2>
            <p
                className="mb-8 lg:mb-16 font-normal text-center text-gray-500 sm:text-xl">
                En Abogado Eric Price podemos ayudarte a cumplir tus sueños de inmigración. Pide tu consulta gratuita
                comunicándote con nosotros hoy.
            </p>
            <div className="bg-gray-50">
                <div className="px-4 mx-auto max-w-screen-sm contact-form">
                    <div>
                        <input type="hidden" id="00N5f00000SB1Ws" name="00N5f00000SB1Ws" title="Language" value="Spanish" />

                        <div className="flex flex-col gap-8">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">
                                    Nombre
                                </label>
                                <input id="first_name" type="text" name="first_name" maxLength={40} size={20}
                                    className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    placeholder="Eric" required />
                                <span id="nameInput" className="text-red-400"></span>
                            </div>

                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">
                                    Apellido
                                </label>
                                <input id="last_name" type="text" name="last_name" maxLength={40} size={20}
                                    className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    placeholder="Price" required />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Correo electrónico
                                </label>
                                <input id="email" type="text" name="email" maxLength={80} size={20}
                                    className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    placeholder="info@abogadoericprice.com" required />
                                <span id="emailInput" className="text-red-400"></span>
                            </div>

                            <div>
                                <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900">
                                    Teléfono Movil
                                </label>
                                <input id="mobile" type="text" name="mobile" maxLength={10} size={20}
                                    className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    placeholder="8556622772"
                                    pattern="\d*"
                                    required />
                                {/* onKeyDown="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" */}
                                {/* onKeyPress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" */}
                                {/* onPaste="return false;" */}
                                <span id="emailInput" className="text-red-400"></span>
                            </div>

                            <div>
                                <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900">
                                    Lugar
                                </label>
                                <select id="00N5f00000SB1X0" name="00N5f00000SB1X0" title="Location"
                                    className="shadow-sm bg-white border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option value="">--None--</option>
                                    <option value="Chicago">Chicago</option>
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="National">National</option>
                                    <option value="Orange County">Orange County</option>
                                    <option value="San Marcos">San Marcos</option>
                                    <option value="San Bernardino">San Bernardino</option>
                                </select>
                                <span id="locationInput" className="text-red-400"></span>
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                                    Tu duda
                                </label>
                                <textarea id="message" name="message" rows={6}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Me pueden ayudar con mi proceso migratorio...">
                                </textarea>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900">
                                    Registrarse para recibir mensajes de texto
                                </label>
                                <div className="radioGroup">
                                    {/* name="Agree" */}
                                    <input type="radio" id="00N5f00000SB1XU1" name="00N5f00000SB1XU"
                                        value="Yes" defaultChecked="true" />
                                    <label>Estoy de acuerdo</label>
                                </div>
                                <div className="radioGroup">
                                    {/* name="Idisagree" */}
                                    <input type="radio" id="00N5f00000SB1XU" name="00N5f00000SB1XU"
                                        value="No" />
                                    <label>No estoy de acuerdo</label>
                                </div>
                            </div>

                            <div>
                                <textarea disabled name="policy" cols="30" rows="3"
                                    className="block p-2.5 border-none resize-none
                                    w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300
                                    focus:ring-primary-500 focus:border-primary-500"
                                    defaultValue={text_area_content}>
                                </textarea>
                            </div>

                            <div className="text-center mt-8">
                                <button
                                    name="sendButton"
                                    id="ButtonSend"
                                    // onClick={submitForm}
                                    className="bg-orange-400 w-11/12 py-2.5 px-5 mr-2 mb-2 text-xl font-medium text-white focus:outline-none rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200">
                                    Enviar
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}