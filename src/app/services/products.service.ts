import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  products = [
    {
      id: 1,
      title:
        'Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens  (Black)',
      original_price: 26899,
      discount_price: 33995,
      highlights: [
        'Self-Timer | Type C and Mini HDMI, |9 Auto Focus Points | 35x Optical Zoom., Effective Pixels: 18 MP APS-C CMOS sensor-which is 25 times larger than a typical Smartphone sensor., WiFi | Full HD | Video Recording at 1080 p on 30fps.,',
        'Effective Pixels: 18 MP',
        'Sensor Type: CMOS',
        'WiFi Available',
        'Full HD',
      ],
      important_notes:
        'Memory Card is not included in this package. It needs to be purchased separately.',
      seller: {
        name: 'SPLIPRLItech',
        rating: 4.5,
        policy: [
          '7 day seller replacement policy/brand assistance for device issues*',
          'GST invoice available``',
        ],
      },
      description:
        'If you are a photography enthusiast, then the Canon EOS 3000D DSLR Camera is a must-have gadget. Featuring an 18 MP (APS-C) CMOS sensor and the DIGIC 4+ imaging processor, you can capture amazing photos of your subject at all times, even in low-light conditions. Moreover, the remote Live View function lets you control this camera remotely using your smartphone so you can capture amazing photos even from a distance.',
      specifications: [
        {
          title : 'in the box',
          description : '1 Camera Body, 18 - 55 mm Lens, Battery, Battery Charger'
        }
      ],
    },
  ];
}
