import QRCode from 'qrcode'

export const generateQrCode = async (data) => {
  const result = await QRCode.toDataURL(JSON.stringify(data))
  return result
}