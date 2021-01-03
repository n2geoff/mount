export default function (s) {
    let el = document.querySelector(s || '$');

    return {
        get() {
            return el;
        },
        html(text) {
            return el.innerHTML = text;
        },
        element(element) {
            return el.appendChild(document.createElement(element));
        },
        script(src) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = src;

            document.body.appendChild(script);
        },
        component(element, src) {
            // clear previous
            el.innerHTML = '';

            if (src) {
                this.script(src);
            }

            return this.element(element);
        }
    }
}
