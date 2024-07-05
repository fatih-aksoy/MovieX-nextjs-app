next js full stack gelistirmek icin bir frameworktur.
CSR: client side rendering
SSR: server side rendering
SEO: search engine optimization
next js de istek attgimizda server dan ilgili sayfa geliyor. istek atildiginda SSR lar static bir bundle haline getiriliyor. bu ilk render da olur. static olarak veriler (hazir veriler; home about profile vb) gelir. sonra JS calisir yani client side veriler calisir. yani next js client side yukunu azaltir ama tamamen server side da da vermiyor, CSR ve SSR arasindaki yuku azaltmis oluyor, dengeliyor. CSR icin "use client" diye yazilir. config dosyalrindaki degisiklikleren sonra prjeyi durdurup baslatmakta fayda var.

yarn
yarn run dev

layout.js bizim react teki index.html deki gibi ana dosyamiz.
peki root icinde nested bir root nasil olusturucam? movies folder icinde movie-detail diye bir folder daha acarim ve icinde page.jsx olustururum. http://localhost:3000/movies/movie-detail seklinde private olmasini istedigim private roota giderim.

soru su? movie detail sayfasi statik mi olucak? hayir, movie-detail folder dinamik olmasi icin [movieId] biciminde yazilir. dinamik root icin koseli parantez icinee alinir. peki burada id nasil yakalinir? const MovieDetail = ({params}) => {
return <div>MovieDetail</div>;
};
id yi yakalamak icin ({params}) yazariz. mesela http://localhost:3000/movies/3 gibi boylece movie-detail sayfasini gideriz.

next jsde butun componentler server side componentlerdir. yani server side calisir. eger client side calismasini isiyorsak, use client directive sini kullancagiz. yani browser a gelsin ve javascript calissin. use client neden kullanilir, mesela hooklar, error.js mesela, useStare, useRouter vs, hooklar server side tarafinda kullanilmaz.

app folder içindeki page.js "/" route olan home sayfasıdır

SORU: rootlari nasil navigate edecegiz?

export const metadata={...} lari movie ve page sayfalarinda yazdiktan sonra artik navbar a gecebiliriz. oncesinde rootlari bir organize etmeliyiz. bunun icin bir folder acariz app icinde ve parantez icinde (private) yazariz. boyle parantez icinde yazinca bu normal rootlara dahil olmuyor. birder (public) folder i acalim.

(private) folder icine movies ve profile folder larini tasiyalim, (public) dosyasinda ise login ve register dosyalarini tasiyalim.

ana dosya icine bir components folder acalim. ve artik Navbar.jsx file ni olusturalim. tailwind css kullanicaz ve bazi paketlei yuklemeliyiz.

yarn add @headlessui/react @heroicons/react

Navbar.jsx her sayfada olacagi icin, global seviyede tutulur. yani layout.js icinde cagiracagiz. layout.js bizim butun application umuzu icine alir <body></body> icine.

use client ne demek, bu compoennt artik server da degil browser da render etsin demektir.

simdi burada terminali durdurup yarn run build yapalim. .next folder olusturulur. Ondan sonra yarn run start dersek build aldigimiz dosyayi calistirir. yani prpduction halini almis dosyayi calistirir.

Bu islemlerde sonra artik `https://firebase.google.com/` sitesinden authentication islemleri icn movie app projesi olusturacagiz. hesap ac, go to console, create project, movie app ve 2 checkbox tikla, continue de. enable Google Analytics for this projecti kapat ve create project de. `https://console.firebase.google.com/project/movie-app-a3ca0/settings/general/web:MGU1ZWNkMGMtZTk2ZS00Mjk4LWFiYjctMmU5YzgxZGE0MzY3` bu linkte api bilerleri var ve .env dosyasini buradaki bilgilerle doldur. `https://www.themoviedb.org/u/fatih-dev` `https://www.themoviedb.org/settings/api` burdan TMDB key al.

daha sonra build kisminda Authentication kismina tiklayalim. Email/password ile giris yapmasini istiyorum. tikladik. email/password u enable yaptik. save deriz. tekrar build altindan authenticaton a geldik. sign in method a bas. o bize provider cikarir. yani app mizi email/password ile giris yapmamiza izin ver dedik.

terminale bir tane warning geliyor; Import trace for request module. birada encoding diye birsey var. encoding ile ilgili kutyphaneyi ekleyince bu warning kalkiyor. yarn add encoding

display name i artik degisken olarak göstermek icin components e gideriz Navbar.jsx icinde const {currentUser}useContext(AuthContext) i getiririz.

sonra login islemi icin, Login sayfasina gidelim. register olduktan sonra bizim kullaniciyi nereye göndermemiz lazim? kullanici giris yaptikan sonra, netflix den biliyoruz ki, kullanici profil sayfasina gider. benim kullanici profil sayfasina yonlendirmem gerekir. public folder da register folder a gidelim. peki biz bunu nasil yapiyorduk? tabi ki navigate ile yapiyorduk. ama burada biz bunun alternatifini yapacagiz. AuthContext.js de, const createUser, register islemi basarili olursa profile gönder. kullaniciyo yönlendirmek istiyoruz. burda useNavigate in alternativi useRouter kullanicaz. const router = useRouter();
hooklari kullanmak icin bizim useclient leri kullanmamiz gerekiyor. AuthContext.js componenti ben "use client" haline getirdim. sonra bi sayfa nereye gitsin? router.push("/profile) satiri ile profile sayfasina gitsin.
import { useRouter } from "next/navigation"; import ederken next/navigation dan import etmeyi unutmayalim. automatic import ederken hala eski hali ile import edebiliyor. burda bir önceki sayfa ya da bir sinraki sayfaya girmek icin router.back() ve router.forward() kullaniriz. yani -1, -2 +1 gibi.

AuthContext.js de,
router.push("/profile) metodunu signIn kismina da ekleyelim. googleAuthprovider kismina da eklemeliyiz.

sonra login sayfasini netflix react projesinden cekeriz ve login folder icinde Page.jsx e ekleriz.

bundan sonra profile sayfasina gidelim. burdaki export const metadata = {
title: "Profile",
}; meta data sayseinde title i mizi istedigmiz zaman guncelleyebiliyorduk. tabi bunun icin sayfanin server component olmasi gerekir. burda bir de cardContainer kullanacagiz. bu component i client olarak kullanivaz, cunku icinde state tutacagiz. context i cagiracagim icin client olmasi lazim. ama ben tum bu profile sayfasini client hapmak istemedigim icin, burada profile folder icinde bir component acacagim. burada Page.jsx server side kalsin istiyorum. icerisinde client bir component olsuturup onu kullanacagim.

Profile sayfasina image leri getirelim. bu da public dosyasinin icinde. eger public icinde isse direk yol gösterebiliriz. import etmeye ihtiyac kalmiyor.

components folder icine CardConteiner.jsx acariz.
CardContainer icinde UserCard componenti ni cagiracagiz.

profile folder icinde, page.jsx icinde CardContainer i cagiririz.

Error: Attempted to call useAuthContext() from the server but useAuthContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component. bu hatati alirsan, ussteki page.jsx compomentini "use client" olarak cagirmalisin. bu component i client olarak belirtmeliyim.

simdi bu profillere tiklandiginda ana sayfaya gidicem. bu yuzden bir event vermeliiym. useCard a bir on Click verecegim. movies lere yonlendirecegim

import { useRouter } from "next/navigation"; unutma!! useRouter, next/navigation dan alinacak.

let router = useRouter();

birinci div icerisine, onClick={()=>router.push("/movies")}

layout.js icerisinde ToastContainer i cagirabilirz. bunun import u nu da ekleyelim. import "react-toastify/dist/ReactToastify.css";

simdi (private) folder icinde, movies folder icinde [movieId] folder icinde page.jsx e gidelim. artik Movies kismindayiz.

simdi burada movie datalarini API den cekmemiz lazim.

REACT DA IKEN DURUM NASILDI?

component render oluyordu. didmount/useEffect aninda API den veri islemi yapiyordum, yani fetch() islemi. gelen responsu state in icine atiyordum. setState(res) gibi.. sonra component yeniden render oluyordu. ikinci render dan sonra ekrana UI geliyordu. birinci adim render, ikinci adim didmount ani, ucuncu adim tekrar render, dörduncu adim UI ekrana geliyordu.

PEKI NEXT.JS DE DURUM NASIL OLACAK?

didmount u beklemeden daha server asamasinda iken biz bu isi yapiyorduk.

server da api den veriyi cekebiliyoruz. server da fetch islemi yapiyoruz. response geliyor. ben bu respons u, UI render olur olmaz bu movie leri yakalayabiliyorum.nasil? server yapilari asyncron hale getirip ,async ve await yapisi ile (server component) await le datayi cekip direk UI da sergileriz.

boylece bu datayi ayrica bir state te atmama gerek kalmiyor. cunku ben daha henuz server dayim. dsata yi aliyorum, server da iken html imi hazirliyorum, icine gomuyorum. daha server da iken html im hazirlanmiz oluyor ve bu UI a geliyor.

onun icin soyle yapalim. function burda da yazilir ama ben bu async fonk u (bu servisi) birden fazla yerde kullanacagim icin bir helpers icinde movieFunctions.js isminde bir file acariz.

movieFunctions.js file gidip api ye istek atalim. bur da server da ulasacagim icin, bu bir client dosyasi degil, next public e ihtiyacim yok, direk TMDB_KEY diyorum. bunu her yerde kullanacagim icin export diyorum.

movieFunctions.js icinde neden fetch kullaniyoruz? next.js fetch i kendi uyarlamis ve bazi özellikler getirmis.

movieFunctions.js da, bu sayfada response su yakalariz. results vardi. fetch kullandigimiz icin res.json() lastiririz. results i return etmemiz lazim. react te yaptigimiz gibi artik state ye atmiyoruz artik. buradaki const {results}=await res.json() dan results i yakalayip dondurucez.

simdi [movieId] icinden movie i yakalayicagiz. artik burda, server daki asyncron islemi, yine burada bir server component te yakalayabilmem icin, bunu da asyncron haline getirmem lazim. burda console.log(movies) yapariz ama browser da degil, terminalde console lun sonucunu göruruz.

sonuc olarak moviefuncrions.js de bir movie datasini cekmek icin bir tane asyncron bir fonk. olusturduk. burda apiden gelen dayayi state atmiyoruz. cunku const { results } = await res.json() return results; bu fonk.tan return ediyoruz. ve bu return ettgim degeri ben server componenti async/await yapisi ile, daha server da iken await ile yakalayip kullanabiliyorum, goruyorum.

Next.js, import edilen dosyaya göre image genişliğini ve yüksekliğini otomatik olarak belirler ancak Next.js'nin build işlemi sırasında remote dosyalara erişimi olmadığından, genişlik ve yükseklik özelliklerini manuel olarak sağlamanız gerekir.

next.config.js icinde farklı domainlerden alınan image'ler için ilgili domainler config dosyasında belirtilmelidir.

HeroSection.jsx icine gidelim, burdan bana neler gelecek? const HeroSection = async ({ title, overview, id })

HeroSection.jsx icinde, next/link arka planda sayfayı önceden fetch edilir. Bu, client tarafı gezintilerin performansını iyileştirmek için kullanışlıdır. Görünüm alanındaki herhangi bir <Link /> önceden yüklenecektir.

sonra VideoSection.jsx i olusturalim. burada bir tane iframe mi gomuyoruz. videoKey nereden gelecek. bunun icin bir tane fetch islemi yapacagiz. bunun icin MovieFunctions icersinde bir function yazacagiz. burada data cekme islemi yaoacagiz. export const getVideoKey = async (movieId) icine ne gelecek, movieId gelecek. hangi video yu cekecegime göre bir id cekecem. Id ye göre data mi cekecegim. const data = await res.json(); return data?.results[0]?.key; datayi json lastirip return edecegiz. datayi yakalayalim. Datanin, results sinin icinde sifirinci index inin key i. ben burada bunu return etmeliyim. API deki key bu sekilde. daha sonra const HeroSection a gidip bunu async comp. haline getirmeliyiz.

sonra movieDetails sayfasina gececegiz. bunun icin gene movieFunctions.js kismini kullanicaz, orasi acik kalsin.

---
