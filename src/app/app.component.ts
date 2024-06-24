import { Component } from '@angular/core';
import { Article } from '../interfaces/article.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Hi, Angular! This is my first Angular app!';
  title_color: string = 'black';
  isClicked: number = -1;

  public articles: Article[] = [
    { id: 1, title: 'Article 1', 
      content: `In the dim light of the early morning, 
      Eleanor could see the outline of the ancient castle 
      against the pale sky. The air was crisp, filled with 
      the scents of dew and blooming lavender. She had spent 
      countless hours wandering these grounds, lost in the 
      stories of the past. Today, however, she was determined 
      to uncover the truth hidden within the castles stone walls, 
      a secret that had been buried for centuries.`, 
      color: 'red' },
    { id: 2, title: 'Article 2', 
      content: `Recent advancements in quantum computing are set 
      to revolutionize the tech industry. Unlike classical computers 
      that use bits, quantum computers utilize qubits, which can 
      represent both 0 and 1 simultaneously. This capability allows 
      them to solve complex problems exponentially faster than traditional 
      computers. Researchers are now focusing on overcoming the 
      challenges of qubit stability and error correction to make 
      quantum computing a practical reality.`, 
      color: 'green' },
    { id: 3, title: 'Article 3', 
      content: `The forest of Eldoria was unlike any other. Towering 
      trees with silver leaves shimmered in the moonlight, casting an 
      ethereal glow on the moss-covered ground. As Aria ventured deeper 
      into the woods, the sounds of nocturnal creatures filled the air, 
      creating a symphony of rustling leaves and distant howls. She 
      clutched the ancient map tightly, knowing that the enchanted 
      glade she sought was near. It was said that within its bounds, 
      one could find the answers to any question—if they were brave enough to seek them.`, 
      color: 'blue' },
      { id: 4, title: 'Article 4', 
        content: `The forest of Eldoria was unlike any other. Towering 
        trees with silver leaves shimmered in the moonlight, casting an 
        ethereal glow on the moss-covered ground. As Aria ventured deeper 
        into the woods, the sounds of nocturnal creatures filled the air, 
        creating a symphony of rustling leaves and distant howls. She 
        clutched the ancient map tightly, knowing that the enchanted 
        glade she sought was near. It was said that within its bounds, 
        one could find the answers to any question—if they were brave enough to seek them.`, 
        color: 'black' }
  ];

  setHighlightColor(id: number) {
    console.log('id', id);
    this.isClicked = id;
  }
}
