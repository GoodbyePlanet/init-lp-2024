import { useAtom } from 'jotai';
import { currentPageAtom, isSceneLoaded, PAGES } from '../atoms.js';
import Button from './Button.jsx';
import SocialMedia from './SocialMedia.jsx';
import Conference from './Conference.jsx';
import Contact from './Contact.jsx';
import Speakers from './Speakers.jsx';
import Gears from './Gears.jsx';

export const UI = () => {
  const [currentPage, _] = useAtom(currentPageAtom);
  const [sceneLoaded, __] = useAtom(isSceneLoaded);

  const shouldShowButtons =
    currentPage === PAGES.HOME ||
    currentPage === PAGES.CONFERENCE ||
    currentPage === PAGES.CONTACT ||
    currentPage === PAGES.SPEAKERS;
  const isOnPage = (page) => currentPage === page;
  const shouldShowHomeButton = isOnPage(PAGES.CONFERENCE) || isOnPage(PAGES.CONTACT) || isOnPage(PAGES.SPEAKERS);

  return (
    <div className="fixed inset-0 pointer-events-none">
      <section
        className={`flex w-full h-full flex-col items-center justify-center duration-500 ${shouldShowButtons ? '' : 'opacity-0'}`}
      >
        <div className="h-[88%]"></div>
        {isOnPage(PAGES.HOME) && sceneLoaded && (
          <>
            <div className="flex gap-2">
              <Button page={PAGES.CONFERENCE} />
              <Button page={PAGES.SPEAKERS} />
              <Button page={PAGES.CONTACT} />
            </div>
            <ContactContainer />
          </>
        )}
        {shouldShowHomeButton && <Button page={PAGES.HOME} />}
        {isOnPage(PAGES.CONFERENCE) && <ContactContainer Component={Conference} />}
        {isOnPage(PAGES.CONTACT) && <ContactContainer Component={Contact} />}
        {isOnPage(PAGES.SPEAKERS) && <Speakers />}
      </section>
    </div>
  );
};

const ContactContainer = ({ Component }) => {
  return (
    <>
      {Component && <Component />}
      <div className="fixed bottom-7 right-4 flex flex-col gap-4">
        <SocialMedia />
      </div>
      <div className="pointer-events-auto cursor-pointer fixed bottom-7 left-9 w-12 hover:accent-yellow-400">
        <Gears />
      </div>
    </>
  );
};
