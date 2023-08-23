<template>
  <main>
    <h1> Create Customer Page </h1>

    <div class="container mt-5">
            <div class="card">
                <div class="card-header">
                    <h4> Add Customers </h4>
                </div>
                <div class="card-body">
                    <form action="" @submit.prevent="saveCustomer">
                        <div class="mb-3">
                            <label for=""> Nama Customer </label>
                            <input type="text" v-model="nama" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Kontak </label>
                            <input type="text" v-model="kontak" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Email </label>
                            <input type="text" v-model="email" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Alamat </label>
                            <input type="text" v-model="alamat" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Diskon </label>
                            <input type="text" v-model="diskon" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Tipe Diskon </label>
                            <!-- <input type="text" v-model="unit" class="form-control" /> -->
                            <select class="form-select" v-model="tipe_diskon" aria-label="Default select example">
                                <option value="persentase"> Percentase </option>
                                <option value="fix_diskon"> Fix Diskon </option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for=""> Foto KTP </label> <br>
                            <img :src="previewImg" v-if="previewImg" alt="" class="imgPreview"> <br>
                            
                            <!-- <input type="text" v-model="model.item.barang" class="form-control" required /> -->
                            <input type="file" @change="handleFileChange" />
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary"> 
                                Save
                            </button>
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
    name: 'customerCreate',
    data() {
        return {
            nama: '',
            kontak: '',
            email: '',
            alamat: '',
            diskon: '',
            tipe_diskon: '',
            ktp: null,
            formData: null,
            previewImg: ''
        }
    },

    methods: {
        handleFileChange(e) {
            this.ktp = e.target.files[0]
            this.previewImg = URL.createObjectURL(e.target.files[0])
        },

        async saveCustomer() {
            this.formData = new FormData()
            this.formData.append('nama', this.nama)
            this.formData.append('kontak', this.kontak)
            this.formData.append('email', this.email)
            this.formData.append('alamat', this.alamat)
            this.formData.append('diskon', this.diskon)
            this.formData.append('tipe_diskon', this.tipe_diskon)
            this.formData.append('ktp', this.ktp)

            await axios.post('http://localhost:8080/api/customer', this.formData)
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
        width: 10rem;
        margin: 5px 0;
    }
</style>>
