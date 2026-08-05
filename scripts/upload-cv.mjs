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
  console.error('Usage: node scripts/upload-cv.mjs <path-to-pdf>')
  process.exit(1)
}

const client = createClient({ projectId, dataset, token, apiVersion: '2024-01-01', useCdn: false })
const buffer = readFileSync(filePath)
const filename = filePath.split('/').pop()
const asset = await client.assets.upload('file', buffer, { filename })

await client
  .patch('cvPage')
  .set({
    cvFile: {
      _type: 'file',
      asset: { _type: 'reference', _ref: asset._id },
    },
  })
  .commit()

console.log('OK: uploaded CV, asset id', asset._id)
