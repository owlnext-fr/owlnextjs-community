import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    let props = {}

    return {
        props: props
    }
}

const Index: NextPage = ({
    
}) => {
    const router = useRouter()
    
    useEffect(() => {
        router.push('/login')    
    })

    return (
        <>
        </>
    )
}

export default Index
