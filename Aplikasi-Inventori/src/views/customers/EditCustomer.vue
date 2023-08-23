<template>
    <main>
        <h1> Edit Customer Page </h1>

        <div class="container mt-5">
            <div class="card">
                <div class="card-header">
                    <h4> Update Customer </h4>
                </div>
                <div class="card-body">
                    <form action="" @submit.prevent="updateCustomer">
                        <div class="mb-3">
                            <label for=""> Nama Customer </label>
                            <input type="text" v-model="model.nama" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Kontak </label>
                            <input type="text" v-model="model.kontak" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Email </label>
                            <input type="text" v-model="model.email" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Alamat </label>
                            <input type="text" v-model="model.alamat" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Diskon </label>
                            <input type="text" v-model="model.diskon" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Tipe Diskon </label>
                            <!-- <input type="text" v-model="model.unit" class="form-control" /> -->
                            <select class="form-select" v-model="model.tipe_diskon" aria-label="Default select example">
                                <option value="persentase"> Percentase </option>
                                <option value="fix_diskon"> Fix Diskon </option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for=""> Foto KTP </label> <br>
                            <img :src="previewImg" v-if="previewImg" alt="" class="imgPreview"> <br>
                            <img :src="model.ktp" alt="" class="imgPreview"> <br>
                            <!-- <input type="text" v-model="model.item.barang" class="form-control" /> -->
                            <input type="file" @change="handleFileChange" />
                        </div>
                        <div class="mb-3">
                            <a href="/customer">
                                <button type="submit" class="btn btn-primary">
                                    Update
                                </button>
                            </a>
                            
                            <RouterLink to="/customer" class="btnBack btn btn-light"> Back </RouterLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    name: 'customerUpdate',
    data() {
        return {
            customerId: '',
            model: {
                nama: '',
                kontak: '',
                email: '',
                alamat: '',
                diskon: '',
                tipe_diskon: '',
                ktp: null,
                formData: null
            },
            previewImg: ''
        }
    },

    mounted() {
        this.customerId = this.$route.params.id
        this.getCustomer(this.customerId)
    },

    methods: {
        handleFileChange(e) {
            this.model.ktp = e.target.files[0]
            this.previewImg = URL.createObjectURL(e.target.files[0])
        },

        async getCustomer(customerId) {
            const customer = await axios.get(`http://localhost:8080/api/customer/${customerId}/edit`)
            this.model = customer.data.data
            console.log(this.model);
        },

        async updateCustomer() {
            this.model.formData = new FormData()
            this.model.formData.append('nama', this.model.nama)
            this.model.formData.append('kontak', this.model.kontak)
            this.model.formData.append('email', this.model.email)
            this.model.formData.append('alamat', this.model.alamat)
            this.model.formData.append('diskon', this.model.diskon)
            this.model.formData.append('tipe_diskon', this.model.tipe_diskon)
            this.model.formData.append('ktp', this.model.ktp)

            await axios.put(`http://localhost:8080/api/customer/${this.customerId}/update`, this.model.formData)
            this.$router.push('/customer')
        }
    }
}
</script>

<style lang="scss" scoped>
    .btnBack {
        margin-left: 10px;
    }

    .imgPreview {
        width: 5rem;
        margin: 5px 0;
    }
</style>