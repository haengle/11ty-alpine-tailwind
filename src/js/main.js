import scroll from './unreleased-alpine-plugins/scroll.js';
import intersect from '@alpinejs/intersect';
import Alpine from 'alpinejs';

import global from './components/global.js';
import dropdown from './components/dropdown.js';
import toggleNavbar from './components/toggleNavbar.js';
import accordion from './components/accordion.js';
import modal from './components/modal.js';
import tables from './components/tables.js';
import form from './components/form.js';
import { trapFocus, endFocus } from './custom/trapFocus.js';
import { initSwiper } from './custom/carousel.js';
import scrollspy from './components/scrollspy.js';

import { canUseRouteUtm } from './custom/utm.js';
import { setCookie, getCookie } from './custom/cookies';

import * as jsonData from '../_data/theme/site.json';

Alpine.data('global', global);
Alpine.data('dropdown', dropdown);
Alpine.data('toggleNavbar', toggleNavbar);
Alpine.data('accordion', accordion);
Alpine.data('modal', modal);
Alpine.data('tables', tables);
Alpine.data('form', form);
Alpine.data('scrollspy', scrollspy);

Alpine.directive('trapfocus', (el, { }, { cleanup }) => {
    trapFocus(el);

    cleanup(() => {
        endFocus();
    })
});

Alpine.directive('carousel', (el, { modifiers, expression }) => {
    initSwiper(el, expression, modifiers);
});

Alpine.plugin(scroll);
Alpine.plugin(intersect);

Alpine.start();

// Font awesome
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { faArrowsLeftRight, faArrowTrendDown, faArrowTrendUp, faCaretRight, faCircleArrowRight } from '@fortawesome/pro-solid-svg-icons'
import { faChevronDown, faChevronRight, faChevronLeft, faChevronUp, faXmark, faBars, faUpRightFromSquare, faArrowUp } from '@fortawesome/pro-regular-svg-icons'
import { faArrowDownLong, faCircleCheck, faCircleXmark } from '@fortawesome/pro-light-svg-icons'
import { faCalendarDays, faClock, faPresentationScreen } from '@fortawesome/pro-duotone-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faChevronDown,
    faChevronUp,
    faChevronRight,
    faChevronLeft,
    faXmark,
    faBars,
    faUpRightFromSquare,
    faArrowDownLong,
    faCaretRight,
    faCalendarDays,
    faClock,
    faPresentationScreen,
    faCircleArrowRight,
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faYoutube,
    faCircleCheck,
    faCircleXmark,
    faArrowTrendDown,
    faArrowTrendUp,
    faArrowsLeftRight,
    faArrowUp);

dom.watch();