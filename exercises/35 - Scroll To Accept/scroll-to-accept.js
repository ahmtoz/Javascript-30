const button = document.querySelector(".accept");
const terms = document.querySelector(".terms-and-conditions");

function observerCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        ob.unobserve(terms.lastElementChild);
    }
}

const ob = new IntersectionObserver(observerCallback, {
    root: terms,
    threshold: 1,
});

ob.observe(terms.lastElementChild);