<script>
  import ld from "lodash";

  import { _, locale, locales, dictionary, isLoading } from "svelte-i18n";

  let countries;
  $: {
    countries = [];
    let dic = $dictionary[$locale];
    if (!$isLoading) {
      ld.pickBy(dic, (v, k) => {
        if (k.includes("countries.list")) {
          const key = k.split(".")[2];
          countries.push({ key, value: v });
        }
      });
    }
    console.log(countries);
  }
</script>

{JSON.stringify(countries, null, 2)}
