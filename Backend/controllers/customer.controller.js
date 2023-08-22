const { Customer } = require('../models')

class Controller {
    // Get Customer
    static async getCustomer(req, res) {
        try {
            const result = await Customer.findAll({
                order: [["id", "ASC"]]
            })

            res.status(200).json({ data: result })

        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Customer'
            })
        }
    }

    // Create Customer
    static async createCustomer(req, res) {
        try {
            const {nama, kontak, email, alamat, diskon, tipe_diskon, ktp} = req.body

            const customer = await Customer.create({
                nama, kontak, email, alamat, diskon, tipe_diskon, ktp
            })

            res.status(200).json({
                message: `New Customer with id ${customer.id} created.`
            })
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Customer'
            })
        }
    }

    // Update Customer
    static async updateCustomer(req, res) {
        try {
            const customer = await Customer.findByPk(req.params.id);

            if(!customer) {
                res.status(404).json({
                    error: 'Customer not found.'
                })
            }

            const {nama, kontak, email, alamat, diskon, tipe_diskon, ktp} = req.body

            await Customer.update({nama, kontak, email, alamat, diskon, tipe_diskon, ktp}, {where: {id: req.params.id}})

            res.status(200).json({ message: `Customers with id ${customer.id} updated` });

        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Customer'
            })
        }
    }

    // Delete Customer
    static async deleteCustomer(req, res) {
        try {
            const customer = await Customer.findByPk(req.params.id)

            if(!customer) {
                res.status(404).json({
                    error: 'Customers not found'
                })
            }

            Customer.destroy({
                where: {id: req.params.id}
            })

            res.status(200).json({
                message: `Customers with id ${customer.id} deleted`
            })
            
        } catch (error) {
            res.status(500).json({
                error: 'Failed to fetch Customer'
            })
        }
    }
}

module.exports = Controller