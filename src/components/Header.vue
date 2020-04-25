<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                
                Covid19Dashboard
            </div>
            <div class="theme-btn-wrapper">
                <label class="ml-2 switch">
                    <input type="checkbox" :checked="!this.$store.getters.THEMELIGHT" name="theme-changer" @change="changeTheme()"> 
                    <span v-if="this.$store.getters.THEMELIGHT"><i class="fa fa-moon-o"></i></span> 
                    <span v-if="!this.$store.getters.THEMELIGHT" class="text-warning"><i class="fa fa-sun-o"></i></span> 
                </label>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Header",
    methods: {
        changeTheme( ) {
            this.$store.dispatch("changeThemeMode")
        }
    }
}
</script>

<style lang="scss" scoped>
    .navbar {
        z-index: 60;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
        color: #333;
        input { 
            opacity: 0;
            width: 0;
            height: 0;
        }
    }

</style>
