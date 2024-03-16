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
            feats: ['Wall cabinet height: 30", 36"​, 42"', 'Ivory stain with double applique and shaker design', 'Solid wood doors & frame', 'Full overlay door', 'Dovetail drawer box', 'Soft close: drawers & doors', 'Concealed European style  6 ways adjustable hinges', 'Adjustable shelves 3/4″'],
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
        },
        {
            name: 'Coastal Grey Shaker',
            desc: 'The Coastal Grey is a daring departure from the antiquated standard. In its own right, it embellishes a modern day classic with its unique stylistic prowess. It is accented with a beveled profile at the center of the door panel.',
            feats: ['Wall cabinet height: 30", 36"​, 39"', 'Dark grey finish with shaker design', 'Solid wood doors & frame', 'Full overlay door', 'Dovetail drawer box', 'Soft close: drawers & doors', 'Concealed European style  6 ways adjustable hinges', 'Adjustable shelves 3/4″'],
            imageMain: 'https://static.wixstatic.com/media/bca7b7_d4ea9b712168403b95a6c96cd6db8f90~mv2.jpg/v1/crop/x_15,y_15,w_342,h_359/fill/w_479,h_502,al_c,lg_1,q_80,enc_auto/2212_%E5%89%AF%E6%9C%AC.jpg',
            images: [
                'https://static.wixstatic.com/media/bca7b7_a701b30556ef406ab2de33153754574c~mv2.jpg/v1/fill/w_659,h_495,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_a701b30556ef406ab2de33153754574c~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_ed48287d09a5442eb083e2bf2e98f8df~mv2.jpg/v1/fill/w_517,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_ed48287d09a5442eb083e2bf2e98f8df~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_4f62e88a75e34225b77db2fb9d98c013~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_4f62e88a75e34225b77db2fb9d98c013~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_6e41f913d7334b04ae07da59d5289a59~mv2.jpg/v1/fill/w_660,h_495,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_6e41f913d7334b04ae07da59d5289a59~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_529d06111eef4b04884cbe38d52174e4~mv2.jpg/v1/fill/w_660,h_495,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_529d06111eef4b04884cbe38d52174e4~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_523292bc069e4f39b9ff763dd917f444~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_523292bc069e4f39b9ff763dd917f444~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_716ea4c118724f9aaeb878e1a60cd2dc~mv2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_716ea4c118724f9aaeb878e1a60cd2dc~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_a0e7329372534f1ca26d053c3d2f0961~mv2.jpg/v1/fill/w_660,h_495,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_a0e7329372534f1ca26d053c3d2f0961~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_71fc693d240c4ccca34f5dbfe39065c8~mv2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_71fc693d240c4ccca34f5dbfe39065c8~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_4655da1aab9847fdadad65806554b1de~mv2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_4655da1aab9847fdadad65806554b1de~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_3c348aaaa5ee4d0d976d6490aab60df3~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_658,h_439,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_3c348aaaa5ee4d0d976d6490aab60df3~mv2_d_5184_3456_s_4_2.jpg',
                'https://static.wixstatic.com/media/bca7b7_5bc281b34c924417abbe1d95793acef2~mv2_d_3648_2736_s_4_2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_5bc281b34c924417abbe1d95793acef2~mv2_d_3648_2736_s_4_2.jpg',
                'https://static.wixstatic.com/media/bca7b7_a4ec842a3dbd458cb0d50a3dfadd4cff~mv2_d_3456_5184_s_4_2.jpg/v1/fill/w_460,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_a4ec842a3dbd458cb0d50a3dfadd4cff~mv2_d_3456_5184_s_4_2.jpg',

            ]
        },
        {
            name: 'Saddle Brown',
            desc: 'A rustic warm stained finish handcrafted with a chocolate glazing. The saddle brown makes a kitchen feel soothing and will match any home\'s decor.',
            feats: ['Wall cabinet height: 30", 36"​, 42"', 'Saddle stain with a hand applied glaze', 'Raised panel', 'Solid wood doors & frame', 'Full overlay door', 'Dovetail drawer box', 'Soft close: drawers & doors', 'Concealed European style  6 ways adjustable hinges', 'Adjustable shelves 3/4″'],
            imageMain: 'https://static.wixstatic.com/media/bca7b7_fa3a1e005ed74cabb13e5359cb3a4829~mv2.jpg/v1/fill/w_498,h_486,al_c,lg_1,q_80,enc_auto/saddle%20brown-sample%20door.jpg',
            images: [
                'https://static.wixstatic.com/media/bca7b7_439a522581544edfa482ba651013e93f~mv2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_439a522581544edfa482ba651013e93f~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_468ab7f40d224504851469381dcf3ac2~mv2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_468ab7f40d224504851469381dcf3ac2~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_7e28bbce7b624533a3f03d68ba6444ea~mv2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_7e28bbce7b624533a3f03d68ba6444ea~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_79823b8376a44fcbbde6f92012a1f926~mv2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_79823b8376a44fcbbde6f92012a1f926~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_10d05877ac0f4fed9b9ad527df40fbdc~mv2_d_3872_2592_s_4_2.jpg/v1/fill/w_659,h_441,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_10d05877ac0f4fed9b9ad527df40fbdc~mv2_d_3872_2592_s_4_2.jpg',
                'https://static.wixstatic.com/media/bca7b7_4af35a0d257f4c949b3cb76648f60f68~mv2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_4af35a0d257f4c949b3cb76648f60f68~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_5d3f428eb1984f1eadaf7e585c7ce00f~mv2.jpg/v1/fill/w_659,h_471,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_5d3f428eb1984f1eadaf7e585c7ce00f~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_5c1bc82760e9403590dea18188cedc9f~mv2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_5c1bc82760e9403590dea18188cedc9f~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_1b556ad10fa3412db1b24aebd82b62a2~mv2_d_2656_1494_s_2.jpg/v1/fill/w_660,h_371,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_1b556ad10fa3412db1b24aebd82b62a2~mv2_d_2656_1494_s_2.jpg',
                'https://static.wixstatic.com/media/bca7b7_f9060b55fb74494a8a519a1637419025~mv2_d_1494_2656_s_2.jpg/v1/fill/w_388,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_f9060b55fb74494a8a519a1637419025~mv2_d_1494_2656_s_2.jpg',
                'https://static.wixstatic.com/media/bca7b7_4a2e9c922c904cf4a0d1115d10637881~mv2_d_3290_2442_s_4_2.jpg/v1/fill/w_658,h_489,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_4a2e9c922c904cf4a0d1115d10637881~mv2_d_3290_2442_s_4_2.jpg',
                'https://static.wixstatic.com/media/bca7b7_dc465f7105b24c468a40c0c669734a50~mv2_d_3264_2486_s_4_2.jpg/v1/fill/w_660,h_503,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_dc465f7105b24c468a40c0c669734a50~mv2_d_3264_2486_s_4_2.jpg',

            ]
        },
        {
            name: 'Espresso Shaker',
            desc: 'With a warm and rich tinted stain, the Espresso Shaker brings a kitchen to life compared to other dark colored cabinets. When paired with grooves, it becomes perfect for both a contemporary or traditional home decor.',
            feats: ['Wall cabinet height: 30", 36"​, 42"', 'Rich tinted finish with shaker design', 'Solid wood doors & frame', 'Solid wood doors & frame', 'Full overlay door', 'Dovetail drawer box', 'Soft close: drawers & doors', 'Concealed European style  6 ways adjustable hinges', 'Adjustable shelves 3/4″'],
            imageMain: 'https://static.wixstatic.com/media/bca7b7_f5cd8f2a7fc64a6b92605d47dfc1663c~mv2.jpg/v1/crop/x_0,y_8,w_384,h_384/fill/w_521,h_513,al_c,lg_1,q_80,enc_auto/espresso%206.jpg',
            images: [
                'https://static.wixstatic.com/media/bca7b7_c5e045e34ac5431983dab6ad161c374c~mv2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_c5e045e34ac5431983dab6ad161c374c~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_a4dedfd9aac44fb1b6f25a49a26b1a60~mv2.jpg/v1/fill/w_517,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_a4dedfd9aac44fb1b6f25a49a26b1a60~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_7cdd1f1d23624b429d123d995d396e29~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_7cdd1f1d23624b429d123d995d396e29~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_e3d30d3b10e444da8a2b133770464830~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_e3d30d3b10e444da8a2b133770464830~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_65efc21c56af4609a70da6d232c7d0e1~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_65efc21c56af4609a70da6d232c7d0e1~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_6b294eabfac74c40bbffbafeb2586ca3~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_6b294eabfac74c40bbffbafeb2586ca3~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_95bc3f5a7fd143bd94ed0ce3a9db1817~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_95bc3f5a7fd143bd94ed0ce3a9db1817~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_6b294eabfac74c40bbffbafeb2586ca3~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_6b294eabfac74c40bbffbafeb2586ca3~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_95bc3f5a7fd143bd94ed0ce3a9db1817~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_95bc3f5a7fd143bd94ed0ce3a9db1817~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_7e79379c7c8945d2b33e7865c8c97b0f~mv2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_7e79379c7c8945d2b33e7865c8c97b0f~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_aa540ee0ef234099a74af9e1551f98e6~mv2.jpg/v1/fill/w_658,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_aa540ee0ef234099a74af9e1551f98e6~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_13cc022d0f4f44359608b70659d59b98~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_13cc022d0f4f44359608b70659d59b98~mv2.jpg',
                'https://static.wixstatic.com/media/bca7b7_0159d3454ede4acf8ecbc9cfb8548c6b~mv2.jpg/v1/fill/w_518,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bca7b7_0159d3454ede4acf8ecbc9cfb8548c6b~mv2.jpg',

            ]
        }
    ]
    return (
        <div>
            <ProductView selected={selected} setSelected={setSelected} />
            <h1 className='text-3xl font-bold text-center text-white underline'>Catalog</h1>
            <div className='lg:grid-cols-4 grid-cols-3  grid text-white mt-4 p-2'>
                {catalogItems.map((cabinet) => {
                    return (
                        <Button onPress={() => { setSelected(cabinet) }} className='center-col gap-4 group'>
                            <div className='lg:h-40 lg:w-40 h-32 w-32 m-1 col-span-1 group-hover:border-dotted border-4 overflow-hidden rounded-full shadow-sm'>

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