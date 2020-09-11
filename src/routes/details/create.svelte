<script>
  import { goto } from '@sapper/app';

  let title;
  let cost;
  let specifics;

  const handleSubmit = async () => {
    if (title && cost && specifics) {
      const res = await fetch("details.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, cost, specifics })
      });
      const updatedDetails = await res.json();
      goto('details');
    }
  };
</script>

<style>
  h2 {
    text-align: center;
  }
  form {
    max-width: 380px;
    margin: 40px auto;
    text-align: center;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 8px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }
</style>

<h2>Customize a detail</h2>

<form on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="detail title" bind:value={title} required />
  <input
    type="number"
    placeholder="allowed budget"
    bind:value={cost}
    required />
  <textarea placeholder="detail specifics" bind:value={specifics} required />
  <button class="btn">Submit Detail Request</button>
</form>
