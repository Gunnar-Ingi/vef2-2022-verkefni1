export function makeHTML(entry) {

  const vari = entry.var;
  const maxi = entry.max;
  const meani = entry.mean;
  const mediani = entry.median;
  const mini = entry.min;
  const stdi = entry.std;
  const sumi = entry.sum;
  const rangei = entry.range;
  const numbEntry = entry.numbers;

  const template = `
  <head>
    <meta charset="utf-8" />
    <title>Gagnavinnsla</title>
    <link rel="stylesheet" href="../styles.css">
  </head>

  <body>
    <div class="wrapper">
      <main>
            <section>
              <ul>
                <li>var:${vari}</li>
                <li>max:${maxi}</li>
                <li>mean:${meani}</li>
                <li>median:${mediani}</li>
                <li>min:${mini}</li>
                <li>std:${stdi}</li>
                <li>sum:${sumi}</li>
                <li>range:${rangei}</li>
                <li>gögnin:${numbEntry}</li>
              </ul>
            </section>
      </main>
    </div>
  </body>
  `;

  return template;
}
