module.exports = {
  getProduct: (req, res) => {
    req.app.get('db').get_inventory().then((products) => {
    res.status(200).send(products)
  }).catch((err) => {
    console.log('that was not very cash money of you')
    res.status(500).send('that was not very cash money of you')
  })
  }

  
}