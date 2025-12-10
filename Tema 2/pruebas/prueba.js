import { animate, createTimer, createTimeline , utils, onScroll } from 'animejs';

const [ container ] = utils.$('.scroll-container');
const debug = true;

// Animation

import { animate } from 'animejs';

animate('.square', {
  y: '100cqh',
  duration: 1000,
  ease: 'outBack(1.7)'
});

// Timer

const [ $timer ] = utils.$('.timer');

createTimer({
  duration: 2000,
  alternate: true,
  loop: true,
  onUpdate: self => {
    $timer.innerHTML = self.iterationCurrentTime
  },
  autoplay: onScroll({
    target: $timer.parentNode,
    container,
    debug
  })
});

// Timeline

const circles = utils.$('.circle');

createTimeline({
  alternate: true,
  loop: true,
  autoplay: onScroll({
    target: circles[0],
    container,
    debug
  })
})
.add(circles[2], { x: '9rem' })
.add(circles[1], { x: '9rem' })
.add(circles[0], { x: '9rem' });

createScope({
  root: '#subtle-highlight',
  defaults: { ease: 'out(3)', duration: 350, composition: 'blend' },
}).add((scope) => {

  const { root, methods } = scope;
  const { chars } = text.split('h2', { chars: true });

  utils.set(chars, { opacity: .25 });

  scope.add('onEnter', () => createTimeline().add(chars, { opacity: 1, textShadow: '0 0 30px rgba(255,255,255,.9)' }, stagger(12)));
  scope.add('onLeave', () => createTimeline().add(chars, { opacity: .25, textShadow: '0 0 0px rgba(255,255,255,0)' }, stagger(12)));

  root.addEventListener('pointerenter', methods.onEnter);
  root.addEventListener('pointerleave', methods.onLeave);

});
