// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">首页</a></span></li><li class="chapter-item expanded "><li class="part-title">序</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="front-matter/taiwan-edition-preface.html">台湾版序</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="front-matter/preface.html">序言</a></span></li><li class="chapter-item expanded "><li class="part-title">正文</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter-01-control-and-feedback/index.html">第一章 控制和反馈</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-01-control-and-feedback/01-possibility-space.html">1.1 可能性空间</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-01-control-and-feedback/02-transform-world-through-selection.html">1.2 人通过选择改造世界</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-01-control-and-feedback/03-control-capability.html">1.3 控制能力</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-01-control-and-feedback/04-random-control.html">1.4 随机控制</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-01-control-and-feedback/05-memory-based-control.html">1.5 有记忆的控制</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-01-control-and-feedback/06-conjugate-control.html">1.6 共轭控制</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-01-control-and-feedback/07-negative-feedback-regulation.html">1.7 负反馈调节</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-01-control-and-feedback/08-negative-feedback-expands-control-capability.html">1.8 负反馈如何扩大了控制能力</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-01-control-and-feedback/09-positive-feedback-and-vicious-cycles.html">1.9 正反馈与恶性循环</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter-02-information-thinking-and-organization/index.html">第二章 信息、思维和组织</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-02-information-thinking-and-organization/01-what-it-means-to-know.html">2.1 什么是知道</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-02-information-thinking-and-organization/02-information-transmission.html">2.2 信息的传递</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-02-information-thinking-and-organization/03-is-information-an-object.html">2.3 信息是一种客体吗</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-02-information-thinking-and-organization/04-channel-capacity.html">2.4 通道容量</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-02-information-thinking-and-organization/05-filtering-removing-falsehood-and-preserving-truth.html">2.5 滤波:去伪存真的研究</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-02-information-thinking-and-organization/06-information-storage.html">2.6 信息的储存</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-02-information-thinking-and-organization/07-information-processing-and-thinking.html">2.7 信息加工和思维</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-02-information-thinking-and-organization/08-information-and-organization.html">2.8 信息和组织</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter-03-systems-and-evolution/index.html">第三章 系统及其演化</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-03-systems-and-evolution/01-causality-in-systems-research.html">3.1 系统研究方法中的因果联系</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-03-systems-and-evolution/02-relatively-isolated-systems.html">3.2 相对孤立系统</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-03-systems-and-evolution/03-steady-state-structures.html">3.3 系统的稳态结构</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-03-systems-and-evolution/04-steady-state-structures-and-prediction.html">3.4 稳态结构和预言</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-03-systems-and-evolution/05-uniformity-and-stability.html">3.5 均匀和稳定</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-03-systems-and-evolution/06-instability-and-periodic-oscillation.html">3.6 不稳定和周期性振荡</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-03-systems-and-evolution/07-ultrastable-systems.html">3.7 超稳定系统</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-03-systems-and-evolution/08-system-evolution.html">3.8 系统的演化</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-03-systems-and-evolution/09-system-collapse-self-reproduction.html">3.9 系统的崩溃:自繁殖现象</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-03-systems-and-evolution/10-self-organizing-systems.html">3.10 自组织系统</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-03-systems-and-evolution/11-intelligence-amplification-and-superamplifiers.html">3.11 智力放大与超级放大器</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter-04-mathematical-model-of-qualitative-change/index.html">第四章 质变的数学模型</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-04-mathematical-model-of-qualitative-change/01-common-problem-for-philosophers-and-mathematicians.html">4.1 哲学家和数学家共同的难题</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-04-mathematical-model-of-qualitative-change/02-qualitative-change-through-leaps-and-gradual-change.html">4.2 质变可以通过飞跃和渐变两种方式实现</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-04-mathematical-model-of-qualitative-change/03-why-things-have-definite-properties.html">4.3 事物为什么具有确定的性质</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-04-mathematical-model-of-qualitative-change/04-stability-mechanism-math-of-steady-state-structures.html">4.4 稳定机制:稳态结构的数学表达</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-04-mathematical-model-of-qualitative-change/05-invariance-gradual-change-and-mutation.html">4.5 事物性质的不变、渐变和突变</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-04-mathematical-model-of-qualitative-change/06-how-to-identify-leaps.html">4.6 怎样判别飞跃</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-04-mathematical-model-of-qualitative-change/07-conditions-for-leaps-and-gradual-change.html">4.7 飞跃和渐变的条件</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-04-mathematical-model-of-qualitative-change/08-critical-points-butterfly-swallowtail-and-others.html">4.8 关节点:蝴蝶、燕尾及其他</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-04-mathematical-model-of-qualitative-change/09-must-correction-go-too-far.html">4.9 矫枉必须过正吗</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-04-mathematical-model-of-qualitative-change/10-coexistence-of-extremes.html">4.10 极端共存</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-04-mathematical-model-of-qualitative-change/11-common-mission.html">4.11 共同的使命</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="chapter-05-black-box-epistemology/index.html">第五章 黑箱认识论</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-05-black-box-epistemology/01-cognitive-objects-and-black-boxes.html">5.1 认识对象和黑箱</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-05-black-box-epistemology/02-epistemological-models.html">5.2 认识论模式</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-05-black-box-epistemology/03-limits-of-observable-and-controllable-variables.html">5.3 可观察变量和可控制变量的限制</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-05-black-box-epistemology/04-clarity-of-theory.html">5.4 理论的清晰性</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-05-black-box-epistemology/05-speed-of-model-approximation-to-truth.html">5.5 模型逼近客观真理的速度</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-05-black-box-epistemology/06-excessive-feedback.html">5.6 反馈过度</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-05-black-box-epistemology/07-decidable-conditions.html">5.7 可判定条件</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="chapter-05-black-box-epistemology/08-science-and-humanity.html">5.8 科学和人</a></span></li></ol><li class="chapter-item expanded "><li class="part-title">附录</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="appendix/index.html">附录</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appendix/twelve-balls-problem.html">关于12个兵兵球问题</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appendix/copyright.html">版权页</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="appendix/producer.html">制作者</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

