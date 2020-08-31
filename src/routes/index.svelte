<style>
  div {
    margin-top: 60px;
    text-align: center;
  }

  h1 {
    font-size: 2em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  img {
    width: 100%;
    max-width: 480px;
    display: block;
    margin: 0 auto 1em auto;
    border-radius: 5px;
  }

  p {
    margin: 1em auto;
  }

  a {
    margin-top: 40px;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>KL Detailing</title>
</svelte:head>

<div>
  <h1>KL Detailing</h1>
  <img src="hero-car.jpg" alt="hero-car" />
  <p>Customize your mobile detail to suit your needs!</p>
  <a href="details" class="btn">View Details</a>
</div>
