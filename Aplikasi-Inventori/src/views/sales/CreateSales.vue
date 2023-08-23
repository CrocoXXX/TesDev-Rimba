<template>
  <main>
    <h1> Create Sales Page </h1>

        <div class="container mt-5">
            <div class="card">
                <div class="card-header">
                    <h4> Add Sales </h4>
                </div>
                <div class="card-body">
                    <form action="" @submit.prevent="saveSales">
                        <div class="mb-3">
                            <label for=""> Kode Transaksi </label>
                            <input type="text" v-model="formData.code_transaksi" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Customer </label>
                            <!-- <input type="text" v-model="formData.CustomerId" class="form-control" required /> -->
                            <!-- <input type="text" v-model="unit" class="form-control" /> -->
                            <select class="form-select" v-model="formData.CustomerId" aria-label="Default select example" required>
                                <option v-for="(customer, index) in this.customers" :key="index" :value="customer.id">
                                    {{customer.nama}}
                                </option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for=""> Item </label>
                            <!-- <input type="text" v-model="formData.ItemId" class="form-control" required /> -->
                            <select class="form-select" v-model="formData.ItemId" aria-label="Default select example" required>
                                <option v-for="(item, index) in this.items" :key="index" :value="item.id">
                                    {{item.name_item}}
                                </option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for=""> Quantity </label>
                            <input type="text" v-model="formData.quantity" class="form-control" required />
                        </div>
                        <div class="mb-3" v-if="formData.CustomerId">
                            <label for=""> Total Diskon </label>
                            <!-- {{ selectedCustomer }} -->
                            <!-- {{ selectedCustomerData(formData.CustomerId).diskon }} -->
                            <input type="text" v-model="selectedCustomerData(formData.CustomerId).diskon" class="form-control" :placeholder="selectedCustomerData(formData.CustomerId).diskon" readonly />
                            <!-- <p>First Name: {{selectedCustomerData.diskon}}</p> -->
                        </div>
                        <div class="mb-3" v-if="formData.ItemId">
                            <label for=""> Total Harga </label>
                            <input type="text" v-model="selectedItemData(formData.ItemId).harga_satuan" class="form-control" :placeholder="selectedItemData(formData.ItemId).harga_satuan" readonly />
                        </div>
                        <!-- <div class="mb-3">
                            <label for=""> Total Keseluruhan </label>
                            <input type="text" v-model="formData.total_bayar" :placeholder="selectedCustomerData(formData.CustomerId).diskon * selectedItemData(formData.ItemId).harga_satuan" class="form-control" readonly />
                        </div> -->
                        
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary">
                                Save
                            </button>
                            <RouterLink to="/sales" class="btnBack btn btn-light"> Back </RouterLink>
                        </div>

                        <!-- <div>
                            <input :value="inputValue" @input="updateInputValue" />
                            <p>Current input value: {{ inputValue }}</p>
                        </div> -->

                        <!-- <li v-for="(item, index) in items" :key="index">
                            <p>Name: {{ item.name }}</p>
                            <p>Price: ${{ item.price }}</p>
                            <button @click="updatePrice(item)">Update Price</button>
                        </li> -->
                    </form>
                </div>
            </div>
        </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
    name: 'salesCreate',
    data() {
        return {
            code_transaksi: '',
            CustomerId: '',
            ItemId: '',
            quantity: '',
            total_diskon: '',
            total_harga: '',
            total_bayar: '',
            Customer: {},
            Item: {},
            formData: {
                code_transaksi: '',
                CustomerId: '',
                ItemId: '',
                quantity: '',
                // total_diskon: '',
                // total_harga: '',
                // total_bayar: '',
            },

            customers: [],
            items: [],
            // inputValue: '',
            // itemss: [
            //     { name: "Item A", price: 10 },
            //     { name: "Item B", price: 20 },
            //     { name: "Item C", price: 30 }
            // ]
        }
    },

    mounted() {
        this.getCustomers()
        this.getItems()
    },

    methods: {
        async saveSales() {
            // this.formData = new FormData()
            // this.formData.append('code_transaksi', this.code_transaksi)
            // this.formData.append('CustomerId', this.CustomerId)
            // this.formData.append('ItemId', this.ItemId)
            // this.formData.append('quantity', this.quantity)
            // this.formData.append('total_diskon', this.total_diskon)
            // this.formData.append('total_harga', this.total_harga)
            // this.formData.append('total_bayar', this.total_bayar)
            console.log(this.formData);

            await axios.post('http://localhost:8080/api/sales', this.formData)
            this.$router.push('/sales')
        },

        async getCustomers() {
            const customer = await axios.get('http://localhost:8080/api/customer')
            this.customers = customer.data.data
            console.log(this.customers);
        },

        async getItems() {
            const item = await axios.get('http://localhost:8080/api/item')
            this.items = item.data.data
            console.log(this.items);
        },

        selectedCustomerData(id) {
            return this.customers.find(customer => customer.id === id) || {}
        },
        
        selectedItemData(id) {
            return this.items.find(item => item.id === id) || {}
        }

        // getCustomerItemPrice(itemId) {
        //     const customerItem = this.customerItem.find(item => item.id === itemId)
        //     return customerItem ? customerItem.harga_satuan : 0
        // }

        // updateHarga() {
        //     this.total_diskon = 
        // },

        // updateInputValue(event) {
        //     this.inputValue = event.target.value;
        //     console.log(inputValue);
        // }

        // updatePrice(item) {
        //     item.price += 5; // Increase the price by 5
        // }
    },
}
</script>

<style lang="scss" scoped>
    .btnBack {
        margin-left: 10px;
    }

    .imgPreview {
        width: 10rem;
        margin: 5px 0;
    }
</style>