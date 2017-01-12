import {Component} from 'angular2/core';
import {Video} from './video';
@Component({
    selector: 'playlist',
    templateUrl: './playlist.component.html',
    inputs: ['videos']
})

export class PlaylistComponent{

    onSelect(vid:Video){
        console.log(JSON.stringify(vid));
        window.open("https://www.youtube.com/watch?v="+ vid.videoCode);
    }
}
