const { Sales, Customer, Item } = require('../models')

class Controller {
    // Get Sales
    static async getSales(req, res) {
        try {
            const result = await Sales.findAll({
                order: [["id", "ASC"]],
                include: [{model: Customer}, {model: Item}]
            })

            res.status(200).json({
                data: result
            })

        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Sales'
            })
        }
    }

    // Create Sales
    static async createSales(req, res) {
        try {
            const {code_transaksi, CustomerId, ItemId, quantity, total_diskon, total_harga, total_bayar} = req.body

            const sales = await Sales.create({
                code_transaksi, CustomerId, ItemId, quantity, total_diskon, total_harga, total_bayar
            })

            res.status(200).json({
                message: `New Sales with id ${sales.id} created.`
            })
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Sales'
            })
        }
    }

    // Edit Sales
    static async editSales(req, res) {
        try {
            const sales = await Sales.findByPk(req.params.id)

            if(!sales) {
                res.status(404).json({
                    error: 'Sales not found.'
                })
            }

            res.status(200).json({ data: Sales })

        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Sales'
            })
        }
    }

    // Update Sales
    static async updateSales(req, res) {
        try {
            const sales = await Sales.findByPk(req.params.id)

            if(!sales) {
                res.status(404).json({
                    error: 'Sales not found.'
                })
            }

            const {code_transaksi, CustomerId, ItemId, quantity, total_diskon, total_harga, total_bayar} = req.body

            await Sales.update({code_transaksi, CustomerId, ItemId, quantity, total_diskon, total_harga, total_bayar}, {where: {id: req.params.id}})

            res.status(200).json({ message: `Sales with id ${sales.id} updated` });

        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Sales'
            })
        }
    }

    // Delete Sales
    static async deleteSales(req, res) {
        try {
            const sales = await Sales.findByPk(req.params.id)

            if(!sales) {
                res.status(404).json({
                    error: 'Sales not found'
                })
            }

            await Sales.destroy({
                where: {id: req.params.id}
            })

            res.status(200).json({
                message: `Sales with id ${sales.id} deleted`
            })
            
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Sales'
            })
        }
    }
}

module.exports = Controller