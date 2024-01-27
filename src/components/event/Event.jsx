import EventDescription from './EventDescription';
import EventForm from './EventForm';
import { FadeIn, FromLeft } from '../../utils/animations';

export default function Event() {
  return (
    <FadeIn duration={0.5} delay={0.1}>
      <div className="flex flex-col items-start w-full h-full gap-4 mx-auto xl:grid xl:grid-rows-1 xl:grid-cols-5">
        <FromLeft
          delay={0.3}
          duration={0.5}
          className="relative z-10 w-full xl:col-span-3"
        >
          <EventDescription />
        </FromLeft>
        <FromLeft
          delay={0.5}
          duration={0.5}
          className="w-full mx-auto xl:col-span-2 z-1"
        >
          <EventForm />
        </FromLeft>
      </div>
    </FadeIn>
  );
}
