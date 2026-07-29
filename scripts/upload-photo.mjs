import { createClient } from '@sanity/client'
import { readFileSync } from 'node:fs'

const projectId = 'rb8bguzk'
const dataset = 'production'
const token = process.env.SANITY_WRITE_TOKEN

if (!token) {
  console.error('Missing SANITY_WRITE_TOKEN in environment.')
  process.exit(1)
}

const filePath = process.argv[2]
if (!filePath) {
  console.error('Usage: node scripts/upload-photo.mjs <path-to-image>')
  process.exit(1)
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false })
const buffer = readFileSync(filePath)
const asset = await client.assets.upload('image', buffer, { filename: filePath.split('/').pop() })

await client
  .patch('homePage')
  .set({
    photo: {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
      alt: 'Jason Grant-Rowles',
    },
  })
  .commit()

console.log('OK: uploaded photo, asset id', asset._id)
