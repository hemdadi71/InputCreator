import dbConnect from '@/lib/dbConenct'
import InputModel from '@/server/models/InputModel'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const { text, type } = req.body
        const Inputs = await InputModel.create({
          text,
          type,
        })
        res.status(201).json({ success: true, Inputs })
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: 'Failed to create inputs' })
      }
      break

    case 'GET':
      try {
        const Inputs = await InputModel.find({})
        res.status(200).json({ success: true, Inputs })
      } catch (error) {
        res
          .status(500)
          .json({ success: false, error: 'Failed to fetch Inputs' })
      }
      break

    case 'PUT':
      try {
        const { _id } = req.body
        const updatedInput = await InputModel.findByIdAndUpdate(_id, req.body, {
          new: true,
        })
        res.status(200).json({ success: true, updatedInput })
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: 'Failed to update Input' })
      }
      break

    case 'DELETE':
      try {
        const { _id } = req.body
        await InputModel.findByIdAndDelete(_id)
        res.status(200).json({ success: true })
      } catch (error) {
        res
          .status(400)
          .json({ success: false, error: 'Failed to delete Input' })
      }
      break

    default:
      res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
