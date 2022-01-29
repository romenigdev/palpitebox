import React, {useState} from 'react'
import Link from 'next/link'
import PageTitle from '../components/pagetitle'

import { useFormik } from 'formik';

const Pesquisa = () => {

    const validate = values => {
        const errors = {}

        if (!values.Nome) {
          errors.Nome = '⚠️ Nome é um campo obrigatório.'
        } else if (values.Nome.length < 5) {
          errors.Nome = '❌ Por favor, insira seu nome completo.'
        }
        if (!values.Email) {
          errors.Email = '⚠️ E-mail é um campo obrigatório.'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
          errors.Email = '❌ E-mail inválido.'
        }
        if (!values.Critica) {
            errors.Critica = '⚠️ Deixe sua crítica ou sugestão.'
        } else if (values.Critica.length < 60) {
          errors.Critica = '❌ A crítica ou sugestão deve ter, pelo menos, 60 caracteres.'
          }
        if (!values.WhatsApp) {
            errors.WhatsApp = '⚠️ Telefone é um campo obrigatório.'
          } else if (!/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-? ?[0-9]{4}$/i.test(values.WhatsApp)) {
            errors.WhatsApp = '❌ Número de telefone inválido.'
          }
        if (values.Nota == -1) {
            errors.Nota = '⚠️ Atribua uma nota de 0 a 5.'
        }
        
        return errors
    }

    const formik = useFormik({
        initialValues: {
            Nome: '',
            Email: '',
            Nota: -1,
            WhatsApp: ''
        }, validate,
        onSubmit: async values => {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(values)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        },
    })

    const notas = [0,1,2,3,4,5]
    const [ success, setSuccess ] = useState(false)
    const [ retorno, setRetorno ] = useState({})

    return (
        <div className ='pt-6'>
        <PageTitle title='Pesquisa'></PageTitle>
        {!success &&
            <div className='w-1/2 mx-auto'>
                <h1 className ='text-center text-xl'>Opinião ou sugestão</h1>
                <p className='text-justified mb-6'>Deixe sua opinião ou sugestão preenchendo o formulário a seguir.</p>
                <form onSubmit={formik.handleSubmit}>
                <label className='font-bold'>Nome:</label>
                    <input type='text' className ='w-full p-3 block shadow bg-gray-400 mt-2 rounded' placeholder='John Doe' onChange = {formik.handleChange} name='Nome' value={formik.values.Nome}></input>
                    {formik.errors.Nome ? <div className='text-red-600'>{formik.errors.Nome}</div> : null}
                <label className='font-bold'>E-mail:</label>
                    <input type='text' className ='w-full p-3 block shadow bg-gray-400 mt-2 rounded' placeholder='endereco@exemplo.com' onChange = {formik.handleChange} name='Email' value={formik.values.Email}></input>
                    {formik.errors.Email ? <div className='text-red-600'>{formik.errors.Email}</div> : null}
                <label className='font-bold'>Telefone ou celular:</label>
                    <input type='text' className ='w-full p-3 block shadow bg-gray-400 mt-2 rounded' placeholder='(xx) xxxx-xxxx' onChange = {formik.handleChange} name='WhatsApp' value={formik.values.WhatsApp}></input>
                    {formik.errors.WhatsApp ? <div className='text-red-600'>{formik.errors.WhatsApp}</div> : null}
                <label className='font-bold'>Escreva sua crítica ou sugestão</label>
                    <textarea type='textarea' className ='w-full p-3 block shadow bg-gray-400 mt-2 rounded' onChange = {formik.handleChange} name='Critica' value={formik.values.Critica}></textarea>
                    {formik.errors.Critica ? <div className='text-red-600'>{formik.errors.Critica}</div> : null}
                <label className='font-bold'>Nota:</label>
                <div className='flex mb-3'>
                    {notas.map(nota => {
                        return (<label className='block w-1/6 text-center font-bold'>{nota}<br/><input type='radio' name='Nota' value={nota} onChange={formik.handleChange} /></label>)
                    })}
                    
                </div>{formik.errors.Nota ? <div className='text-red-600'>{formik.errors.Nota}</div> : null}
                <button type="submit" className ='mb-6 w-full bg-yellow-600 px-12 py-4 rounded-lg font-bold text-white shadow-md hover:bg-yellow-500'>Enviar resposta</button>
                </form>
            </div>
        }
        {success && <div className='w-1/2 mx-auto'>
                <div className = 'w-full text-center bg-blue-100 border-t border-b border-blue-600 text-blue-700'>
                    <p>Obrigado por sua contribuição.</p>
                    <p >Seu cupom foi gerado com sucesso!</p> 
                </div>
                <div className = 'w-full p-3 block shadow bg-green-400 mt-2 mb-6 rounded'>
                    <p className = 'text-center text-sky-500 text-xl'>{retorno.Cupom}</p>
                </div>
            </div>
        }

    </div>
    )
}

export default Pesquisa
