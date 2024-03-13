'use client'

import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Button } from "@nextui-org/react";
import { createArray } from '../MyCodes/Util';
import { Checkbox } from 'antd';

function page() {
    const [menu, setMenu] = useState(false)





    return (
        <div className=' flex  text-white w-full flex-col'>
            <div className='bg-white h-10 w-full text-xl font-bold'>
                {['All', 'Active', 'Completed'].map((item) => {
                    return (
                        <Button key={item} className={`${menu == item ? 'bg-blue-500' : 'bg-black-800'} h-full w-1/3 trans shadow-sm rounded-none shadow-black`} onPress={() => { item == menu ? setMenu(false) : setMenu(item) }}>
                            {item}
                        </Button>
                    )
                })}

            </div>
            <div className='center-col p-2 bg-white text-gray-700'>
                <div className='w-full shadow-sm   h-10  flex items-center justify-between px-4'>
                    <h1 className='w-1/4'>Name</h1>
                    <h1 className='w-1/4'>Email</h1>
                    <h1 className='w-1/4'>Phone</h1>
                    <h1 className='w-1/4'>Completed</h1>
                </div>
                {createArray(5).map(({ item }) => {
                    return (
                        <Button key={item} className='w-full shadow-sm text-left  bg-gray-300 h-10  flex items-center justify-between px-4'>
                            {<h1 className='w-1/4'>name</h1>
                            }                            {<h1 className='w-1/4'>Email</h1>}
                            {<h1 className='w-1/4'>Phone</h1>}
                            <div className=' w-1/4 px-2 between'>
                                <Checkbox onChange={() => { }} className='h-20 text-black'></Checkbox>
                                <div className='flex gap-1'>
                                    <Button>...</Button>
                                </div>
                            </div>
                        </Button>
                    )
                })}

            </div>



        </div>
    )
}

export default page