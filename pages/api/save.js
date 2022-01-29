import {GoogleSpreadsheet} from 'google-spreadsheet'
import moment from 'moment'
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)

const genCupom = () => {
    const code = parseInt(moment().utcOffset('-03:00').format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substr(0,4)+'-'+code.substr(4,4)+'-'+code.substr(8,4)
}

const fromBase64 = value =>{
    const buff = Buffer.from(value, "base64")
    return buff.toString('ascii')
}

export default async (req, res) => {
    try{
        await doc.useServiceAccountAuth({
            client_email: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.GOOGLE_SHEET_PRIVATE_KEY)
        })
        await doc.loadInfo()
        //Data from sheet 1
        const sheet1 = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
        //Data from sheet 2
        const sheet2 = doc.sheetsByIndex[2]
        await sheet2.loadCells('B2:B3')
        const boolPromo = sheet2.getCell(1,1).value
        const textPromo = sheet2.getCell(2,1).value

        let Cupom = ''
        let Promo = ''
        if(boolPromo){
            Cupom = genCupom()
            Promo = textPromo
        }
        //Nome	Email	WhatsApp	Cupom	Promo
        await sheet1.addRow({
            Nome: data.Nome,
            Email: data.Email,
            WhatsApp: data.WhatsApp,
            Critica: data.Critica,
            Nota: data.Nota,
            'Time stamp': moment().utcOffset('-03:00').format('DD/MM/YYYY, HH:mm:ss'), 
            Cupom,
            Promo
        })
        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }))
    } catch (err){
        res.end(JSON.stringify({
            showCoupon: true,
            message: 'Rororo'
        }))
    }


}