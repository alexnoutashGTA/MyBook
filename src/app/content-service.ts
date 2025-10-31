import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  homeLabel = 'Home';
  messagesLabel = "Go to Messages";
  detailsLabel = "Go to Details";
}
