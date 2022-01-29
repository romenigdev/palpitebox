import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/pagetitle'

const fetcher = (... args) => fetch(...args).then(res => res.json())

const Index = () => {
    const {data,err} = useSWR('/api/get-promo', fetcher)
    return (
        <div className='mt-12 mb-12 text-center'>
            <PageTitle title='Seja bem-vindo'></PageTitle>
            <p>Para sempre atender nossos clientes da melhor maneira possível, buscamos compreender o seu ponto de vista.</p>
            <p>Deixe sua opinião ou sugestão e ganhe benefícios na sua próxima visita.</p>
            <div className='text-center mt-12'>
                <Link href='/pesquisa'>
                    <a className ='bg-yellow-600 px-12 py-4 rounded-lg font-bold text-white shadow-md hover:bg-yellow-500'>Sugerir ou opinar</a>
                </Link>
            </div>
            <div className='mt-10 mb-12 text-center'>
                {!data && <p>Carregando...</p>}
                {data && data.showCoupon &&
                    <p>{data.message}</p>
                }
            </div>
        </div>
   )
}

export default Index