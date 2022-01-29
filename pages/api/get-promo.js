import {GoogleSpreadsheet} from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)

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
        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('B2:B3')
        const boolPromo = sheet.getCell(1,1).value
        const textPromo = sheet.getCell(2,1).value

        res.end(JSON.stringify({
            showCoupon: boolPromo,
            message: textPromo
        }))
    
    }catch(err){
        res.end(JSON.stringify({
            showCoupon: false,
            message: ''
        }))
    }


}