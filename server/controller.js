module.exports = {
  getProduct: (req, res) => {
    req.app.get('db').get_inventory().then((products) => {
    res.status(200).send(products)
  }).catch((err) => {
    console.log('that was not very cash money of you')
    res.status(500).send('that was not very cash money of you')
  })
  },

  postProduct: (req, res) => {
    let {image_url, product_name, price} = req.body;
    req.app.get('db').new_product([image_url, product_name, price]).then(() => {
      res.sendStatus(200)
    }).catch((err) => {
      console.log('that was not very cash money of you')
      res.status(500).send('that was not very cash money of you')
    })
  },

  deleteProduct: (req, res) => {
    let {id} = req.params;
    req.app.get('db').delete_product(id).then(() => {
      res.sendStatus(200)
    }).catch((err) => {
      console.log('that was not very cash money of you')
      res.status(500).send('that was not very cash money of you')
    })
  },

  editProduct: (req, res) => {
    let {id} = req.params;
    let {image_url, product_name, price} = req.body;
    req.app.get('db').edit_product([image_url, product_name, price, id]).then(() => {
      res.sendStatus(500)
    }).catch((err) => {
      console.log('that was not very cash money of you')
      res.status(500).send('that was not very cash money of you')
    })
  }

}