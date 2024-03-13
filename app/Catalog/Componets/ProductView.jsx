'use client'
import { Modal } from 'antd';
import { useState } from 'react';


const ProductView = ({ name }) => {
    const [open, setOpen] = useState(true);
    const [disabled, setDisabled] = useState(true);

    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };




    return (
        <>
            <button onClick={() => { setOpen(!open) }} className='h-20 w-20 rounded-full bg-black-800 fixed z-[99] border-white border-dotted border-2 bg-opacity-50 hover:bg-blue-700 trans hover:scale-[1.2] right-10 shadow-sm bottom-10 font-bold text-white'>
                <h1>{name}</h1>
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




                </div>
            </Modal>
        </>
    );

}

export default ProductView