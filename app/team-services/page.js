"use client"
import Image from 'next/image'
import React from 'react'
import Hero from '../services/[slug]/components/Hero'
import { useRouter } from 'next/navigation';
import Content from './components/Content';

const page = () => {
    return (
        <div>
            <Hero />
            <Content/>
        </div>
    )
}

export default page
