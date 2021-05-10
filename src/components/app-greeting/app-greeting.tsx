import {Component, h, Prop} from "@stencil/core";

@Component({
    tag: 'app-greeting',
    styleUrl: 'app-greeting.css',
    shadow: true
})
export class AppGreeting {

    @Prop() name: string;

    render() {
        return (
            <div class="greeting">
                Hello <span class="name">{this.name}</span>
            </div>
        );
    }

}
