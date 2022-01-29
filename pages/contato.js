import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/pagetitle'
const Contato = () => {
    return(
        <div className ='container mx-auto text-center font-bold my-10'>
            <PageTitle title='Contato'></PageTitle>
            <img className='inline p-4 w-64 rounded-full' src='/romenig.jpg' />< br/>
            <a className ='hover:underline' href='https://romenig.dev'>Romenig Ribeiro</a>{' '}/{' '}
            <a className ='hover:underline' href='https://www.linkedin.com/in/romenigribeiro/'>LinkedIn</a>{' '}/{' '}
            <a className ='hover:underline' href='https://github.com/romenigdev'>Github</a>          
        </div>
    )
}

export default Contato