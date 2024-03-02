import MarketPlaceCanvasComponent from '@/components/core/marketplace/product/3d/canvas';
import MarketPlaceProductHeader from '@/components/core/marketplace/product/header';
import MarketPlaceProductImages from '@/components/core/marketplace/product/images';
import MarketPlacePriceBox from '@/components/core/marketplace/product/price';
import MarketPlaceReviewCard from '@/components/core/marketplace/product/reviews';
import { productMethod } from '@/lib/convex';
import { fetchQuery } from 'convex/nextjs';

interface Props {
  params: { slug: string };
}

const ProductDetailPage = async ({ params: { slug } }: Props) => {
  const [fetchPost] = await fetchQuery(productMethod.getProductBySlug, {
    slug,
  });

  console.log('fetchPost: ', fetchPost);

  return (
    <div>
      <div className='flex flex-col bg-white'>
        <div className='flex justify-center items-center px-16 py-5 w-full text-sm text-white bg-red-700 max-md:px-5 max-md:max-w-full'>
          <div className='flex gap-5 justify-between items-start w-full max-w-[1334px] max-md:flex-wrap max-md:max-w-full'>
            <div className='flex gap-5 justify-between'>
              <div className='leading-[108%]'>Ship to 94043</div>
              <div className='leading-[107%]'>Mountain View</div>
            </div>
            <div className='flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full'>
              <div className='grow leading-[150%]'>Registry</div>
              <div className='leading-[151%]'>Weekly Ad</div>
              <div className='text-sm leading-5'>RedCard</div>
              <div className='leading-[154%]'>Target Circle</div>
              <div className='grow whitespace-nowrap leading-[151%]'>
                Find Stores
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center self-center px-5 mt-20 w-full max-w-[1412px] max-md:mt-10 max-md:max-w-full'>
          <div className='self-stretch max-md:mr-0.5 max-md:max-w-full'>
            <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
              <MarketPlaceProductImages />
              <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col mt-10 max-md:mt-10 max-md:max-w-full'>
                  <p className='flex gap-1.5 self-start text-sm whitespace-nowrap text-stone-500'>
                    <span className='grow text-sm leading-5 text-center underline'>
                      Shop collections
                    </span>
                    <span className='my-auto leading-[143%] text-zinc-800'>
                      ·
                    </span>
                    <span className='grow underline leading-[147%]'>
                      Shop all Room Essentials
                    </span>
                  </p>
                  <MarketPlaceProductHeader />
                  <MarketPlacePriceBox />
                  <div className='flex gap-4 justify-between mt-7 text-center max-md:flex-wrap max-md:max-w-full'>
                    <div className='flex gap-2.5 py-3.5 pr-11 pl-5 whitespace-nowrap bg-white rounded border border-solid border-zinc-500 text-zinc-800 max-md:pr-5'>
                      <div className='text-base leading-4'>Qty</div>
                      <div className='my-auto text-base font-bold leading-4'>
                        1
                      </div>
                      <img
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/cc04caa33e9a623bab5157e07c8088679dbe4fe4cdcefeb4d1e3cb2e66240624?'
                        className='self-start w-3.5 aspect-[0.88]'
                      />
                    </div>
                    <div className='grow justify-center items-center px-16 py-4 text-base font-bold leading-4 text-white bg-red-700 rounded border border-red-700 border-solid max-md:px-5 max-md:max-w-full'>
                      Add to cart
                    </div>
                  </div>
                  <div className='flex gap-5 justify-between items-start px-px mt-6 max-md:flex-wrap max-md:max-w-full'>
                    <div className='flex flex-col mt-2.5 font-bold text-stone-500'>
                      <div className='flex flex-col pl-10 text-xs leading-5 max-md:pl-5'>
                        <div className='text-base leading-6 whitespace-nowrap text-zinc-800'>
                          Create or manage registry
                        </div>
                        <div className='mt-9'>
                          Save 5% every day
                          <br />
                          <span className='text-xs  text-stone-500'>
                            With RedCard
                          </span>
                        </div>
                        <div className='mt-9'>
                          Pay over time
                          <br />
                          <span className='text-xs  text-stone-500'>
                            With Affirm on orders over $100
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='justify-center px-3.5 py-3 text-xs leading-3 text-center whitespace-nowrap bg-white rounded border border-solid aspect-[1.84] border-zinc-500 text-zinc-800'>
                      Sign in
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='justify-center self-start px-3.5 py-4 mt-4 ml-64 text-base leading-4 text-center whitespace-nowrap bg-white rounded border border-solid border-zinc-500 text-zinc-800 max-md:ml-2.5'>
            Show more images
          </div>
          <MarketPlaceCanvasComponent />
          {/* <div className='flex flex-col justify-center self-stretch px-8 py-9 mt-4 bg-neutral-100 max-md:px-5 max-md:max-w-full'>
            <div className='self-center text-2xl font-bold leading-7 text-center whitespace-nowrap text-zinc-800'>
              About this item
            </div>
            <div className='flex flex-col justify-center p-4 mt-6 bg-white rounded-lg shadow max-md:max-w-full'>
              <div className='px-6 py-7 border-b border-solid border-b-zinc-300 max-md:px-5 max-md:max-w-full'>
                <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
                  <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
                    <div className='flex flex-col grow text-zinc-800 max-md:mt-10 max-md:max-w-full'>
                      <div className='text-xl font-bold leading-6 text-center max-md:max-w-full'>
                        Details
                      </div>
                      <div className='flex flex-col pt-1 pb-12 mt-8 bg-white max-md:max-w-full'>
                        <div className='mr-4 text-base font-bold leading-5 max-md:mr-2.5 max-md:max-w-full'>
                          Highlights
                        </div>
                        <div className='flex flex-col px-5 mt-5 text-sm leading-5 max-md:max-w-full'>
                          <div className='leading-[151%] max-md:max-w-full'>
                            Round solid color planter brings functional style to
                            your patio or garden
                          </div>
                          <div className='mt-4 max-md:max-w-full'>
                            Self-watering design allows for hassle-free
                            maintenance and easy care
                          </div>
                          <div className='mt-4 max-md:max-w-full'>
                            Free-standing construction provides versatile
                            styling, perfect for patios and entryways alike
                          </div>
                          <div className='mt-4 leading-5 max-md:max-w-full'>
                            Has a built-in tray to retain water and a small port
                            for easy watering with a hose or a<br />
                            narrow-spout watering can
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
                    <div className='flex flex-col grow mt-12 text-sm text-zinc-800 max-md:mt-10 max-md:max-w-full'>
                      <div className='text-base font-bold leading-5 max-md:max-w-full'>
                        Description
                      </div>
                      <div className='leading-5 max-md:max-w-full'>
                        Show off your green thumb with this Indoor Outdoor
                        Self-Watering Planter Pot from Room
                        <br />
                        Essentials™. This solid free-standing planter features a
                        round design with a lightweight, single-
                        <br />
                        colored construction that easily blends with a variety
                        of outdoor decor styles and color palettes.
                        <br />
                        Whether you're adding a floral display to your living
                        room or putting the finishing touches on a<br />
                        patio garden, you'll appreciate the built-in
                        self-watering feature that makes it easy to take care
                        <br />
                        of all your favorite plants. When watering from the
                        bottom, the plant draws up the water as
                        <br />
                        needed, reducing the need to water as frequently.
                      </div>
                      <div className='mt-4 leading-[151%] max-md:max-w-full'>
                        Room Essentials™: Everyday Value.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='justify-center items-start px-14 py-6 text-lg font-bold leading-6 text-center whitespace-nowrap border-b border-solid border-b-zinc-300 text-zinc-800 max-md:px-5 max-md:max-w-full'>
                Specifications
              </div>
              <div className='justify-center items-start px-14 py-6 text-xl font-bold leading-6 text-center whitespace-nowrap border-b border-solid border-b-zinc-300 text-zinc-800 max-md:px-5 max-md:max-w-full'>
                Shipping & Returns
              </div>
              <div className='justify-center items-start px-14 py-6 text-lg font-bold leading-6 text-center whitespace-nowrap border-b border-solid border-b-zinc-300 text-zinc-800 max-md:px-5 max-md:max-w-full'>
                Q&A (99)
              </div>
            </div>
          </div> */}

          {/* <div className='self-end mt-1 text-xs leading-4 text-right text-zinc-800'>
            Sponsored
          </div>
          <div className='mt-7 text-2xl font-bold leading-7 text-center whitespace-nowrap text-zinc-800'>
            Similar items
          </div>
          <div className='flex gap-4 justify-between self-stretch mt-7 text-xs font-bold text-stone-500 max-md:flex-wrap max-md:max-w-full'>
            <div className='flex flex-col flex-1 justify-center p-3 rounded-lg shadow bg-white bg-opacity-0'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 leading-[151%]'>$49.49</div>
              <div className='mt-2 text-sm leading-4'>
                Sagebrook Home 8&quot; Wide
                <br />
                Dot Pattern Ceramic
                <br />
                Planter Pot with Wood…
              </div>
              <div className='justify-center px-2.5 py-3 mt-4 text-center text-white bg-red-700 rounded border border-red-700 border-solid leading-[102%]'>
                Add to cart
              </div>
            </div>
            <div className='flex flex-col flex-1 justify-center p-3 text-red-700 rounded-lg shadow bg-white bg-opacity-0'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 leading-[147%]'>$59.95</div>
              <div className='text-xs leading-4'>
                reg <span className='line-through'>$74.99</span>{' '}
                <span className='text-red-700'>Sale</span>
              </div>
              <div className='mt-3.5 text-sm leading-4 text-stone-500'>
                Sunnydaze Resort
                <br />
                Outdoor/Indoor High-…
              </div>
              <div className='justify-center px-2.5 py-3 mt-4 text-center text-white bg-red-700 rounded border border-red-700 border-solid leading-[102%]'>
                Add to cart
              </div>
            </div>
            <div className='flex flex-col flex-1 justify-center p-3 rounded-lg shadow bg-white bg-opacity-0'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 leading-[150%]'>$20.00</div>
              <div className='mt-2 text-red-700 whitespace-nowrap leading-[129%]'>
                Save 20% in cart on select…
              </div>
              <div className='mt-2 text-sm leading-5'>
                Splatter Stoneware
                <br />
                Indoor Outdoor Planter…
              </div>
              <div className='justify-center px-2.5 py-3 mt-5 text-center text-white bg-red-700 rounded border border-red-700 border-solid leading-[102%]'>
                Add to cart
              </div>
            </div>
            <div className='flex flex-col flex-1 justify-center p-3 rounded-lg shadow bg-white bg-opacity-0'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 leading-[150%]'>$20.00</div>
              <div className='mt-2 text-red-700 whitespace-nowrap leading-[129%]'>
                Save 20% in cart on select…
              </div>
              <div className='mt-2 text-sm leading-4 max-md:mr-1.5'>
                Antique Finish Ceramic
                <br />
                Indoor Outdoor Novelty…
              </div>
              <div className='justify-center px-2.5 py-3 mt-4 text-center text-white bg-red-700 rounded border border-red-700 border-solid leading-[102%]'>
                Add to cart
              </div>
            </div>
            <div className='flex flex-col flex-1 justify-center p-3 rounded-lg shadow bg-white bg-opacity-0'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 leading-[150%]'>$20.00</div>
              <div className='mt-2 text-red-700 whitespace-nowrap leading-[129%]'>
                Save 20% in cart on select…
              </div>
              <div className='mt-2 text-sm leading-5'>
                Weathered Texture
                <br />
                Ceramic Indoor Outdoo…
              </div>
              <div className='justify-center px-2.5 py-3 mt-5 text-center text-white bg-red-700 rounded border border-red-700 border-solid leading-[102%]'>
                Add to cart
              </div>
            </div>
            <div className='flex flex-col flex-1 justify-center p-3 rounded-lg shadow bg-white bg-opacity-0'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-3.5 leading-[142%]'>$67.99</div>
              <div className='mt-2 text-sm leading-4'>
                8″ Mayer Planter,
                <br />
                Seafoam 2-pk. - Southern
                <br />
                Patio
              </div>
              <div className='justify-center px-2.5 py-3 mt-4 text-center text-white bg-red-700 rounded border border-red-700 border-solid leading-[102%]'>
                Add to cart
              </div>
            </div>
            <div className='flex flex-col flex-1 justify-center py-3 pr-7 pl-3 rounded-lg shadow bg-white bg-opacity-0 max-md:pr-5'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 leading-[150%]'>$30.99</div>
              <div className='mt-2 text-sm leading-4'>
                Sagebrook Home 8&quot; Wide
                <br />
                with Wood Stand 6&quot;
                <br />
                Striped Ceramic Indoor…
              </div>
              <div className='justify-center px-2.5 py-3 mt-3.5 text-center text-white bg-red-700 rounded border border-red-700 border-solid leading-[102%]'>
                Add to cart
              </div>
            </div>
          </div> */}

          <div className='flex justify-center items-center self-stretch px-16 py-10 mt-20 bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full'>
            <div className='flex flex-col items-center max-w-full w-[942px]'>
              <div className='text-2xl font-bold leading-7 text-center whitespace-nowrap text-zinc-800'>
                Shop the look
              </div>
              <div className='self-stretch mt-5 max-md:max-w-full'>
                <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
                  <div className='flex flex-col w-3/12 max-md:ml-0 max-md:w-full'>
                    <div className='flex flex-col grow items-center px-3 pt-3 mx-auto w-full bg-white rounded max-md:mt-4'>
                      <div className='shrink-0 self-stretch bg-neutral-100 h-[200px]' />
                      <div className='self-end mt-2.5 mr-3 text-base leading-6 text-center whitespace-nowrap text-zinc-800 max-md:mr-2.5'>
                        Self-Watering Plastic…
                      </div>
                      <div className='flex gap-1 mt-3 w-[73px]'>
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                      </div>
                      <div className='mt-5 text-xs leading-4 text-center whitespace-nowrap text-zinc-800'>
                        $2.55 - $30.00
                      </div>
                      <div className='mt-2 text-sm leading-4 text-center text-red-700 whitespace-nowrap'>
                        Select items on clearance
                      </div>
                      <div className='justify-center px-2.5 pt-2.5 pb-7 mt-5 text-xs font-bold leading-3 text-center text-white whitespace-nowrap bg-red-700 rounded border border-red-700 border-solid'>
                        Add to cart
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
                    <div className='flex flex-col grow items-center px-3 py-3.5 mx-auto w-full bg-white rounded max-md:mt-4'>
                      <div className='shrink-0 self-stretch bg-neutral-100 h-[200px]' />
                      <div className='self-start mt-2.5 ml-5 text-base leading-6 text-center whitespace-nowrap text-zinc-800 max-md:ml-2.5'>
                        Family Ceramic Indoor…
                      </div>
                      <div className='flex gap-1 mt-3 w-[73px]'>
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                      </div>
                      <div className='mt-9 text-sm leading-4 text-center whitespace-nowrap text-zinc-800'>
                        $12.00 - $20.00
                      </div>
                      <div className='justify-center px-2.5 py-3 mt-5 text-xs font-bold leading-3 text-center text-white whitespace-nowrap bg-red-700 rounded border border-red-700 border-solid'>
                        Add to cart
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
                    <div className='flex flex-col grow items-center px-3 py-3.5 mx-auto w-full bg-white rounded max-md:mt-4'>
                      <div className='shrink-0 self-stretch bg-neutral-100 h-[200px]' />
                      <div className='self-stretch mt-2.5 text-base leading-6 text-center whitespace-nowrap text-zinc-800'>
                        Family Pet Ceramic Indo…
                      </div>
                      <div className='flex gap-1 mt-3 w-[35px]'>
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                      </div>
                      <div className='mt-10 text-sm leading-5 text-center text-zinc-800'>
                        $8.00
                      </div>
                      <div className='justify-center px-2.5 py-3 mt-5 text-xs font-bold leading-3 text-center text-white whitespace-nowrap bg-red-700 rounded border border-red-700 border-solid'>
                        Add to cart
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
                    <div className='flex flex-col grow items-center px-3 py-3.5 mx-auto w-full bg-white rounded max-md:mt-4'>
                      <div className='shrink-0 self-stretch bg-neutral-100 h-[200px]' />
                      <div className='self-start mt-2.5 ml-4 text-base leading-6 text-center whitespace-nowrap text-zinc-800 max-md:ml-2.5'>
                        Reactive Glaze Ceramic…
                      </div>
                      <div className='flex gap-1 mt-4 w-[54px]'>
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                        <img
                          loading='lazy'
                          srcSet='...'
                          className='flex-1 shrink-0 w-full aspect-square'
                        />
                      </div>
                      <div className='mt-9 text-sm leading-4 text-center whitespace-nowrap text-zinc-800'>
                        $10.00 - $20.00
                      </div>
                      <div className='justify-center px-2.5 py-3 mt-5 text-xs font-bold leading-3 text-center text-white whitespace-nowrap bg-red-700 rounded border border-red-700 border-solid'>
                        Add to cart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-3 max-w-full w-[462px]'>
                <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
                  <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
                    <div className='flex flex-col grow px-3 pt-3 pb-6 w-full text-center whitespace-nowrap bg-white rounded text-zinc-800 max-md:mt-4'>
                      <div className='shrink-0 bg-neutral-100 h-[199px]' />
                      <div className='self-start mt-2.5 ml-3.5 text-base leading-6 max-md:ml-2.5'>
                        Henning Patio Bar Cart …
                      </div>
                      <div className='self-center mt-8 text-sm leading-4'>
                        $175.00
                      </div>
                      <div className='self-center mt-6 text-lg leading-7 text-amber-700'>
                        Sold out
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
                    <div className='flex flex-col grow px-3 py-3.5 w-full text-center whitespace-nowrap bg-white rounded text-zinc-800 max-md:mt-4'>
                      <div className='shrink-0 bg-neutral-100 h-[199px]' />
                      <div className='self-start mt-2.5 ml-4 text-base leading-6 max-md:ml-2.5'>
                        Cast Metal Garden Sign…
                      </div>
                      <div className='self-center mt-7 text-sm leading-4'>
                        $10.00
                      </div>
                      <div className='justify-center self-center px-2.5 py-3 mt-5 text-xs font-bold leading-3 text-white bg-red-700 rounded border border-red-700 border-solid'>
                        Add to cart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center self-stretch px-16 py-11 mt-8 bg-neutral-100 max-md:px-5 max-md:max-w-full'>
            <div className='flex flex-col items-center mb-1.5 max-w-full w-[940px]'>
              <div className='text-2xl font-bold leading-7 text-center whitespace-nowrap text-zinc-800'>
                Frequently bought together
              </div>
              <div className='self-stretch mt-11 max-md:mt-10 max-md:max-w-full'>
                <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
                  <div className='flex flex-col w-3/12 max-md:ml-0 max-md:w-full'>
                    <div className='flex flex-col grow items-center px-2.5 pb-8 w-full text-center bg-white rounded max-md:mt-10'>
                      <img
                        loading='lazy'
                        srcSet='...'
                        className='w-36 max-w-full aspect-square'
                      />
                      <div className='mt-2 text-sm font-bold leading-5 text-zinc-800'>
                        $3.00
                      </div>
                      <div className='self-stretch mt-2 text-sm leading-5 text-stone-500'>
                        Self-Watering Plastic Indoor
                        <br />
                        Outdoor Planter Pot Fern…
                      </div>
                      <img
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/35e0c767edda9e39dee351797249112c937029d7ec8007d777ad81d7e000f115?'
                        className='mt-8 w-5 aspect-square'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
                    <div className='flex flex-col grow items-center px-6 pb-8 w-full text-center bg-white rounded max-md:px-5 max-md:mt-10'>
                      <img
                        loading='lazy'
                        srcSet='...'
                        className='w-36 aspect-square'
                      />
                      <div className='mt-2 text-sm font-bold leading-5 text-zinc-800'>
                        $5.99
                      </div>
                      <div className='self-stretch mt-2 text-sm leading-5 text-stone-500'>
                        Miracle-Gro 6qt Indoor
                        <br />
                        Potting Mix
                      </div>
                      <img
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/1b6ed30635cc05ad2019e1e106a060c4ece423d4d4d07126d5a4fb1c4b7121a2?'
                        className='mt-7 w-5 aspect-square'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
                    <div className='flex flex-col grow items-center px-3.5 pb-8 w-full text-sm text-center whitespace-nowrap bg-white rounded text-stone-500 max-md:mt-10'>
                      <img
                        loading='lazy'
                        srcSet='...'
                        className='w-36 max-w-full aspect-square'
                      />
                      <div className='mt-2 font-bold leading-[144%] text-zinc-800'>
                        $10.00
                      </div>
                      <div className='self-stretch mt-2 text-sm leading-5'>
                        2pc Self-Watering Wall
                      </div>
                      <div className='self-stretch mt-2 leading-[147%]'>
                        Half-Circle Indoor Outdo…
                      </div>
                      <img
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/79893f64b3168e7cc413028a4567882d1dbdb3a11575493659004453169363b6?'
                        className='mt-8 w-5 aspect-square'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full'>
                    <div className='flex flex-col grow items-center px-4 pb-8 w-full text-center bg-white rounded max-md:mt-10'>
                      <img
                        loading='lazy'
                        srcSet='...'
                        className='aspect-[1.1] w-[158px]'
                      />
                      <div className='mt-2 text-sm font-bold leading-5 text-zinc-800'>
                        $10.00
                      </div>
                      <div className='self-stretch mt-2 text-sm leading-5 text-stone-500'>
                        Iron Indoor Outdoor Plant
                        <br />
                        Stand Black…
                      </div>
                      <img
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/ec6b848abb82ea644b1578d03a55793311b9615b0e4b37858573b6498d5c1dec?'
                        className='mt-8 w-5 aspect-square'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-5 justify-between mt-12 text-center whitespace-nowrap max-md:mt-10'>
                <div className='grow my-auto text-lg leading-10 text-zinc-800'>
                  Subtotal: <span className='font-bold'>$28.99</span> (4 items)
                </div>
                <div className='grow justify-center px-3.5 py-4 text-base font-bold leading-4 text-white bg-red-700 rounded border border-red-700 border-solid'>
                  Add all 4 to cart
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center self-stretch px-4 py-11 mt-8 bg-neutral-100 max-md:max-w-full'>
            <div className='text-2xl font-bold leading-7 text-center whitespace-nowrap text-zinc-800'>
              Complete the set
            </div>
            <div className='mt-2.5 w-64 text-base leading-6 text-center underline text-stone-500'>
              Patio Collection - Room Essentials™
            </div>
            <div className='flex gap-4 justify-between self-stretch mt-1 max-md:flex-wrap max-md:max-w-full'>
              <div className='flex flex-col flex-1 items-center px-3 py-3.5 bg-white rounded'>
                <div className='shrink-0 self-stretch bg-neutral-100 h-[276px]' />
                <div className='self-start mt-2.5 ml-5 text-base leading-6 text-center whitespace-nowrap text-zinc-800 max-md:ml-2.5'>
                  20ct Incandescent Outdoor String…
                </div>
                <div className='flex gap-1 mt-3.5 text-xs leading-4 text-center whitespace-nowrap text-stone-500'>
                  <img
                    loading='lazy'
                    srcSet='...'
                    className='aspect-[4] w-[60px]'
                  />
                  <div className='grow'>1174</div>
                </div>
                <div className='flex gap-1 w-[35px]'>
                  <img
                    loading='lazy'
                    srcSet='...'
                    className='flex-1 shrink-0 w-full aspect-square'
                  />
                  <img
                    loading='lazy'
                    srcSet='...'
                    className='flex-1 shrink-0 w-full aspect-square'
                  />
                </div>
                <div className='mt-14 text-sm leading-4 text-center text-zinc-800 max-md:mt-10'>
                  $10.00
                </div>
                <div className='justify-center px-2.5 py-3 mt-5 text-xs font-bold leading-3 text-center text-white whitespace-nowrap bg-red-700 rounded border border-red-700 border-solid'>
                  Add to cart
                </div>
              </div>
              <div className='flex flex-col flex-1 items-center px-3 py-3.5 text-xs text-center whitespace-nowrap bg-white rounded text-zinc-800'>
                <div className='shrink-0 self-stretch bg-neutral-100 h-[276px]' />
                <div className='self-start mt-2.5 ml-5 text-base leading-6 max-md:ml-2.5'>
                  Metal Mesh Rolling Patio Bar Cart…
                </div>
                <div className='flex gap-0.5 mt-3.5 leading-[143%] text-stone-500'>
                  <img
                    loading='lazy'
                    srcSet='...'
                    className='shrink-0 w-full aspect-[4]'
                  />
                  <div className='grow'>4</div>
                </div>
                <div className='mt-16 text-sm leading-5 max-md:mt-10'>
                  $65.00
                </div>
                <div className='justify-center px-2.5 py-3 mt-5 font-bold text-white bg-red-700 rounded border border-red-700 border-solid aspect-[2.25] leading-[102%]'>
                  Pick it up
                </div>
              </div>
              <div className='flex flex-col flex-1 items-center px-3 py-3.5 text-xs text-center whitespace-nowrap bg-white rounded text-zinc-800'>
                <div className='shrink-0 self-stretch bg-neutral-100 h-[276px]' />
                <div className='self-stretch mt-2.5 text-base leading-6'>
                  Rectangle A-Frame Pergola Outdo…
                </div>
                <div className='flex gap-0.5 mt-3.5 leading-[143%] text-stone-500'>
                  <img
                    loading='lazy'
                    srcSet='...'
                    className='shrink-0 w-full aspect-[4]'
                  />
                  <div className='grow'>9</div>
                </div>
                <div className='mt-16 text-sm leading-5 max-md:mt-10'>
                  $200.00
                </div>
                <div className='justify-center px-2.5 py-3 mt-5 font-bold text-white bg-red-700 rounded border border-red-700 border-solid aspect-[2.25] leading-[102%]'>
                  Pick it up
                </div>
              </div>
              <div className='flex flex-col flex-1 items-center px-3 py-3.5 bg-white rounded'>
                <div className='shrink-0 self-stretch bg-neutral-100 h-[276px]' />
                <div className='self-stretch mt-2.5 text-base leading-6 text-center whitespace-nowrap text-zinc-800'>
                  Reversible Diamond Rectangular…
                </div>
                <div className='flex gap-1 mt-3.5 text-xs leading-4 text-center whitespace-nowrap text-stone-500'>
                  <img
                    loading='lazy'
                    srcSet='...'
                    className='aspect-[4] w-[60px]'
                  />
                  <div className='grow'>361</div>
                </div>
                <div className='flex gap-1 w-[35px]'>
                  <img
                    loading='lazy'
                    srcSet='...'
                    className='flex-1 shrink-0 w-full aspect-square'
                  />
                  <img
                    loading='lazy'
                    srcSet='...'
                    className='flex-1 shrink-0 w-full aspect-square'
                  />
                </div>
                <div className='mt-14 text-sm leading-4 text-center whitespace-nowrap text-zinc-800 max-md:mt-10'>
                  $20.00 - $120.00
                </div>
                <div className='justify-center px-2.5 py-3 mt-5 text-xs font-bold leading-3 text-center text-white whitespace-nowrap bg-red-700 rounded border border-red-700 border-solid'>
                  Add to cart
                </div>
              </div>
              <div className='flex flex-col pt-3 pb-12 pl-3 text-base leading-6 text-center bg-white rounded basis-0 text-zinc-800'>
                <div className='shrink-0 bg-neutral-100 h-[276px]' />
                <div className='self-start mt-2.5 ml-4 max-md:ml-2.5'>
                  69.5&quot; A-Frame Outdoor Decorative
                </div>
              </div>
            </div>
          </div>
          <div className='mt-14 text-2xl font-bold leading-7 text-center whitespace-nowrap text-zinc-800 max-md:mt-10'>
            This item is featured in
          </div>
          <div className='mt-14 max-w-full w-[1028px] max-md:mt-10'>
            <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
              <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col grow text-center whitespace-nowrap text-zinc-800 max-md:mt-10'>
                  <img
                    loading='lazy'
                    srcSet='...'
                    className='w-full aspect-[0.93]'
                  />
                  <div className='mt-5 text-lg font-thin leading-6'>
                    Patio Collection - Room Essentials™
                  </div>
                  <div className='justify-center self-center px-3.5 py-4 mt-5 text-base leading-4 bg-white rounded border border-solid border-zinc-500'>
                    View collection
                  </div>
                </div>
              </div>
              <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col grow items-center max-md:mt-10'>
                  <div className='flex justify-center items-center self-stretch aspect-square bg-neutral-100'>
                    <img
                      loading='lazy'
                      srcSet='...'
                      className='w-full aspect-square'
                    />
                  </div>
                  <div className='mt-5 text-lg font-thin leading-6 text-center text-zinc-800'>
                    Planter Collection - Room
                    <br />
                    Essentials™
                  </div>
                  <div className='justify-center px-3.5 py-4 mt-5 text-base leading-4 text-center whitespace-nowrap bg-white rounded border border-solid border-zinc-500 text-zinc-800'>
                    View collection
                  </div>
                </div>
              </div>
              <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col grow text-center whitespace-nowrap text-zinc-800 max-md:mt-10'>
                  <img
                    loading='lazy'
                    srcSet='...'
                    className='w-full aspect-[0.93]'
                  />
                  <div className='mt-5 text-lg font-thin leading-6'>
                    Outdoor Lounge Seating Collection
                  </div>
                  <div className='justify-center self-center px-3.5 py-4 mt-5 text-base leading-4 bg-white rounded border border-solid border-zinc-500'>
                    View collection
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-20 text-2xl font-bold leading-7 text-center whitespace-nowrap text-zinc-800 max-md:mt-10'>
            Related categories
          </div>
          <div className='flex gap-1 mt-4 text-base leading-4 text-center whitespace-nowrap text-zinc-800 max-md:flex-wrap max-md:max-w-full'>
            <div className='grow justify-center px-5 py-4 rounded border border-solid border-zinc-500'>
              Floor Planters
            </div>
            <div className='grow justify-center px-5 py-4 rounded border border-solid border-zinc-500'>
              Planters
            </div>
            <div className='grow justify-center px-5 py-4 rounded border border-solid border-zinc-500 leading-[104%]'>
              Garden Decor
            </div>
            <div className='grow justify-center px-5 py-4 rounded border border-solid border-zinc-500 leading-[107%]'>
              Tabletop Planters
            </div>
            <div className='justify-center px-5 py-4 text-base leading-4 rounded border border-solid aspect-[1.39] border-zinc-500'>
              Soil
            </div>
            <div className='grow justify-center px-5 py-4 rounded border border-solid border-zinc-500'>
              Landscaping
            </div>
          </div>
          <div className='mt-20 text-2xl font-bold leading-7 text-center whitespace-nowrap text-zinc-800 max-md:mt-10'>
            You Might Also Need
          </div>
          <div className='flex gap-4 justify-between self-stretch mt-6 text-red-700 max-md:flex-wrap max-md:max-w-full'>
            <div className='flex flex-col flex-1 px-3 pt-3 pb-8 text-sm rounded-lg shadow bg-white bg-opacity-0'>
              <img
                loading='lazy'
                srcSet='...'
                className='self-center aspect-square w-[164px]'
              />
              <div className='mt-3.5 font-bold leading-[137%]'>
                $5.13 - $9.75
              </div>
              <div className='mt-2 text-xs leading-4'>Sale</div>
              <div className='mt-1.5 leading-4 text-stone-500'>
                Miracle-Gro Premium
                <br />
                Potting Mix
              </div>
            </div>
            <div className='flex flex-col flex-1 px-3 pt-3 pb-8 text-xs rounded-lg shadow bg-white bg-opacity-0'>
              <img
                loading='lazy'
                srcSet='...'
                className='self-center aspect-square w-[164px]'
              />
              <div className='mt-4 font-bold leading-[142%]'>
                $5.55 - $10.99
              </div>
              <div className='mt-2 leading-[129%]'>Sale</div>
              <div className='mt-1.5 text-sm leading-4 text-stone-500'>
                Miracle-Gro Moisture
                <br />
                Control Potting Mix
              </div>
            </div>
            <div className='flex flex-col flex-1 px-3 pt-3 pb-8 rounded-lg shadow bg-white bg-opacity-0'>
              <img
                loading='lazy'
                srcSet='...'
                className='self-center aspect-square w-[164px]'
              />
              <div className='mt-4 text-xs font-bold leading-4'>$5.23</div>
              <div className='mt-1.5 text-xs leading-4'>
                reg <span className='line-through'>$5.79</span>{' '}
                <span className='text-red-700'>Sale</span>
              </div>
              <div className='mt-1 text-sm leading-4 text-stone-500'>
                Miracle-Gro Cactus Palm
                <br />
                Citrus Potting Soil - 8qt
              </div>
            </div>
            <div className='flex flex-col flex-1 px-3 pt-3 pb-12 rounded-lg shadow bg-white bg-opacity-0 text-stone-500'>
              <img
                loading='lazy'
                srcSet='...'
                className='self-center aspect-square w-[164px]'
              />
              <div className='mt-4 text-xs font-bold leading-5'>$3.00</div>
              <div className='mt-2 text-sm leading-4'>
                16oz Garden Spray Bottle
                <br />- Room Essentials™
              </div>
            </div>
            <div className='flex flex-col flex-1 px-3 pt-3 pb-12 rounded-lg shadow bg-white bg-opacity-0 text-stone-500'>
              <img
                loading='lazy'
                srcSet='...'
                className='self-center aspect-square w-[164px]'
              />
              <div className='mt-4 text-xs font-bold leading-5'>$3.00</div>
              <div className='mt-2 text-sm leading-4'>
                16oz Garden Spray Bottle
                <br />
                Mint - Room Essentials™
              </div>
            </div>
            <div className='flex flex-col flex-1 px-3 pt-3 pb-12 rounded-lg shadow bg-white bg-opacity-0 text-stone-500'>
              <img
                loading='lazy'
                srcSet='...'
                className='self-center aspect-square w-[164px]'
              />
              <div className='mt-4 text-xs font-bold leading-5'>$6.00</div>
              <div className='mt-2 text-sm leading-4'>
                1gal Plastic Watering Can
                <br />- Room Essentials™
              </div>
            </div>
            <div className='flex flex-col flex-1 pt-3 pr-7 pb-8 pl-3 text-sm rounded-lg shadow bg-white bg-opacity-0 max-md:pr-5'>
              <img
                loading='lazy'
                srcSet='...'
                className='self-center aspect-[0.9] w-[148px]'
              />
              <div className='mt-3.5 font-bold'>$7.11</div>
              <div className='mt-1.5 text-xs leading-4'>
                reg <span className='line-through'>$9.49</span>{' '}
                <span className='text-red-700'>Sale</span>
              </div>
              <div className='mt-1 leading-4 text-stone-500'>
                Miracle-Gro Pour & Feed
                <br />
                Liquid Plant Food 32oz…
              </div>
            </div>
          </div>
          <div className='flex gap-2.5 mt-6 w-[31px]'>
            <div className='flex-1 shrink-0 h-3 rounded-xl bg-zinc-800' />
            <div className='flex-1 shrink-0 rounded-lg bg-zinc-800 h-[9px]' />
          </div>
          <div className='mt-20 text-2xl font-bold leading-7 text-center text-zinc-800 max-md:mt-10 max-md:max-w-full'>
            This product is featured in recent Target Finds stories
          </div>
          <div className='mt-3.5 max-w-full w-[1100px]'>
            <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
              <div className='flex flex-col w-[67%] max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col grow justify-end items-start py-8 pr-20 pl-4 w-full font-bold bg-white border-solid shadow-sm border-t-[6px] border-t-red-700 text-zinc-800 max-md:pr-5 max-md:mt-5 max-md:max-w-full'>
                  <div className='text-xs leading-4'>Gift Ideas</div>
                  <div className='mt-7 text-3xl leading-9'>
                    Anniversary gift
                    <br />
                    ideas that make
                    <br />
                    time together even
                    <br />
                    better.
                  </div>
                  <div className='mt-7 text-base leading-6'>
                    Think of ’em as gifts that double as
                    <br />
                    dates. No reservations necessary.
                  </div>
                </div>
              </div>
              <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col grow justify-end px-4 pt-7 pb-12 w-full font-bold bg-white border-solid shadow-sm border-t-[6px] border-t-emerald-200 text-zinc-800 max-md:pr-5 max-md:mt-5'>
                  <div className='text-xs leading-4'>Trends</div>
                  <div className='mt-6 text-2xl leading-7'>
                    All the ways to embrace pink
                    <br />
                    this season.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-20 text-2xl font-bold leading-7 text-center text-zinc-800 max-md:mt-10'>
            #TargetStyle
          </div>
          <div className='flex gap-4 justify-between self-stretch pr-3 mt-5 max-md:flex-wrap max-md:max-w-full'>
            <div className='w-56 h-56 bg-stone-300' />
            <div className='w-56 h-56 bg-stone-400' />
            <div className='w-56 h-56 bg-stone-500' />
            <div className='w-56 h-56 bg-stone-300' />
            <div className='w-56 h-56 bg-stone-400' />
            <div className='h-56 bg-stone-700 w-[200px]' />
          </div>
          <div className='mt-14 text-2xl font-bold leading-7 text-center whitespace-nowrap text-zinc-800 max-md:mt-10'>
            Featured products
          </div>
          <div className='flex gap-4 justify-between self-stretch mt-6 text-xs text-stone-500 max-md:flex-wrap max-md:max-w-full'>
            <div className='flex flex-col flex-1 px-3 py-3.5 rounded-lg shadow bg-white bg-opacity-0'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 font-bold leading-[142%]'>$19.99</div>
              <div className='mt-2 text-sm leading-4'>
                Zevo Indoor Flying Insect
                <br />
                Trap for Fruit flies, Gnats,
                <br />
                and House Flies (1 Plug…
              </div>
              <div className='mt-1 leading-[129%]'>Sponsored</div>
            </div>
            <div className='flex flex-col flex-1 px-3 py-3.5 text-red-700 rounded-lg shadow bg-white bg-opacity-0'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 font-bold leading-[143%]'>$14.99</div>
              <div className='mt-1.5 text-xs leading-4'>
                reg <span className='line-through'>$19.99</span>{' '}
                <span className='text-red-700'>Sale</span>
              </div>
              <div className='mt-1 text-sm leading-4 text-stone-500'>
                Rosy Soil 4qt Indoor
                <br />
                Potting Soil Mix
              </div>
              <div className='mt-1.5 leading-[129%] text-stone-500'>
                Sponsored
              </div>
            </div>
            <div className='flex flex-col flex-1 px-3 py-3.5 rounded-lg shadow bg-white bg-opacity-0'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 font-bold leading-[143%]'>$37.49</div>
              <div className='mt-2 text-sm leading-4'>
                Zevo Indoor Flying Insect
                <br />
                Trap Starter Kit for Fruit
                <br />
                flies, Gnats, and House…
              </div>
              <div className='mt-1 leading-[129%]'>Sponsored</div>
            </div>
            <div className='flex flex-col flex-1 px-3 pt-3 pb-8 rounded-lg shadow bg-white bg-opacity-0'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 font-bold leading-[150%]'>$34.99</div>
              <div className='mt-2 text-sm leading-4'>
                Zevo Max Trap Starter Kit
                <br />- 2ct
              </div>
              <div className='mt-2 leading-[129%]'>Sponsored</div>
            </div>
            <div className='flex flex-col flex-1 px-3 pt-3 pb-8 rounded-lg shadow bg-white bg-opacity-0'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 font-bold leading-[143%]'>$13.49</div>
              <div className='mt-2 text-sm leading-4'>
                Zevo Flying Insect Trap
                <br />
                Refill Kit - 4ct
              </div>
              <div className='mt-2 leading-[129%]'>Sponsored</div>
            </div>
            <div className='flex flex-col flex-1 px-3 py-3.5 text-red-700 rounded-lg shadow bg-white bg-opacity-0'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 font-bold leading-[142%]'>$67.99</div>
              <div className='mt-1.5 text-xs leading-4'>
                reg <span className='line-through'>$129.99</span>{' '}
                <span className='text-red-700'>Sale</span>
              </div>
              <div className='mt-1 text-sm leading-4 text-stone-500'>
                Holiday Styling Outdoor
                <br />
                Metal String Light Pole…
              </div>
              <div className='mt-1.5 leading-[129%] text-stone-500'>
                Sponsored
              </div>
            </div>
            <div className='flex flex-col flex-1 py-3.5 pr-7 pl-3 rounded-lg shadow bg-white bg-opacity-0 max-md:pr-5'>
              <div className='shrink-0 bg-neutral-100 h-[164px]' />
              <div className='mt-4 font-bold leading-[148%]'>$5.99</div>
              <div className='mt-2 text-sm leading-4'>
                Back to the Roots
                <br />
                Organic Alpine
                <br />
                Strawberry Kids Grow …
              </div>
              <div className='mt-1 leading-[129%]'>Sponsored</div>
            </div>
          </div>
          <div className='flex gap-2.5 mt-6 w-[31px]'>
            <div className='flex-1 shrink-0 h-3 rounded-xl bg-zinc-800' />
            <div className='flex-1 shrink-0 my-auto rounded-lg bg-zinc-800 h-[9px]' />
          </div>
          <div className='mt-24 text-2xl font-bold leading-7 text-center whitespace-nowrap text-zinc-800 max-md:mt-10'>
            Guest Ratings & Reviews
          </div>
          <div className='mt-9 max-w-full w-[665px]'>
            <div className='flex gap-5 max-md:flex-col max-md:gap-0 max-md:'>
              <div className='flex flex-col w-[53%] max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col self-stretch my-auto max-md:mt-7'>
                  <div className='flex gap-5 justify-between'>
                    <div className='text-xs leading-4 text-center underline whitespace-nowrap text-stone-500'>
                      5 stars
                    </div>
                    <div className='flex flex-col flex-1 justify-center self-start pr-12 fill-neutral-100'>
                      <div className='shrink-0 h-2 bg-green-800 rounded' />
                    </div>
                    <div className='text-xs leading-4 text-center underline text-stone-500'>
                      80%
                    </div>
                  </div>
                  <div className='flex gap-5 justify-between mt-1.5'>
                    <div className='text-xs leading-4 text-center underline whitespace-nowrap text-stone-500'>
                      4 stars
                    </div>
                    <div className='flex flex-col flex-1 justify-center items-start self-start pr-16 fill-neutral-100'>
                      <div className='h-2 bg-green-800 rounded w-[25px]' />
                    </div>
                    <div className='text-xs leading-4 text-center underline text-stone-500'>
                      11%
                    </div>
                  </div>
                  <div className='flex gap-5 justify-between mt-1.5'>
                    <div className='text-xs leading-4 text-center underline whitespace-nowrap text-stone-500'>
                      3 stars
                    </div>
                    <div className='flex flex-col flex-1 justify-center items-start self-start pr-16 fill-neutral-100'>
                      <div className='h-2 bg-green-800 rounded w-[11px]' />
                    </div>
                    <div className='text-xs leading-4 text-center underline text-stone-500'>
                      5%
                    </div>
                  </div>
                  <div className='flex gap-5 justify-between mt-2'>
                    <div className='text-xs leading-4 text-center underline whitespace-nowrap text-stone-500'>
                      2 stars
                    </div>
                    <div className='flex flex-col flex-1 justify-center items-start self-start pr-16 fill-neutral-100'>
                      <div className='w-1 h-2 bg-green-800 rounded' />
                    </div>
                    <div className='text-xs leading-4 text-center underline text-stone-500'>
                      2%
                    </div>
                  </div>
                  <div className='flex gap-5 justify-between mt-2'>
                    <div className='text-xs leading-4 text-center underline whitespace-nowrap text-stone-500'>
                      1 star
                    </div>
                    <div className='flex flex-col flex-1 justify-center items-start self-start pr-16 fill-neutral-100'>
                      <div className='h-2 bg-green-800 rounded w-[7px]' />
                    </div>
                    <div className='text-xs leading-4 text-center underline text-stone-500'>
                      3%
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/79ae89cca9065b8e9b79f25e590341424917ac975e4536a193b338c60eed6265?'
                  className='grow max-w-full aspect-[1.19] w-[120px] max-md:mt-5'
                />
              </div>
              <div className='flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full'>
                <div className='flex flex-col items-center text-center whitespace-nowrap max-md:mt-5'>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/b5b2edc33fc8f8e45103dee5e81134dd2243bc8c230d8b0fda5a4298b796d79b?'
                    className='aspect-square w-[53px]'
                  />
                  <div className='self-stretch mt-2 text-base font-bold leading-6 text-zinc-800'>
                    89% would recommend
                  </div>
                  <div className='mt-3.5 text-sm leading-5 text-stone-500'>
                    942 recommendations
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-5 justify-between mt-12 max-w-full text-sm font-bold leading-5 text-stone-500 w-[397px] max-md:mt-10'>
            <div className='flex gap-3 justify-between'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/92f99f3c5fc3412de9e139e1ffbbfc300015f094ceb9aad79a5a0ac64aa9725d?'
                className='aspect-square w-[38px]'
              />
              <div className='self-start mt-1.5'>
                design
                <br />
                <span className=' text-stone-500'>out of 5</span>
              </div>
            </div>
            <div className='flex gap-3 justify-between'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/f1ef87338ed64a46e1739338b1f4e6412e1b0d3992076f5fdbe869373ec58357?'
                className='aspect-square w-[38px]'
              />
              <div className='self-start mt-1.5'>
                quality
                <br />
                <span className=' text-stone-500'>out of 5</span>
              </div>
            </div>
            <div className='flex gap-3 justify-between'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/ce5e7765c1f3e57834dc47fb0126356e453722cbbaa21cbd0bbfe0c1306cd004?'
                className='aspect-square w-[38px]'
              />
              <div>
                value
                <br />
                <span className=' text-stone-500'>out of 5</span>
              </div>
            </div>
          </div>
          <div className='mt-16 text-lg font-bold leading-6 text-center whitespace-nowrap text-zinc-800 max-md:mt-10'>
            Summary of reviews
          </div>
          <div className='mt-6 text-sm leading-5 text-center text-zinc-800 max-md:max-w-full'>
            The self-watering planter pots are appreciated for their
            lightweight, sleek, and modern design, available in
            <br />
            various sizes and colors. They are perfect for both indoor and
            outdoor use. While some guests find the self-
            <br />
            watering feature beneficial, others report issues with water pooling
            and attracting gnats. The pots are also
            <br />
            criticized for being difficult to clean and for the bottom part
            being hard to detach and reattach.
          </div>
          <div className='flex gap-5 justify-between mt-6 text-sm text-center text-green-800 max-md:flex-wrap max-md:max-w-full'>
            <div className='grow whitespace-nowrap leading-[154%]'>
              Self-watering feature (15)
            </div>
            <div className='flex-auto leading-[154%]'>Modern design (20)</div>
            <div className='flex-auto leading-[155%]'>
              Affordable price (25)
            </div>
            <div className='flex-auto text-amber-700 leading-[151%]'>
              Water pooling issue (10)
            </div>
            <div className='grow text-amber-700 whitespace-nowrap leading-[156%]'>
              Difficult to clean (5)
            </div>
          </div>
          <div className='mt-3.5 text-sm leading-5 text-center text-amber-700 whitespace-nowrap'>
            Hard to detach bottom (15)
          </div>
          <div className='mt-7 text-xs leading-4 text-center text-zinc-500 max-md:max-w-full'>
            Generated by AI from the text of recent guest reviews (includes
            incentivized reviews)
          </div>
          <div className='mt-9 text-xl font-bold leading-6 text-center whitespace-nowrap text-zinc-800'>
            Review images
          </div>
          <div className='flex gap-4 mt-6 max-w-full text-sm leading-5 text-center text-stone-500 w-[971px] max-md:flex-wrap'>
            <img
              loading='lazy'
              srcSet='...'
              className='flex-1 shrink-0 w-full aspect-square'
            />
            <img
              loading='lazy'
              srcSet='...'
              className='flex-1 shrink-0 w-full aspect-square'
            />
            <img
              loading='lazy'
              srcSet='...'
              className='flex-1 shrink-0 w-full aspect-square'
            />
            <img
              loading='lazy'
              srcSet='...'
              className='flex-1 shrink-0 w-full aspect-square'
            />
            <img
              loading='lazy'
              srcSet='...'
              className='flex-1 shrink-0 w-full aspect-square'
            />
            <img
              loading='lazy'
              srcSet='...'
              className='flex-1 shrink-0 w-full aspect-square'
            />
            <div className='flex-1 justify-center items-center px-5 underline border border-solid border-zinc-500 h-[125px]'>
              See more
              <br />
              review images
            </div>
          </div>
          <div
            id='Writeareview'
            className='justify-center px-2.5 py-3 mt-12 text-xs font-bold leading-3 text-center text-white whitespace-nowrap bg-red-700 rounded border border-red-700 border-solid max-md:mt-10'
          >
            Write a review
          </div>
          <div className='mt-12 text-xl font-bold leading-6 text-center whitespace-nowrap text-zinc-800 max-md:mt-10'>
            Reviews related to
          </div>
          <div className='flex gap-3 mt-7 text-sm leading-3 text-center whitespace-nowrap text-zinc-800 max-md:flex-wrap max-md:max-w-full'>
            <div className='grow justify-center px-6 py-4 bg-white rounded-lg border border-solid border-zinc-500 max-md:px-5'>
              Drainage
            </div>
            <div className='justify-center px-6 py-4 bg-white rounded-lg border border-solid aspect-[1.66] border-zinc-500 leading-[104%] max-md:px-5'>
              Price
            </div>
            <div className='grow justify-center px-6 py-4 bg-white rounded-lg border border-solid border-zinc-500 leading-[104%] max-md:px-5'>
              Dimension
            </div>
            <div className='grow justify-center px-6 py-4 bg-white rounded-lg border border-solid border-zinc-500 leading-[105%] max-md:px-5'>
              Indoor outdoor use
            </div>
            <div className='grow justify-center px-6 py-4 bg-white rounded-lg border border-solid border-zinc-500 max-md:px-5'>
              Material
            </div>
          </div>
          <div className='flex gap-3 mt-3 text-sm text-center whitespace-nowrap text-zinc-800 max-md:flex-wrap max-md:max-w-full'>
            <div className='grow justify-center px-5 py-4 bg-white rounded-lg border border-solid border-zinc-500 leading-[107%] max-md:px-5'>
              Sturdy
            </div>
            <div className='grow justify-center px-6 py-4 bg-white rounded-lg border border-solid border-zinc-500 leading-[106%] max-md:px-5'>
              Quality
            </div>
            <div className='grow justify-center px-6 py-4 bg-white rounded-lg border border-solid border-zinc-500 leading-[106%] max-md:px-5'>
              Features
            </div>
            <div className='justify-center px-6 py-4 bg-white rounded-lg border border-solid aspect-[1.55] border-zinc-500 leading-[105%] max-md:px-5'>
              Size
            </div>
            <div className='grow justify-center px-6 py-4 bg-white rounded-lg border border-solid border-zinc-500 leading-[104%] max-md:px-5'>
              Color
            </div>
          </div>
          <div className='flex gap-5 justify-between self-stretch px-4 py-5 mt-10 w-full bg-neutral-100 text-zinc-800 max-md:flex-wrap max-md:mr-0.5 max-md:max-w-full'>
            <div className='flex gap-3 self-start text-center max-md:flex-wrap max-md:max-w-full'>
              <div className='flex gap-px items-start py-3.5 pr-16 pl-3.5 bg-white rounded border border-solid border-zinc-500 max-md:pr-5'>
                <div className='grow text-base leading-4 whitespace-nowrap'>
                  sort by
                </div>
                <div className='mt-1 text-base font-bold leading-4'>
                  most recent
                </div>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/53c79c806ab44bcd6fc0b96d1da91107181759ce7dbea854e8e56856bec35a08?'
                  className='self-stretch w-3.5 aspect-[0.83]'
                />
              </div>
              <div className='flex gap-0.5 items-start py-3.5 pr-11 pl-3.5 bg-white rounded border border-solid border-zinc-500 max-md:pr-5'>
                <div className='grow text-base leading-4 whitespace-nowrap'>
                  filter by
                </div>
                <div className='self-stretch text-base font-bold leading-4'>
                  all ratings
                </div>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/e5c908e6da16851bd5839c33796d8f83ec89bacffeb61337ff68de4b8daf192d?'
                  className='w-3.5 aspect-[0.83]'
                />
              </div>
            </div>
            <div className='flex flex-col text-base leading-6'>
              <div className='flex gap-2 justify-between'>
                <div className='w-5 h-5 bg-white rounded border border-solid border-zinc-500' />
                <div className='flex-auto'>With photos</div>
              </div>
              <div className='flex gap-2 justify-between mt-2 whitespace-nowrap'>
                <div className='w-5 h-5 bg-white rounded border border-solid border-zinc-500' />
                <div className='grow'>Verified purchases</div>
              </div>
            </div>
          </div>
          <div className='mt-6 text-base leading-6 text-center whitespace-nowrap text-zinc-800'>
            We found 1085 matching reviews
          </div>
          {Array.from({ length: 5 }).map((_, i) => (
            <MarketPlaceReviewCard key={i} />
          ))}
          <div className='justify-center px-2.5 py-3 mt-11 text-xs leading-3 text-center whitespace-nowrap bg-white rounded border border-solid border-zinc-500 text-zinc-800 max-md:mt-10'>
            Load 8 more
          </div>
          <div className='justify-center px-2.5 py-3 mt-11 text-xs font-bold leading-3 text-center text-white whitespace-nowrap bg-red-700 rounded border border-red-700 border-solid max-md:mt-10'>
            Write a review
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
