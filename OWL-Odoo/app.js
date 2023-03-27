/* Component reactive */
const { Component } = owl
const { xml } = owl.tags
const { whenReady }= owl.utils
// const { useState } = owl.hooks

//Owl Components
class App extends Component {
    static template = xml`<div style="font-size: 200px;" t-on-clcik= "increment"><t t-esc="state.value"/></div>`
    state = {value: 0}

    increment () {
        this.state.value++
        console.log(this.state.value)
    }
}

// Setup code
function setup() {
    const app= new App()
    app.mount(document.body)
}

whenReady(setup) 