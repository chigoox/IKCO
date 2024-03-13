'use client'
import EmblaCarouselThumb from '@/app/GlobalComponets/Carousel/CarouselThumb';
import { Modal } from 'antd';
import { useState } from 'react';


const ProductView = ({ setSelected, selected }) => {
    const [disabled, setDisabled] = useState(true);

    const handleCancel = (e) => {
        setSelected(false);
    };



    const { name, desc, feats, imageMain, images } = selected || { name: null, desc: null, feats: [], imageMain: '', images: [] }
    return (
        <>

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
                        <div className='px-4 mt-4'>
                            <h1 className='text-3xl font-bold'>{name}</h1>
                            <h1 className=''>{desc}</h1>
                        </div>
                    </div>
                }
                open={selected}
                onCancel={handleCancel}

            >
                <div className='p-2 '>

                    <div className='center gap-6 h-52'>
                        <img className=' w-1/2' src={imageMain} alt="" />
                        <ul>
                            {feats.map((item) => <li className='list-disc'>{item}</li>)}
                        </ul>
                    </div>

                    <EmblaCarouselThumb
                        slides={selected.images}

                    />




                </div>
            </Modal>
        </>
    );

}

export default ProductView