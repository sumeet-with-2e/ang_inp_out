import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../interfaces/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input() article!: Article;
  @Output() highlight_color_id: EventEmitter<number> = new EventEmitter();
  flag: boolean = false;

  setHighlightColor() {
    // console.log('id', this.article.id);
    this.highlight_color_id.emit(this.article.id); 
  }
}
