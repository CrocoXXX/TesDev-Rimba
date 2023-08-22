<template>
  <main>
    <h1> Create Customer Page </h1>

    <div class="container mt-5">
            <div class="card">
                <div class="card-header">
                    <h4> Add Customers </h4>
                </div>
                <div class="card-body">
                    <form action="" @submit.prevent="saveItem">
                        <div class="mb-3">
                            <label for=""> Nama Customer </label>
                            <input type="text" v-model="name_item" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Kontak </label>
                            <input type="text" v-model="name_item" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Email </label>
                            <input type="text" v-model="name_item" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Alamat </label>
                            <input type="text" v-model="name_item" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Diskon </label>
                            <input type="text" v-model="name_item" class="form-control" required />
                        </div>
                        <div class="mb-3">
                            <label for=""> Tipe Diskon </label>
                            <!-- <input type="text" v-model="unit" class="form-control" /> -->
                            <select class="form-select" v-model="unit" aria-label="Default select example">
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
