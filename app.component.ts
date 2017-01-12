import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    directives: [PlaylistComponent]

})
export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
    this.videos = [
        new Video(1, "Cherry Wine", "pWWX0aUW_HY", "Hozier Sings Cherry Wine"),
        new Video(2, "Castle on the Hill", "Ytb7J0ciBcE", "Ed Sheeran sings Castle on the Hill"),
        new Video(3, "Sweet Thing", "HAbs_PYfpvQ", "Hozier Covers Van Morrison"),
        new Video(4, "Learn These Lessons or Live a Mediocre Life", "7WDPrDAM2Cc&t=5246s", "Jim Rohn's life lessons"),
        new Video(5, "How Monarchy Works", "2frZoXxo7wY", "Russell Brand Interview on Conan")


    ]

    }
}
