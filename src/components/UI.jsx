import { useAtom } from 'jotai';
import { currentPageAtom, isSceneLoadedAtom, isSoundEnabled, PAGES } from '../atoms.js';

export const UI = () => {
  const [currentPage, _] = useAtom(currentPageAtom);
  const [sceneLoaded, __] = useAtom(isSceneLoadedAtom);
  const [soundEnabled, setIsSoundEnabled] = useAtom(isSoundEnabled);

  const shouldShowButtons =
    currentPage === PAGES.HOME ||
    currentPage === PAGES.CONFERENCE ||
    currentPage === PAGES.CONTACT ||
    currentPage === PAGES.SPEAKERS;
  const isOnPage = (page) => currentPage === page;

  const handleSoundEnable = () => setIsSoundEnabled(!soundEnabled);

  return (
    <div className="pointer-events-none fixed inset-0">
      <section
        className={`flex h-full w-full flex-col items-center justify-center duration-500 ${shouldShowButtons ? '' : 'opacity-0'}`}
      >
        <div className="h-[88%]"></div>
        {sceneLoaded && (
          <div className="flex w-full justify-end">
            <h5 className="italic mr-4 mt-20 text-white drop-shadow-[0_0_10px_#0ff] drop-shadow-[0_0_20px_#0ff] drop-shadow-[0_0_5px_#0ff]">
              https://github.com/GoodbyePlanet
            </h5>
          </div>
        )}
      </section>
    </div>
  );
};
