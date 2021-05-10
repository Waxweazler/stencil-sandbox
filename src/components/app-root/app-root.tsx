import {Component, h} from '@stencil/core';

@Component({
    tag: 'app-root',
    shadow: true
})
export class AppRoot {
    render() {
        return (
            <div>
                <header>
                    <h1>Stencil App Starter</h1>
                </header>
                <main>
                    <app-greeting name="Bruce Wayne"/>
                </main>
            </div>
        );
    }
}
