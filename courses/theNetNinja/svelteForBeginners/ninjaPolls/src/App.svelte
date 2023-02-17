<script>
    import Footer from "./components/footer.svelte";
import Header from "./components/header.svelte";

	export let name;
</script>

<Header />
<main>
	<p>Stuff</p>
</main>
<Footer />

<style>
    main {
        max-width: 960px;
        margin: 40px auto;
    }
</style>