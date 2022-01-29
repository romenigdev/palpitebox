import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/pagetitle'
const Sobre = () => {
    return (
    <div className='w-1/2 mx-auto m-6'>
        <PageTitle title='Sobre'></PageTitle>
        <h1 className ='text-center text-xl'>Senhoras e senhores... o PalpiteBox!</h1>
        <p className='mb-2'>Este produto foi desenvolvido durante o curso Full Stack Master do <Link href='https://devpleno.com/'><a><font className='font-bold text-purple-600'>$</font><font className='font-bold'>devPleno</font></a></Link>.</p>
        <p className=' mb-2'> A intenção deste sistema é fornecer uma plataforma de críticas ou sugestões para clientes de estabelecimentos comerciais. </p>
        <p className=' mb-2'>Com interface simples e intuitiva, o PalpiteBox é integrado à uma planilha do Google, permitindo aos estabelecimentos comerciais um fácil acesso às informações fornecidas pelos clientes. 
        Na construção do PalpiteBox, foram empregados os pacotes:</p>
        <div className = 'ml-4'>
            <ul>
                <li class="list-disc "><Link href='https://pt-br.reactjs.org/'><a class='hover:font-bold'>React JS</a></Link></li>
                <li class="list-disc "><Link href='https://nextjs.org/'><a class='hover:font-bold'>Next JS</a></Link></li>
                <li class="list-disc "><Link href='https://www.npmjs.com/package/google-spreadsheet'><a class='hover:font-bold'>NPM Google Spreadsheet</a></Link></li>
                <li class="list-disc hover:font-bold"><Link href='https://tailwindcss.com'><a class='hover:font-bold'>TailwindCSS</a></Link></li>
                <li class="list-disc hover:font-bold"><Link href='https://formik.org/'><a class='hover:font-bold'>Formik</a></Link></li>
            </ul>
        </div>
        
    </div>)
}

export default Sobre