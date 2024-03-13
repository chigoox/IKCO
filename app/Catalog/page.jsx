'use client'
import React, { useState } from 'react'
import ProductView from './Componets/ProductView'
import { Button } from '@nextui-org/react'

function page() {
    const [selected, setSelected] = useState(false)

    const catalogItems = [
        {
            name: 'Luna White Shaker',
            desc: 'A pure white finish with beveled edge profile encompassed around the tried and true shaker design. A new take on the classic and elegant design',
            feats: ['Wall cabinet height: 30", 39"​', 'Pure white finish with shaker design', 'Solid wood doors & frame construction, with MDF center panels', 'Full overlay door', 'Dovetail drawer box', 'Soft close: drawers & doors', 'Concealed European style  6 ways adjustable hinges', 'Adjustable shelves 3/4″'],
            imageMain: 'https://static.wixstatic.com/media/bca7b7_e435de645e0544b98a0bdf8365509917~mv2.png/v1/fill/w_501,h_465,al_c,lg_1,q_85,enc_auto/Luna%20White%20sample%20doors_PNG.png',
            images: [
                'https://static.wixstatic.com/media/bca7b7_62fd878336d546329b5a72aac171499e~mv2.png/v1/fill/w_690,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_62fd878336d546329b5a72aac171499e~mv2.png',
                'https://static.wixstatic.com/media/bca7b7_42f3ee08f9e248969deec6f88468fcd4~mv2.png/v1/fill/w_694,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_42f3ee08f9e248969deec6f88468fcd4~mv2.png',
                'https://static.wixstatic.com/media/bca7b7_2f88e2a768eb40788c93842c9557a34c~mv2.png/v1/fill/w_597,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_2f88e2a768eb40788c93842c9557a34c~mv2.png',
                'https://static.wixstatic.com/media/bca7b7_7eddbb271d604a0284e59f58bdc367f8~mv2.png/v1/fill/w_686,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_7eddbb271d604a0284e59f58bdc367f8~mv2.png',
                'https://static.wixstatic.com/media/bca7b7_1dc9ac24a7944666a60b1616ef9b926f~mv2.jpg/v1/fill/w_557,h_690,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_1dc9ac24a7944666a60b1616ef9b926f~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_103428950ea045068501c9a3af6c7e85~mv2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_103428950ea045068501c9a3af6c7e85~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_8c033aa36f2e4dceaa66a449d40731f2~mv2.jpg/v1/fill/w_705,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_8c033aa36f2e4dceaa66a449d40731f2~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_3853c98a7fdf42648e7ceb660ce0c67b~mv2.jpg/v1/fill/w_705,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_3853c98a7fdf42648e7ceb660ce0c67b~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_17f6212290ac4f5bb2cd296f1fb84b60~mv2.jpg/v1/fill/w_705,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_17f6212290ac4f5bb2cd296f1fb84b60~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_1b649d7b10764dc88a5fdbb762139d80~mv2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_1b649d7b10764dc88a5fdbb762139d80~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_e442cd96e5c24492adfec8825b6cb5cb~mv2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_e442cd96e5c24492adfec8825b6cb5cb~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_4f491e7835b3406da8d7de70989cb09c~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_4f491e7835b3406da8d7de70989cb09c~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_496c3a324663456897ffd10481fb328d~mv2.jpg/v1/fill/w_544,h_690,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_496c3a324663456897ffd10481fb328d~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_2247ce19cc5b41799445157313dcc1ac~mv2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_2247ce19cc5b41799445157313dcc1ac~mv2.jpg',
            ]
        },
        {
            name: 'Alpine White Shaker',
            desc: 'A snow white colored shaker providing you with the comfort of a classic. It is accented with an angled molding at the center door panel. The door is built using all solid wood that will be very sturdy and durable even in the busiest of kitchens.',
            feats: ['Wall cabinet height: 30", 36", 39"', 'Pure white finish with shaker design', 'Solid wood doors & frame', 'Full overlay door', 'Dovetail drawer box', 'Soft close: drawers & doors', 'Concealed European style  6 ways adjustable hinges', 'Adjustable shelves 3/4″'],
            imageMain: 'https://static.wixstatic.com/media/bca7b7_16851534c8614753900340cf0247d715~mv2.jpg/v1/fill/w_486,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Alpine%20White%20Shaker.jpg',
            images: [
                'https://static.wixstatic.com/media/bca7b7_55297b28dc854d3a889cefe6e5f58487~mv2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_55297b28dc854d3a889cefe6e5f58487~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_a99c9465d5434563a5b65c14aa760f9a~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_a99c9465d5434563a5b65c14aa760f9a~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_4b748766f0dd4c18822cde6ad797a252~mv2.jpg/v1/fill/w_705,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_4b748766f0dd4c18822cde6ad797a252~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_366c0abd353242c4ba16e4228d6b6db2~mv2.png/v1/fill/w_705,h_621,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_366c0abd353242c4ba16e4228d6b6db2~mv2.png',
                'https://static.wixstatic.com/media/bca7b7_20fc1f95a5f648b0bcbf0dde9035d6aa~mv2_d_3000_2250_s_2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_20fc1f95a5f648b0bcbf0dde9035d6aa~mv2_d_3000_2250_s_2.jpg',
                'https://static.wixstatic.com/media/bca7b7_78b2669acac749a888442ce0d8f344b2~mv2_d_1600_1200_s_2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_78b2669acac749a888442ce0d8f344b2~mv2_d_1600_1200_s_2.jpg',
                'https://static.wixstatic.com/media/bca7b7_ab37828346ad496aabfa3e8504b61590~mv2_d_2048_1536_s_2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_ab37828346ad496aabfa3e8504b61590~mv2_d_2048_1536_s_2.jpg',
                'https://static.wixstatic.com/media/bca7b7_669d2dd84fe24d5fb77460de2a6ee637~mv2.jpg/v1/fill/w_705,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_669d2dd84fe24d5fb77460de2a6ee637~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_f410aee32b8d4ec590e929058c9b9a0f~mv2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_f410aee32b8d4ec590e929058c9b9a0f~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_6c6182e15fc14f1f93d6738f19a1af2a~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_6c6182e15fc14f1f93d6738f19a1af2a~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_cbc9d17a97834583a2a40de063d7d254~mv2.png/v1/fill/w_685,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_cbc9d17a97834583a2a40de063d7d254~mv2.png',


            ]
        },
        {
            name: 'Soft White Shaker',
            desc: 'The Shaker styled design incorporates an Ivory White Linen finish with double ridged mullions running horizontally on the upper and lower rails. Uniquely different with a clean contemporary look.',
            feat: ['Wall cabinet height: 30", 36"​, 42"', 'Ivory stain with double applique and shaker design', 'Solid wood doors & frame', 'Full overlay door', 'Dovetail drawer box', 'Soft close: drawers & doors', 'Concealed European style  6 ways adjustable hinges', 'Adjustable shelves 3/4″'],
            imageMain: 'https://static.wixstatic.com/media/bca7b7_f12c3df310a541a7915502cdecb89d1d~mv2.jpg/v1/fill/w_484,h_478,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Soft%20White%20Shaker.jpg',
            images: [
                'https://static.wixstatic.com/media/bca7b7_cf683c42d4e74481b114605d62e91375~mv2.jpg/v1/fill/w_705,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_cf683c42d4e74481b114605d62e91375~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_00cdefa4a3d8477991d036a360ff94ba~mv2.jpg/v1/fill/w_705,h_470,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_00cdefa4a3d8477991d036a360ff94ba~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_97535053b85d4012b88a80225b284236~mv2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_97535053b85d4012b88a80225b284236~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_84032764483343c2830c3703dc88a1ab~mv2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_84032764483343c2830c3703dc88a1ab~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_3ece995d28d6416dad91abe1e4d90010~mv2.png/v1/fill/w_703,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_3ece995d28d6416dad91abe1e4d90010~mv2.png',
                'https://static.wixstatic.com/media/bca7b7_ca1d4ceb54854755b159f976d43a7677~mv2.png/v1/fill/w_690,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_ca1d4ceb54854755b159f976d43a7677~mv2.png',
                'https://static.wixstatic.com/media/bca7b7_7f77ba58eb204087ad32694303701d9a~mv2.png/v1/fill/w_691,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_7f77ba58eb204087ad32694303701d9a~mv2.png',
                'https://static.wixstatic.com/media/bca7b7_33410f3e111a4acbabc8adecee1294e4~mv2.png/v1/fill/w_693,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_33410f3e111a4acbabc8adecee1294e4~mv2.png',
                'https://static.wixstatic.com/media/bca7b7_57ec22f2c8e441e59eb519a6c7199f18~mv2.png/v1/fill/w_691,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_57ec22f2c8e441e59eb519a6c7199f18~mv2.png',
                'https://static.wixstatic.com/media/bca7b7_b67462ac339f43ff834b0f180015680c~mv2.png/v1/fill/w_692,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_b67462ac339f43ff834b0f180015680c~mv2.png',
                'https://static.wixstatic.com/media/bca7b7_b71411cf187b4349b46478a3c6204635~mv2.png/v1/fill/w_661,h_690,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/bca7b7_b71411cf187b4349b46478a3c6204635~mv2.png',
                'https://static.wixstatic.com/media/bca7b7_67743743a8324b1aa2a5c5fd88f37b50~mv2_d_3264_2448_s_4_2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_67743743a8324b1aa2a5c5fd88f37b50~mv2_d_3264_2448_s_4_2.jpg',
                'https://static.wixstatic.com/media/bca7b7_83a9878100ba4877bb8c95bfaab926ef~mv2.jpg/v1/fill/w_705,h_529,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bca7b7_83a9878100ba4877bb8c95bfaab926ef~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_f98476637c0243d58ee1329359fb4691~mv2_d_6016_4000_s_4_2.jpg/v1/fill/w_705,h_469,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_f98476637c0243d58ee1329359fb4691~mv2_d_6016_4000_s_4_2.jpg'

            ]

        }
    ]
    return (
        <div>
            <ProductView name={selected.name} />
            <h1 className='text-3xl font-bold text-center text-white underline'>Catalog</h1>
            <div className='grid-cols-4 grid text-white mt-4'>
                {catalogItems.map((cabinet) => {
                    return (
                        <Button onPress={() => { setSelected(cabinet) }} className='center-col gap-4 group'>
                            <div className='h-40 w-40 group-hover:border-dotted border-4 overflow-hidden rounded-full shadow-sm'>

                                <img className='h-full  group-hover:scale-[1.2] trans w-full object-cover rounded-full' src={cabinet.images[0]} alt="" />
                            </div>
                            <h1>{cabinet.name}</h1>
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default page