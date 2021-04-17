<template>
    <div class="home" id="top">
        <home-firstscreen></home-firstscreen>
        <home-abouttours></home-abouttours>
        <home-pricetour></home-pricetour>
        <home-subscription></home-subscription>
        <home-hostel></home-hostel>
        <home-memorytourist></home-memorytourist>
        <home-gallery></home-gallery>
        <home-teams></home-teams>
        <home-contacts></home-contacts>
    </div>
</template>

<script>
    import HomeFirstscreen from "@/components/HomeFirstscreen";
    import HomeAbouttours from "@/components/HomeAbouttours";
    import HomePricetour from "@/components/HomePricetour";
    import HomeSubscription from "@/components/HomeSubscription";
    import HomeHostel from "@/components/HomeHostel";
    import HomeGallery from "@/components/HomeGallery";
    import HomeTeams from "@/components/HomeTeams";
    import HomeContacts from "@/components/HomeContacts";
    import HomeMemorytourist from "@/components/HomeMemorytourist";
    export default {
        name: "Home",
        components: {
            HomeMemorytourist,
            HomeContacts,
            HomeTeams,
            HomeGallery,
            HomeHostel, HomeSubscription, HomePricetour, HomeAbouttours, HomeFirstscreen}
    }
</script>

<style scoped>
.home {

}
</style>