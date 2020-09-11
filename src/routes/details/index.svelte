<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch("/details.json");
    const details = await res.json();

    return { details };
  }
</script>

<script>
  export let details;
</script>

<style>
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
  }
  li a {
    display: block;
    margin: 10px auto;
    padding: 15px;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    text-decoration: none;
   }
  li a:hover {
    background: #fbfbfb;
  }
   div {
     text-align: center;
   }
</style>

<h2>Available Details</h2>
<ul>
  {#each details as detail}
    <li>
      <a rel=prefetch href={`details/${detail.id}`}>{detail.title}</a>
    </li>
  {/each}
</ul>

<div>
  <a href="details/create" class="btn">Create a custom detail!</a>
</div>
