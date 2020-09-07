<script>
  export let segment;

  const handleClick = () => {
    console.log(segment);
  };
</script>

<style>
  nav {
    background-color: #fff3ef;
  }
  nav div {
    max-width: 960px;
    padding: 0 10px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  h1 {
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
  }
  ul {
    padding: 0;
    margin: 0;
    text-align: right;
  }
  li {
    list-style-type: none;
    display: inline-block;
  }
  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
	a.current {
		border-bottom: 3px solid #ff3e00;
	}
</style>

<nav>
  <div>
    <h1 on:click={handleClick}>KL Detailing</h1>
    <ul>
      <li>
        <a href="." class:current={segment === undefined}>home</a>
      </li>
      <li>
        <a rel=prefetch href="details" class:current={segment === 'details'}>details</a>
      </li>
      <li>
        <a href="about" class:current={segment === 'about'}>about</a>
      </li>
      <li>
        <a href="contact" class:current={segment === 'contact'}>contact</a>
      </li>
    </ul>
  </div>
</nav>
