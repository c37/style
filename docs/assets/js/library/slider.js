/**
 *
 * Static Here - in Mon May 01 2017 10:57:20 GMT-0300 (BRT)
 *
 * c37-styleguide - styleguide of C37 - CNC
 * @version 0.0.1
 * @link http://styleguide.c37.co
 * @license CC BY-SA 4.0
 *
 */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.slider = mod.exports;
    }
})(this, function () {
    'use strict';

    // https://github.com/ruyadorno/simple-slider


    function getdef(val, def) {
        return val == null ? def : val; // eslint-disable-line
    }

    function len(arr) {
        return arr && arr.length ? arr.length : 0;
    }

    function startSlides(containerElem, children, unit, startVal, visVal, trProp) {
        var style = void 0,
            imgs = [];

        if (!children) {
            children = containerElem.children;
        }

        var i = len(children);

        // Ciro
        containerElem.style.width = "100%";

        while (--i >= 0) {
            imgs[i] = children[i];
            // Ciro
            // regitando class hide
            if (imgs[i].classList.contains('hide')) {
                imgs[i].classList.remove('hide');
            }

            style = imgs[i].style;
            style.position = 'absolute';
            style.top = style.left = style.zIndex = 0;
            style[trProp] = startVal + unit;
        }

        style[trProp] = visVal + unit;
        style.zIndex = 1;

        return imgs;
    }

    function defaultEase(time, begin, change, duration) {
        return (time = time / (duration / 2)) < 1 ? // eslint-disable-line
        change / 2 * time * time * time + begin // eslint-disable-line
        : change / 2 * ((time -= 2) * time * time + 2) + begin; // eslint-disable-line
    }

    function getSlider(options) {
        options = options || {};
        var actualIndex = void 0,
            interval = void 0,
            intervalStartTime = void 0,
            imgs = void 0,
            remainingTime = void 0;

        // Get user defined options or its default values
        var containerElem = getdef(options.container, document.querySelector('*[data-slider]'));
        var trProp = getdef(options.prop, 'left');
        var trTime = getdef(options.duration, 0.5) * 1000;
        var delay = getdef(options.delay, 3) * 1000;
        var unit = getdef(options.unit, '%');
        var startVal = getdef(options.init, -100);
        var visVal = getdef(options.show, 0);
        var endVal = getdef(options.end, 100);
        var paused = options.paused; // eslint-disable-line
        var ease = getdef(options.ease, defaultEase);
        var onChange = getdef(options.onChange, 0);
        var onChangeEnd = getdef(options.onChangeEnd, 0);
        var now = Date.now;

        function reset() {

            if (containerElem) {

                if (len(containerElem.children) > 0) {
                    var style = containerElem.style;
                    style.position = 'relative';
                    style.overflow = 'hidden';
                    style.display = 'block';

                    imgs = startSlides(containerElem, options.children, unit, startVal, visVal, trProp);
                    actualIndex = 0;
                    remainingTime = delay;
                }
            }
        }

        // Slideshow/autoPlay timing logic
        function setAutoPlayLoop() {
            intervalStartTime = now();
            interval = setTimeout(function () {
                intervalStartTime = now();
                remainingTime = delay; // resets time, used by pause/resume logic

                change(nextIndex());

                // loops
                setAutoPlayLoop();
            }, remainingTime);
        }

        function resume() {
            if (isAutoPlay()) {
                if (interval) {
                    clearTimeout(interval);
                }

                setAutoPlayLoop();
            }
        }

        function isAutoPlay() {
            return !paused && len(imgs) > 1;
        }

        function pause() {
            if (isAutoPlay()) {
                remainingTime = delay - (now() - intervalStartTime);
                clearTimeout(interval);
                interval = 0;
            }
        }

        function reverse() {
            var newEndVal = startVal;
            startVal = endVal;
            endVal = newEndVal;
            actualIndex = Math.abs(actualIndex - (len(imgs) - 1));
            imgs = imgs.reverse();
        }

        function change(newIndex) {
            var count = len(imgs);
            while (--count >= 0) {
                imgs[count].style.zIndex = 1;
            }

            imgs[newIndex].style.zIndex = 3;
            imgs[actualIndex].style.zIndex = 2;

            anim(imgs[actualIndex].style, // insertElem
            visVal, // insertFrom
            endVal, // insertTo
            imgs[newIndex].style, // removeElem
            startVal, // removeFrom
            visVal, // removeTo
            trTime, // transitionDuration
            0, // startTime
            0, // elapsedTime
            ease // easeFunc
            );

            actualIndex = newIndex;

            if (onChange) {
                onChange(prevIndex(), actualIndex);
            }
        }

        function next() {
            change(nextIndex());
            resume();
        }

        function prev() {
            change(prevIndex());
            resume();
        }

        function nextIndex() {
            var newIndex = actualIndex + 1;
            return newIndex >= len(imgs) ? 0 : newIndex;
        }

        function prevIndex() {
            var newIndex = actualIndex - 1;
            return newIndex < 0 ? len(imgs) - 1 : newIndex;
        }

        function dispose() {
            clearTimeout(interval);
            document.removeEventListener('visibilitychange', visibilityChange);

            imgs = containerElem = interval = trProp = trTime = delay = startVal = endVal = paused = actualIndex = remainingTime = onChange = onChangeEnd = null;
        }

        function currentIndex() {
            return actualIndex;
        }

        function anim(insertElem, insertFrom, insertTo, removeElem, removeFrom, removeTo, transitionDuration, startTime, elapsedTime, easeFunc) {
            function setProp(elem, from, to) {
                elem[trProp] = easeFunc(elapsedTime - startTime, from, to - from, transitionDuration) + unit;
            }

            if (startTime > 0) {
                if (elapsedTime - startTime < transitionDuration) {
                    setProp(insertElem, insertFrom, insertTo);
                    setProp(removeElem, removeFrom, removeTo);
                } else {
                    insertElem[trProp] = insertTo + unit;
                    removeElem[trProp] = removeTo + unit;

                    if (onChangeEnd) {
                        onChangeEnd(actualIndex, nextIndex());
                    }
                    return;
                }
            }

            requestAnimationFrame(function (time) {
                // Starts time in the first anim iteration
                if (startTime === 0) {
                    startTime = time;
                }

                anim(insertElem, insertFrom, insertTo, removeElem, removeFrom, removeTo, transitionDuration, startTime, time, easeFunc);
            });
        }

        function visibilityChange() {
            if (document.hidden) {
                pause();
            } else {
                resume();
            }
        }

        // configures visibility api handler https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
        document.addEventListener('visibilitychange', visibilityChange);
        reset();

        if (imgs && len(imgs) > 1) {
            resume();
        }

        "#if TEST > 0"; // eslint-disable-line
        return {
            internalState: {
                getInterval: function getInterval() {
                    return interval;
                },
                getRemainingTime: function getRemainingTime() {
                    return remainingTime;
                },
                getImgs: function getImgs() {
                    return imgs;
                },
                getContainerElem: function getContainerElem() {
                    return containerElem;
                },
                setActualIndex: function setActualIndex(val) {
                    actualIndex = val;
                },
                isAutoPlay: isAutoPlay,
                defaultEase: defaultEase,
                reset: reset,
                trProp: trProp,
                trTime: trTime,
                delay: delay,
                unit: unit,
                startVal: startVal,
                visVal: visVal,
                endVal: endVal,
                paused: paused,
                ease: ease
            },
            currentIndex: currentIndex,
            pause: pause,
            resume: resume,
            nextIndex: nextIndex,
            prevIndex: prevIndex,
            next: next,
            prev: prev,
            change: change,
            reverse: reverse,
            dispose: dispose
        };
        "#else"; // eslint-disable-line
        return {
            currentIndex: currentIndex,
            pause: pause,
            resume: resume,
            nextIndex: nextIndex,
            prevIndex: prevIndex,
            next: next,
            prev: prev,
            change: change,
            reverse: reverse,
            dispose: dispose
        };
        "#endif"; // eslint-disable-line
    }

    window.getSlider = getSlider;

    window.addEventListener('DOMContentLoaded', function () {

        getSlider({
            init: -100,
            show: 0,
            end: 100,
            unit: '%'
        });
    });
});