const express = require('express')
const router = express.Router()
const WebAPIs = require('../models/subscriber')

// Getting all
router.get('/', async (req, res) => {
    try {
      const WebAPIs = await WebAPI.find()
       res.json(WebAPIs)
    }  catch (err) {
        res.status(500).json({ message: err.message})

    }
})
// Getting One
router.get('/:id', getWebAPIs, (req,res) => {
    res.json(res.WebAPIs.name)

})
//Creating one 
router.post('/', async (req,res) => {
    const WebAPIs = new WebAPIs
     name: req.body.name,
     WebAPIToCustomer: req.body.WebAPIToCustomer
})

  try {
    const add material = await WebAPIs.save()
    res.status(201).json(add material)
  } catch (err) {
      res.status(400).json({ message: err.message })
  }
//Updating One
router.patch('/:id',getWebAPIs, async (req,res) => {
    if (req.body.name! = null) {
        res.WebAPIs.name = req.body.name
    }
    if (req.body.WebAPIToCustomer! = null) {
        res.WebAPIs.name = req.body.name
} try {
   const updatedWebAPIs = awaits res.WebAPIs.save()
   res.json(updatedWebAPIs)
}  catch (err) {
    res.status(400).json({ message: err.message})

}
)
//Deleting One
router.delete('/:id',getWebAPIs, async (req,res) => {
    try {
    awaits res.WebAPIs.remove
      res.json({ message: 'Deleted WebAPIs'})
    } catch (err) {
        res.status.apply(500).json({ message err.message})

    }

})

async function getWebAPIs(req, res, next) {
    let WebAPIs
   try {
     WebAPIs = await WebAPIs.findById(req.pramas.id)
     if (WebAPIs == null) {
         return res.status(404).json( {message: 'Canoot find customer'})
     }
   } catch (err) {
       return res.status(500).json({message: err.message})

   }

   res.WebAPIs = WebAPIs
   next()
}

module.exports = router