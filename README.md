# TailwindCSS ve Kurulum

Tailwind CSS temel tüm css özelliklerini ön tanımlı ve konfigüre edilebilir şekilde sunan, tekrar eden css kullanımlarını engelleyen, html kodunuzdan ayrılmadan hızlı, ölçeklendirilebilir ve modern web arayüzleri oluşturabileğiniz utility-first CSS framework'üdür.

Bootstrap, Semantic UI, Bulma vb. klasik css frameworklerinin aksine sizlere button, navigation, card, accordion gibi UI componentler sunmaz. Bu componentleri ön tanımlı utility class'ları kullanarak kendiniz oluşturmanız gerekir. Özellikle react, vue, angular gibi component bazlı tool'lar ile çalışıyorsanız component'larınıza yeni bir özellik eklemek çok daha kolay hale geliyor. Ayrıca değişikliğim layout'u bozar mı uygulamamın istenmedik bir yeri etkilenir mi gibi sorunlarla da karşılaşmıyoruz. Çünkü component'imiz kendi kendini izole etmiş oluyor.

#### Temel Özellikleri:

**Utility-First Yaklaşımı**: Tailwind CSS, her biri belirli bir CSS özelliğini temsil eden çok sayıda küçük yardımcı sınıf içerir. Böylece, tasarımı oluşturmak için bu yardımcı sınıfları kombinleyerek işinizi kolaylaştırır. Örneğin, text-red-500 sınıfını kullanarak metin rengini kırmızıya ayarlayabilirsiniz.

**Özelleştirilebilirlik**: Tailwind CSS, varsayılan stilleri değiştirerek ve yeni stiller ekleyerek tamamen özelleştirilebilir. Projeniz için özel renkler, fontlar, kenar boyları ve daha fazlasını tanımlayabilirsiniz.

**Düşük Boyut**: Tailwind CSS, sadece ihtiyacınız olan stilleri içerdiği için diğer büyük CSS çerçevelerine kıyasla daha düşük boyutlu olabilir.

**Kolay Entegrasyon**: Tailwind CSS, çoğu modern proje oluşturma aracı ile kolayca entegre edilebilir. React, Vue, Angular gibi çerçeveler veya Create React App, Vue CLI, Laravel gibi araçlarla uyumludur.

**Responsive Tasarım Desteği**: Tailwind CSS, mobil cihazlar ve farklı ekran boyutları için hızlı ve kolay bir şekilde duyarlı tasarım oluşturmanızı sağlar.

Tailwind CSS, daha az abartılı ve daha işlevsel tasarım ihtiyaçları olan projeler için idealdir. Bileşen tabanlı bir yaklaşım yerine, stil ve düzen sınıflarının kullanılması, özellikle başlangıç düzeyindeki geliştiricilerin ve tasarımcıların hızlı ve verimli bir şekilde çalışmasına yardımcı olur.

Unutmayın ki, Tailwind CSS ve diğer CSS çerçeveleri arasında seçim yaparken, proje gereksinimlerinizi, ekibinizin becerilerini ve projenin ölçeğini dikkate almanız önemlidir.

### Tailwind CSS Dezavantajları

Karmaşık bir html layout'u ile karşılaşabilirsiniz fakat bu gibi durumları da @apply metoduyla çözüyoruz.

Yeni başlayan ve css tecrübesi çok olmayan kişiler için başlangıçta karmaşık gelebilir. Fakat pratik yaparak kolayca adapte olabilirsiniz.

### React Projelerinde TailwindCss Kurulumu

1. Install Tailwind CSS
   Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.

```
npm install -D tailwindcss
npx tailwindcss init
```

2. Configure your template paths
   Add the paths to all of your template files in your `tailwind.config.js` file.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

_Content_<br>
Tailwind css ile geliştirme yaptığımız kaynakları belirttiğimiz kısımdır. Yani kısaca tailwind css class'larını kullandığımız dosya yollarını belirttiğimiz property'dir. Content property'sini yanlış veya eksik tanımlarsanız css çıktılarınız beklediğiniz gibi olmayacaktır.

_Theme_<br>
Theme property'si tailwind css'i konfigüre ettiğimiz kısımdır. Örneğin çalıştığınız projenin ana rengi mavi ve siz tailwind css tarafında bu mavi rengi tanımlamak istiyorsanız bu alanda yazmanız gerekiyor. Vermek istediğiniz custom özellikleri `extend` içerisinde yazmsazsanız tailwindcss e ait değerleri kullanamazsınız.

_Plugins_<br>
Plugins kısmı da third party pluginleri eklediğimiz kısımdır. Tailwind CSS tarafından yayınlanmış offical pluginleri veya diğer geliştiricilerin yayınladığı pluginleri bu kısma ekliyoruz.

3. Add the Tailwind directives to your CSS
   Add the @tailwind directives for each of Tailwind’s layers to your `./src/index.css` file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Start your build process

Run your build process with npm run start.

```
npm start
yarn start
```

5. Start using Tailwind in your project

Start using Tailwind’s utility classes to style your content.

```
function App() {
  return (
    <div className="bg-slate-600 h-screen">
      <h1 className="text-3xl font-bold underline">TailwindCss Kurulum</h1>
    </div>
  );
}

export default App;

```

Tailwind CSS sizin tüm ihtiyaçlarınıza muhtemelen cevap verecektir. Fakat çok daha spesifik ihtiyaçlarınız olduğunda da ona da bir çözüm yolu sunmuştur. Örneğin; bir spesifik height değeri vermek istiyorsunuz css e bulaşmadan **square bracket notation** kullanarak değerlerimizi verebiliriz. `400px` vermek istiyoruz diyelim o zaman şu şekilde yapabiliyoruz `h-[400px]` gibi aynı şekilde diğer özelliklerde de kullanabiliyoruz. `top-[10px], w-[300px], h-[12px], p-[14px], bg-[#bd4147]`. Örnek:

```
<div className="flex justify-center items-center h-[400px"]></div>
```

#### Extra

- Dynamic Values

İsteğe bağlı değerler kullanırken yine de tasfiye edilebilir HTML yazmanız gerektiğini ve Tailwind'in bunları doğru algılaması için sınıflarınızın eksiksiz dizeler olarak var olması gerektiğini unutmayın.

❌ Don't use string concatenation to create class names

```
<div className={`mt-[${size === 'lg' ? '22px' : '17px' }]`}></div>
```

✅ Do dynamically select a complete class name

```
<div className={ size === 'lg' ? 'mt-[22px]' : 'mt-[17px]' }></div>
```

Tailwind, herhangi bir istemci tarafı çalışma zamanı içermez, bu nedenle sınıf adlarının oluşturma sırasında statik olarak ayıklanabilir olması gerekir ve istemcide değişen herhangi bir rasgele dinamik değere bağlı olamaz. Bu durumlar için satır içi stilleri kullanın veya projeniz için anlamlıysa Tailwind'i Emotion gibi bir CSS-in-JS kitaplığıyla birleştirin.

- Values with spaces

CSS sınıflarının boşluk içeremeyeceğini unutmamak da önemlidir, yani calc(100px - 4rem) veya 1fr 700px 2fr olduğu gibi rasgele değerler kullanamazsınız. Sınıf isimlerinizde bunun gibi rasgele değerler kullanmak için, calc çağrıları gibi şeylerdeki boşlukları kaldırmanız ve 1fr 700px 2fr gibi listelerdeki boşlukları virgülle değiştirmeniz gerekir. Tailwind, calc çağrılarında sizin için boşlukları otomatik olarak yeniden tanıtacak ve karşılık gelen CSS'yi oluştururken listelerdeki virgülleri boşluklarla değiştirecektir.

❌ Don't use spaces in arbitrary values

```
<div className="h-[calc(1000px - 4rem)]">...</div>
<div className="grid-cols-[1fr 700px 2fr]">...</div>
```

✅ Remove spaces or replace with commas as appropriate

```
<div className="h-[calc(1000px-4rem)]">...</div>
<div className="grid-cols-[1fr,700px,2fr]">...</div>
```

- Built-in important modifier

Bir ! ekleyerek herhangi bir yardımcı programı önemli hale getirebilirsiniz. karakter başına:

```css
<p className="font-bold !font-medium" >
  This will be medium even though bold comes later in the CSS.
</p>
```

! her zaman yardımcı program adının başında, herhangi bir varyanttan sonra, ancak herhangi bir önekten önce gelir:

```
<div class="sm:hover:!tw-font-bold">
```

Bu, kontrol etmediğiniz bazı stillerle savaş halinde olduğunuz için özgüllüğü artırmanız gereken nadir durumlarda yararlı olabilir.

[Daha detaylı özellikler için tıklayınız.](https://v2.tailwindcss.com/docs/just-in-time-mode#new-features)

### @layer ve @apply Yöntemi

Dezavantajları kısmında bahsettiğimiz karmaşık html yapıları oluşma durumunun önüne @layer ve @apply metodları ile geçiyoruz.

#### @layer Yöntemi:

Tailwind CSS 2.2.0 sürümünden itibaren kullanılabilen @layer yöntemi, stilleri mantıksal katmanlar altında düzenlemek için kullanılır. Bu, özellikle büyük projelerde, stilleri daha düzenli ve yönetilebilir hale getirir.

İki yaygın kullanımı vardır:

**@layer base**: Global düzeyde (tüm sayfa boyunca) bazı elementlere özgü stilleri belirtmek için kullanılır. Örneğin, h1, h2, p, gibi elementler için temel stilleri burada tanımlayabilirsiniz.

**@layer components**: Bileşenlere (component) veya özel sınıflara (class) özgü stilleri belirtmek için kullanılır. Özel bileşenler veya component'ler için stilleri bu katmanda düzenleyebilirsiniz.

Örnek:

```css
@layer base {
  h1 {
    font-size: 2rem;
  }
}

@layer components {
  .main {
    @apply bg-blue-500 p-4;
  }
}
```

@apply Yöntemi:
@apply yöntemi, stil sınıflarını birden çok element veya component üzerinde tekrar kullanmayı kolaylaştırır. Böylece, aynı stilleri farklı yerlerde kullanırken daha az kod yazmanızı sağlar.

Örnek:

```html
<div class="my-button">
  <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Click Me</button>
</div>
```

```css
.my-button {
  @apply bg-blue-500 text-white px-4 py-2 rounded-md;
}
```

Yukarıdaki örnekte, .my-button sınıfı, içindeki düğme elementine uygulanan stilleri tekrar kullanır. Bu sayede, .my-button sınıfını kullanarak diğer düğme elementlerine de aynı stilleri uygulayabilirsiniz.

Ayrıca, @apply yöntemiyle birden çok sınıfı birleştirerek özel stiller oluşturabilirsiniz:

```css
.my-special-button {
  @apply bg-blue-500 text-white px-4 py-2 rounded-md shadow-md;
}
```

@apply yöntemi, stil yönetimini daha modüler hale getirir ve stil değişikliklerini kolayca yönetmenize yardımcı olur.

## Kullanımı ile birlikte, @layer ve @apply yöntemleri, Tailwind CSS'in stil düzenini daha etkili bir şekilde yönetmeyi sağlar ve stil kodunun daha temiz ve düzenli olmasına katkıda bulunur.

---

- Step 2 : Signup `https://firebase.google.com/` and create new app in firebase.
  Firebase is a backed application development software that enables developers to develop iOS, Android and Web apps. It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure. Firebase offers a number of services, including: analytics,authentication, cloud messaging, realtime database, performance and test lab. Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.

![Project 005 Snapshot](firebase-create-app.gif)

- Step 3 : Use `https://firebase.google.com/docs/auth/web/start` and create `Authentication` operations.
  - Add the Firebase Authentication JS codes in your `firebase.js` file and initialize Firebase Authentication:

```jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration at project settings part
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
```

- Use this method to `Sign up new users` :

```jsx
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
```

- Go to https://console.firebase.google.com => Authentication => sign-in-method => `enable Email/password`
- Use this method to `Sign in existing users` :

```jsx
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
```

- Use this method to `Set an authentication state observer and get user data` :

```jsx
import { getAuth, onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
  } else {
    // User is signed out
  }
});
```

- Go to https://console.firebase.google.com => Authentication => sign-in-method => `enable Google`
- Use this method to `Authenticate Using Google with Popup` :

```jsx
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error);
  });
```

- Use this method to `Sign Out` :

```jsx
import { getAuth, signOut } from "firebase/auth";

signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
```

- Use this method to `Send a password reset email` :

```jsx
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
  })
  .catch((error) => {
    const errorMessage = error.message;
    // ..
  });
```

- Step 4 : Signup `https://www.themoviedb.org/documentation/api` and get API key. In order to get data use `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, to search movies use `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`, to get movie details use `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}` and to get video key use `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`. Use `https://image.tmdb.org/t/p/w1280${poster_path}` for image `src`.

- Step 5: You can use css frameworks like Bootstrap, Semantic UI, Material UI.

- Step 6: Add project gif to your project and README.md file.

## Notes

- You can add additional functionalities to your app.

**<p align="center">&#9786; Happy Coding &#9997;</p>**

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
