<script context="module">
  export async function preload(page, session) {
    const { id } = page.params;

    const res = await this.fetch(`details/${id}.json`);

    if (res.status === 200) {
      const detail = await res.json();
      return { detail };
    }

    if (res.status === 404) {
      const { error } = await res.json();
      this.error(404, error);
    }
  }
</script>

<script>
  export let detail;
</script>

<div class="detail">
  <h2>{detail.title}</h2>
  <p>Cost of detail: ${detail.cost}</p>
  <p>{detail.details}</p>
</div>
