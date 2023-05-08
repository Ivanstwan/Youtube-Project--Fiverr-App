import React from 'react';
import InfiniteCarousel from '../../common/slider/InfiniteCarousel';
import { Link } from 'react-router-dom';

const Slide = (cards) => {
  const data = [
    {
      id: 1,
      title: 'Title 1',
      desc: 'Description here',
      imgURL:
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png',
    },
    {
      id: 2,
      title: 'Title 2',
      desc: 'Description here',
      imgURL:
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png',
    },
    {
      id: 3,
      title: 'Title 3',
      desc: 'Description here',
      imgURL:
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png',
    },
    {
      id: 4,
      title: 'Title 4',
      desc: 'Description here',
      imgURL:
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png',
    },
    {
      id: 5,
      title: 'Title 5',
      desc: 'Description here',
      imgURL:
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png',
    },
    {
      id: 6,
      title: 'Title 6',
      desc: 'Description here',
      imgURL:
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png',
    },
    {
      id: 7,
      title: 'Title 7',
      desc: 'Description here',
      imgURL:
        'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png',
    },
  ];
  return (
    <div className="mb-16 flex w-full justify-center">
      <div className="flex w-full max-w-7xl">
        <InfiniteCarousel>
          {data.map((card) => {
            return (
              <Link key={card.id} to="/" className="relative">
                <h4 className="absolute p-4 text-2xl font-semibold text-white">
                  <small className="block text-sm">{card.desc}</small>
                  {card.title}
                </h4>
                <img src={card.imgURL} className="w-full object-contain" />
              </Link>
            );
          })}
        </InfiniteCarousel>
      </div>
    </div>
  );
};

export default Slide;
