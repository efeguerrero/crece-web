//data import
import data from './data.json';

import { Tab } from '@headlessui/react';

function Services() {
  return (
    <section class=" bg-gray lg:py-6 lg:pb-20">
      <div
        id="about"
        class="mx-auto flex flex-col px-6 py-20 lg:w-[90vw] lg:gap-6 lg:px-6 lg:py-36 xl:w-[70vw]"
      >
        <div class="mb-8 max-w-screen-md lg:mb-16">
          <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-alpha">
            Designed for business teams like yours
          </h2>
          <p class="text-alpha sm:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <Tab.Group>
          <div class="flex">
            <Tab.List>
              <div class="flex flex-col">
                {data.map((item) => (
                  <Tab class=" border-b-[1px] border-b-alphaLight  px-16 py-6 backdrop-blur-xl">
                    {item.title}
                  </Tab>
                ))}
              </div>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
}

export default Services;
