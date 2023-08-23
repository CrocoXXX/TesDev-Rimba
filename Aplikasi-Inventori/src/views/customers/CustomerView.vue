<template>
    <main>
        <h1> This is Customer Page </h1>

        <div>
            <div class="card">
                <div class="card-header">
                    <h4>
                        Customers
                        <RouterLink to="/customer/create" class="btn btn-primary float-end">
                            Add Customer
                        </RouterLink>
                    </h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th> ID </th>
                                <th> Nama </th>
                                <th> Kontak </th>
                                <th> Email </th>
                                <th> Alamat </th>
                                <th> Diskon </th>
                                <th> Tipe Diskon </th>
                                <th> KTP </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody v-if="this.customers.length > 0" key="">
                            <tr v-for="(customer, index) in this.customers" :key="index">
                                <td> {{customer.id}} </td>
                                <td> {{customer.nama}} </td>
                                <td> {{customer.kontak}} </td>
                                <td> {{customer.email}} </td>
                                <td> {{customer.alamat}} </td>
                                <td> {{customer.diskon}} </td>
                                <td> {{customer.tipe_diskon}} </td>
                                <td> 
                                    <!-- {{customer.ktp}} -->
                                    <img :src="customer.ktp" alt="" class="imgPreview">
                                </td>
                                <td>
                                    <RouterLink :to="{path: '/customer/'+customer.id+'/edit'}" class="btn btn-success">
                                        Edit
                                    </RouterLink>
                                    <button type="button" @click="deleteCustomer(customer.id)" class="btnDelete btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td colspan="9"> Loading... </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    name: 'customers',
    data() {
        return {
            customers: []
        }
    },

    mounted() {
        this.getCustomers()
    },

    methods: {
        async getCustomers() {
            const customer = await axios.get('http://localhost:8080/api/customer')
            this.customers = customer.data.data
            console.log(this.customers);
        },

        async deleteCustomer(id) {
            if(confirm('Apakah kamu yakin ingin menghapus data ini?')) {
                await axios.delete(`http://localhost:8080/api/customer/${id}`)

                this.getCustomers()
                // console.log(this.customers.data.message)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        margin-top: 40px;
    }

    .btnDelete {
        margin-left: 5px;
    }

    .imgPreview {
        width: 60px;
    }
</style>