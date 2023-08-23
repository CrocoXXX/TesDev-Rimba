<template>
  <main>
    <h1> This is Sales Page </h1>

    <div>
            <div class="card">
                <div class="card-header">
                    <h4>
                        Sales
                        <RouterLink to="/sales/create" class="btn btn-primary float-end">
                            Add Sales
                        </RouterLink>
                    </h4>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th> ID </th>
                                <th> Code Transaksi </th>
                                <th> Tanggal </th>
                                <th> Customer </th>
                                <th> Item </th>
                                <th> quantity </th>
                                <th> Total Diskon </th>
                                <th> Total Harga </th>
                                <th> Total Bayar </th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody v-if="this.sales.length > 0" key="">
                            <tr v-for="(sales, index) in this.sales" :key="index">
                                <td> {{sales.id }} </td>
                                <td> {{sales.code_transaksi }} </td>
                                <td> {{sales.tanggal_transaksi }} </td>
                                <td> {{sales.Customer.nama }} </td>
                                <td> {{sales.Item.name_item}} </td>
                                <td> {{sales.quantity }} </td>
                                <td> {{sales.Customer.diskon }} </td>
                                <td> {{sales.Item.harga_satuan }} </td>
                                <td> {{sales.total_bayar }} </td>
                                <td>
                                    <RouterLink to="{path: '/item/'+item.id+'/edit'}" class="btn btn-success">
                                        Edit
                                    </RouterLink>
                                    <button type="button" @click="deleteSales(sales.id)" class="btnDelete btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td colspan="10"> Loading... </td>
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
    name: 'sales',
    data() {
        return {
            sales: []
        }
    },

    mounted() {
        this.getSales()
    },

    methods: {
        async getSales() {
            const sales = await axios.get('http://localhost:8080/api/sales')
            this.sales = sales.data.data
            console.log(this.sales);
        },

        async deleteSales(id) {
            if(confirm(`Apakah kamu yakin ingin menghapus data ini?`)) {
                axios.delete(`http://localhost:8080/api/sales/${id}`)

                this.getSales()
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