const url = require('../models/url')
const { nanoid } = require('nanoid')

exports.create = async (req, res) =>
{
    let { urlCode } = req.body
    let nano = nanoid()
    await url.create({
        name: nano,
        urlCode
    })
    let fullUrl = req.protocol + '://' + req.get('host');
    return res.json({shortenUrl: fullUrl+'/'+nano})
}

exports.read = async (req, res) => {
    let { shorten } = req.params
    const result = await url.findOne({
        where: { name: shorten }
    })
    console.log(result)
    res.redirect(result.toJSON().urlCode)
}