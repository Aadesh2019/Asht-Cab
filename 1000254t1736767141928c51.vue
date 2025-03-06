<template>
<span><div>
  <v-card color="#EEEEEE">
    <v-card class="text-center" color="primary" dark>
      <h3> Product Images </h3>
    </v-card>
    <v-row class="mt-4" style="margin:0; background-color: antiquewhite;">
      <v-col v-for="(image, index) in $store.state.variable.carForm.images" :key="index" cols="12" sm="6" md="4"
        lg="3">
        <v-img @click="removeUploadedImages(index)" class="upload__img"
          :src="'/api/getCdnFile/'+$store.state.project_id+'/productImages/'+$store.state.variable.carForm.id+'/'+image">
          <v-btn class="upload__img-close" icon color="error">
            <v-icon style="color: white;" small> mdi-close </v-icon>
          </v-btn>
        </v-img>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-btn @click="$refs.fileInput.click()" class="ma-1" x-large icon>
        <v-icon> mdi-cloud-upload </v-icon>
      </v-btn>
    </div>
    <v-row class="mt-4" style="margin:0; background-color: antiquewhite;">
      <v-col v-for="(image, index) in uploadedImages" :key="index" cols="12" sm="6" md="4" lg="3">
        <v-img @click="removeImage(index)" class="upload__img" :src="image.url"><template v-if="imgLoading">
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
          <v-btn class="upload__img-close" icon color="error">
            <v-icon style="color: white;" small> mdi-close </v-icon>
          </v-btn>
        </v-img>
      </v-col>
    </v-row>
    <div v-if="$store.state.variable.carForm.id &amp;&amp; uploadedImages &amp;&amp; uploadedImages.length"
      class="text-center">
      <v-btn @click="uploadNewImagesToServer"> Upload To Server </v-btn>
    </div>
  </v-card><input @change="handleFileUpload" style="display: none;" ref="fileInput" type="file" multiple>
</div></span>
</template>
<script>
 export default {

  data() { return { uploadedImages: [], imageFormData: null, maxUploads: 20, currentProductId: null, imgLoading: false, productBannerFiles: [] } }, computed: {
    uploadImageVariable() {
      return this.$store.state.variable.uploadProductImageToServer;
    }
  }, watch: {
    uploadImageVariable() {
      if (this.uploadImageVariable) {
        this.uploadImageToServer();
      }
    }
  }, methods: {
    handleFileUpload(e) {
      const files = Array.from(e.target.files);
      this.imageFormData = new FormData();
      files.forEach((file) => {
        const sanitizedFileName = this.sanitizeFileName(file.name);
        const fileWithSanitizedName = new File([file], sanitizedFileName, {
          type: file.type,
        });
        console.log(files);
        this.imageFormData.append("files[]", fileWithSanitizedName);

        if (!file.type.match("image.*")) {
          return;
        }
        if (this.uploadedImages.length >= this.maxUploads) {
          return;
        }
        this.uploadedImages.push({
          name: sanitizedFileName,
          url: URL.createObjectURL(file),
        });
      });
    }, sanitizeFileName(fileName) {
      return fileName.replace(/[\s-]/g, "");
    }, removeImage(index) {
      this.uploadedImages.splice(index, 1);
    }, removeUploadedImages(index) {
      console.log(index);
      if (this.$store.state.variable.carForm.images && this.$store.state.variable.carForm.images[index]) {
        var req = {
          f_name: 'deleteProductImages',
          product_id: this.$store.state.variable.carForm.id,
          image: this.$store.state.variable.carForm.images[index]
        };
        this.$axios.post('/delete/image', req).then(res => {
          this.$store.state.variable.carForm.images.splice(index, 1);
        }).catch(error => {
          console.error("Error deleting image:", error);
        });
      } else {
        console.error("Image at index", index, "is undefined");
      }
    }, uploadNewImagesToServer() {
      this.uploadImageToServer(this.$store.state.variable.carForm.id);
    }, uploadImageToServer(product_id) {
      this.imgLoading = true;
      if (this.imageFormData.has("f_name")) {
        this.imageFormData.delete("f_name");
      }
      this.imageFormData.append("f_name", "multiFileUpload");
      if (this.imageFormData.has("product_id")) {
        this.imageFormData.delete("product_id");
      }

      if (product_id) {
        this.imageFormData.append("product_id", product_id);
      } else {
        this.imageFormData.append("product_id", this.$store.state.variable.lastUploadedProductId);
      }

      console.log(this.imageFormData);
      this.$axios.post("/images", this.imageFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        this.$store.state.variable.reloadAllProducts = true;
        this.imgLoading = false;
        this.uploadedImages = [];
        this.$store.state.variable.addProductDialog = false;
        this.$store.state.variable.uploadProductImageToServer = false;
      }).catch(() => {
        this.imgLoading = false;
        this.$store.state.variable.uploadProductImageToServer = false;
      });
    }
  }

}
</script>
<style>
</style>