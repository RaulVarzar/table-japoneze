import { FadeIn } from '../../utils/animations';

export default function AboutUs() {
  return (
    <>
      <h3 className="text-2xl font-semibold uppercase">Bine ați venit!</h3>
      <FadeIn
        delay={0.9}
        duration={0.6}
        className="grid gap-4 text-sm text-left md:text-lg"
      >
        <p className="opacity-70">
          Table Japoneze este un blog despre istoria si cultura auto japoneza
          infintat in 2016. Din primele zile de existenta a blogului acesta
          mereu a urmarit sa livreze cunostinte, sa clarifice anumite
          neintelegeri cand vine vorba de masini japoneze dar si sa puna la
          pamant mituri.
        </p>
        <p className="opacity-70">
          Subiectele articolelor postate sunt si mereu vor fi transparente si
          vaste, de la masini Kaido Racer si VIP cu camber excesiv si Kei Cars
          pana la masini de performante inalte fie ele de t ime attack, drift
          sau raliu cu mediu de activitate legal sau ilegal.
        </p>
        <p className="opacity-70">
          Table Japoneze s-a nascut din dorinta de a educa si a duce mai departe
          cultura auto japoneza atat ca forma de divertisment dar si ca lucruri
          utile care pot fi aplicate in realizarea anumitor modificari pentru
          masini japoneze dar si europene.
        </p>
      </FadeIn>
      <a href="http://discord.com/invite/MrpXKkR4ek">
        <button className="uppercase rounded-sm shadow-xl btn-sm bg-opacity-90 btn btn-accent btn-outline">
          Join our discord
          <i className="fa-brands fa-discord "></i>
        </button>
      </a>
    </>
  );
}
