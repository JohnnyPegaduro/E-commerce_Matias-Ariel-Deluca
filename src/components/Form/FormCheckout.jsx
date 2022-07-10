import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCartContext } from '../Context/cartContext';
import { getFirestore, query, collection, getDocs, where, addDoc, documentId, writeBatch } from 'firebase/firestore'
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import CartWithoutX from '../CartWithoutX/CartWithoutX';
import './FormCheckout.css'


const FormCheckout = () => {

    const { cartList, totalPrice, clearList } = useCartContext();

    const [formSend, setformSend] = useState(false);


    const [dataId, setdataId] = useState('');

    const [dataFormSend, setdataFormSend] = useState({})


    const fRefreshStock = async () => {
        const db = getFirestore();
        const collectionStock = collection(db, 'items')
        const queryStockRefresh = query(
            collectionStock, where(documentId(), 'in', cartList.map(it => it.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryStockRefresh)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            })
            ))
            .catch(err => console.log(err))
            .finally(() => batch.commit())
    }
    return (
        <div>
            <>

                <section className={formSend === true ? "section-off" : "section-on"}>
                    <h1>Ya casi esta hecho</h1>
                    <p>Completa tus datos </p>

                    <div className="grid-formik">

                        <Formik
                            initialValues={
                                {
                                    name: '',
                                    subName: '',
                                    email: 'something@something.com',
                                    confirmEmail: 'something@something.com',
                                    phone: '',
                                    confirmPhone: ''
                                }
                            }

                            validate={(valuesForm) => {

                                let formErrors = {};

                                if (!valuesForm.name) {
                                    formErrors.name = 'Por favor ingrese un nombre'
                                } else if (!/^[A-Z]+$/i.test(valuesForm.name)) {
                                    formErrors.name = 'El nombre solo puede contener letras '
                                }

                                if (!valuesForm.subName) {
                                    formErrors.subName = 'Por favor ingrese su apellido'
                                } else if (!/^[A-Z]+$/i.test(valuesForm.name)) {
                                    formErrors.subName = 'El apellido solo puede contener letras '
                                }

                                if (!valuesForm.phone) {
                                    formErrors.phone = 'Debes ingresar un numero de teléfono celular'
                                } else if (!/^[0-9]{4,10}$/.test(valuesForm.phone)) {
                                    formErrors.phone = 'El teléfono debe contener 10 numeros'
                                }

                                if (!valuesForm.confirmPhone) {
                                    formErrors.confirmPhone = 'Debes reingresar el numero de teléfono celular'
                                } else if (valuesForm.confirmPhone !== valuesForm.phone) {
                                    formErrors.confirmPhone = 'Los campos deben coincidir'
                                } else if (!/^[0-9]{4,10}$/.test(valuesForm.phone)) {
                                    formErrors.confirmPhone = 'El teléfono debe contener 10 numeros'
                                }


                                if (!valuesForm.email) {
                                    formErrors.email = 'Por favor ingrese un correo'
                                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valuesForm.email)) {
                                    formErrors.email = 'El correo solo puede contener letras, numeros, puntos , guiones y guion bajo  '
                                }

                                if (valuesForm.confirmEmail !== valuesForm.email) {

                                    formErrors.confirmEmail = 'Los campos deben coincidir'
                                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valuesForm.confirmEmail)) {
                                    formErrors.confirmEmail = 'El correo solo puede contener letras, numeros, puntos , guiones y guion bajo  '
                                }


                                return formErrors;
                            }}

                            onSubmit={(valuesForm, { resetForm }) => {

                                let order = {}
                                order.buyer = valuesForm
                                order.total = totalPrice()

                                order.items = cartList.map(cartItem => {
                                    const id = cartItem.id;
                                    const foto = cartItem.foto;
                                    const name = cartItem.name;
                                    const price = cartItem.price * cartItem.cantidad;
                                    const cantidad = cartItem.cantidad;

                                    return { id, foto, name, price, cantidad }
                                })

                                const db = getFirestore()
                                const orderCollection = collection(db, 'orders')
                                addDoc(orderCollection, order)
                                    .then(resp => setdataId(resp.id))
                                    .catch(err => err)
                                    .finally(() => dataId)

                                fRefreshStock();

                                resetForm();

                                setformSend(true)

                                setdataFormSend(order.buyer)

                            }}
                        >
                            {({ errors }) => (
                                <Form >
                                    <section className="form-container">
                                        <div className="input-field">
                                            <label htmlFor="name">Nombre</label>
                                            <Field
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder='Ingrese su nombre'
                                            />
                                            <ErrorMessage name="name" component={() => <div className="error-p">{errors.name}</div>} />
                                        </div>

                                        <div className="input-field">
                                            <label htmlFor="subName">Apellido</label>
                                            <Field
                                                type="text"
                                                id="subName"
                                                name="subName"
                                                placeholder='Ingrese su apellido'
                                            />
                                            <ErrorMessage name="subName" component={() => <div className="error-p">{errors.subName}</div>} />

                                        </div>

                                        <div className="input-field">
                                            <label htmlFor="email">Email</label>
                                            <Field
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder='Ingrese su email'
                                            />
                                            <ErrorMessage className="error-p" name="email" component={() => <div className="error-p">{errors.email}</div>} />
                                        </div>

                                        <div className="input-field">
                                            <label htmlFor="repeatEmail">Repetir Email</label>
                                            <Field
                                                type="email"
                                                id="confirmEmail"
                                                name="confirmEmail"
                                                placeholder='Confirme su email'
                                            />
                                            <ErrorMessage name="confirmEmail" component={() => <div className="error-p">{errors.confirmEmail}</div>} />
                                        </div>

                                        <div className="input-field">
                                            <label htmlFor="phone">Telefono</label>
                                            <Field
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                placeholder='Ej: 1122334455'
                                            />
                                            <ErrorMessage name="phone" component={() => <div className="error-p">{errors.phone}</div>} />
                                        </div>

                                        <div className="input-field">
                                            <label htmlFor="confirmPhone">Telefono</label>
                                            <Field
                                                type="text"
                                                id="confirmPhone"
                                                name="confirmPhone"
                                                placeholder='Ej: 1122334455'
                                            />
                                            <ErrorMessage name="confirmPhone" component={() => <div className="error-p">{errors.confirmPhone}</div>} />
                                        </div>

                                        <button type="submit">Finalizar Compra</button>

                                    </section>
                                </Form>
                            )}
                        </Formik>

                        <div className="abstractCard">
                            <Cart/>
                            <div className="totalPriceCheckout">
                                <p>Total : ${totalPrice()}</p>
                            </div>
                        </div>

                    </div>
                </section>




                {formSend &&
                    <section className="billSection" >
                        <div className="information-id-container">
                            <h1 className="h1-success">La compra se ha realizado con éxito! </h1>
                            <h3 className="dataIdBill">Comprobante de Compra : {dataId}</h3>
                        </div>

                        <div className="grid-bill">

                            <div className="data-order-buyer">
                                <h4>Sus datos</h4>
                                <p>{dataFormSend.name}</p>
                                <p>{dataFormSend.subName}</p>
                                <p>{dataFormSend.phone}</p>
                                <p>{dataFormSend.email}</p>
                                <Link to="/"><button onClick={() => clearList()}>Volver al Inicio</button></Link>
                            </div>

                            <div className="abstractCard">
                                <CartWithoutX />
                                <div className="totalPriceCheckout">
                                    <p>Total : ${totalPrice()}</p>
                                </div>
                            </div>
                        </div>





                    </section>


                }



            </>
        </div>);
};

export default FormCheckout;