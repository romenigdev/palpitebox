import React from 'react'

const Footer = () => {
    return(
        <div className ='bg-gray-700 p-4'>
            <div className ='container mx-auto text-center font-bold text-white'>
                Projeto desenvolvido por:{' '}
                <a className ='hover:underline' href='https://romenig.dev'>Romenig Ribeiro</a>{' '}/{' '}
                <a className ='hover:underline' href='https://www.linkedin.com/in/romenigribeiro/'>LinkedIn</a>{' '}/{' '}
                <a className ='hover:underline' href='https://github.com/romenigdev'>Github</a>
                <div className = 'p-4'>
                    <img className='inline p-4 w-64' src='/fullstack.png' /> 
                    <img className='inline p-4 w-64' src='/devpleno.png' />
                </div>
                
            </div>
        </div>
    )
}
export default Footer