/**
 * Regortz
 * Сafert is a stylish and modern cafe template. It was created for the restaurant business: cafe, bar, bakery, pub, restaurant, pizzeria or other restaurant business
 * Exclusively on https://1.envato.market/Regortz-html
 *
 * @encoding        UTF-8
 * @version         1.0.0
 * @copyright       (C) 2018 - 2022 Merkulove ( https://merkulov.design/ ). All rights reserved.
 * @license         Envato License https://1.envato.market/KYbje
 * @contributors    Lilith Lamber (winter.rituel@gmail.com)
 * @support         help@merkulov.design
 **/
"use strict";

import baguetteBox from 'baguettebox.js';

export default function initGallery(container = '.gallery', options) {
    const containerEl = document.querySelector(container);
    if (containerEl) {
        baguetteBox.run(container, options ? {...options} : {});
    }
}