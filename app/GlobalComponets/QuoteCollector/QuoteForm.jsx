'use client'
import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Modal, message } from 'antd';
import { Input } from 'antd';
import { Button } from '@nextui-org/react';
import { addToDoc } from '@/app/MyCodes/Database';
import { Timestamp } from 'firebase/firestore';


const QuoteForm = ({ }) => {
    const [open, setOpen] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const initialData = { name: '', email: '', phone: '', contacted: false }
    const [formData, setFormData] = useState(initialData)

    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };

    const onSubmit = async () => {
        //send data to firebase 
        setFormData((old) => ({ ...old, time: new Timestamp() }))
        if (formData.name && formData.email && formData.phone) {
            console.log('formData')
            await addToDoc('Users', formData.name, formData)
            message.success('Submited!')
            setFormData(initialData)
            setOpen(false)
            return
        } else {
            if (formData.name == '') message.error("name is missing")
            if (formData.email == '') message.error("email is missing")
            if (formData.phone == '') message.error("phone is missing")
        }

    }

    const onChange = ({ target }) => {
        const name = target.name
        const data = target.value
        setFormData((old) => { return ({ ...old, [name]: data }) })
    }
    return (
        <>
            <button onClick={() => { setOpen(!open) }} className='h-20 w-20 rounded-full bg-black-800 fixed z-[99] border-white border-dotted border-2 bg-opacity-50 hover:bg-blue-700 trans hover:scale-[1.2] right-10 shadow-sm bottom-10 font-bold text-white'>
                <h1>Get Quote</h1>
            </button>
            <Modal
                footer={null}
                title={
                    <div
                        style={{
                            width: '100%',
                            cursor: 'move',
                        }}
                        onMouseOver={() => {
                            if (disabled) {
                                setDisabled(false);
                            }
                        }}
                        onMouseOut={() => {
                            setDisabled(true);
                        }}

                        onFocus={() => { }}
                        onBlur={() => { }}
                    // end
                    >

                    </div>
                }
                open={open}
                onCancel={handleCancel}

            >
                <div className='center gap-1 p-2'>
                    <img className='object-cover rounded-full h-96 w-1/4' src="https://media.istockphoto.com/id/1443897843/photo/a-black-kitchen-with-stainless-steel-appliances.jpg?s=1024x1024&w=is&k=20&c=wUi5KJzmGD8Sir0c3X3_OYq9AfOYVKqvFNJ0ePcVyyY=" alt="" />
                    <div className=' p-2 w-3/4 h-auto'>
                        <div>
                            <h1 className='text-4xl font-extrabold my-2'>Get Your Quote Now!</h1>
                        </div>
                        <div className='center-col gap-2'>
                            <Input value={formData.name} onChange={onChange} name={'name'} className='h-10' type="text" label="Full Name" placeholder="Full name" />
                            <Input value={formData.email} onChange={onChange} name={'email'} className='h-10' type="email" label="Email" placeholder="Email" />
                            <Input value={formData.phone} onChange={onChange} name={'phone'} className='h-10' type="number" label="Phone" placeholder="Phone" />
                            <Button onPress={onSubmit} className='w-3/4 h-10 rounded-full bg-blue-700 m-auto text-white font-bold'>Submit</Button>
                        </div>
                    </div>



                </div>
            </Modal>
        </>
    );

}

export default QuoteForm