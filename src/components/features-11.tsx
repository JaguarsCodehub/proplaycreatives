import { Button } from './button';

export function Features() {
  return (
    <section className='dark:bg-muted/25 bg-black font-poppins md:py-20'>
      <div className='mx-auto max-w-2xl px-4 sm:max-w-3xl md:max-w-4xl lg:max-w-6xl'>
        <div className='mx-auto grid items-center gap-10 sm:gap-12 grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col justify-center space-y-6'>
            <h2 className='text-2xl font-bold tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-5xl'>
              Bridging Brands and Bold Creators for Campaigns That Convert
            </h2>
            <p className='max-w-[600px] text-base sm:text-lg text-muted-foreground'>
              From Samsung to Red Bull, we handpick creators who elevate your
              brand storytelling—and drive measurable growth.
            </p>
            <div className='flex w-full flex-col gap-3 sm:flex-row sm:gap-4'>
              <Button size='lg' className='w-full sm:w-auto'>Contact Us</Button>
              <Button size='lg' variant='secondary' className='w-full sm:w-auto'>
                See Our Work
              </Button>
            </div>
          </div>
          <div className='flex flex-col space-y-6 rounded-xl bg-zinc-900/50 p-5 sm:p-8'>
            <h3 className='text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl'>
              Why Pro Play Creatives?
            </h3>
            <p className='text-sm sm:text-base text-muted-foreground'>
              At Pro Play Creatives, we don’t just bring brands and creators
              together—we build collaborations grounded in purpose, audience
              insight, and authenticity. With campaigns delivered for Samsung,
              Bewakoof, BGMI, Free Fire, and more, we combine deep industry
              know-how with creator-first creativity to produce work that
              resonates and converts.
            </p>
            <ul className='list-disc space-y-2 pl-5 text-sm sm:text-base text-muted-foreground'>
              <li>Partnered with Fortune-level and emerging brands</li>
              <li>Network of 200+ vetted creators across niches</li>
              <li>Campaigns that bring viral reach and real ROI</li>
              <li>
                Seamless onboarding, delivery, and performance tracking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
