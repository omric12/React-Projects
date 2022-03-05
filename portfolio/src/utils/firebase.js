import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';

const firebaseConfig = {
  apiKey: 'AIzaSyAZMLNrdZeCwZoCu96nyRJl-tRXqZiAUpU',
  authDomain: 'react-learn-c013c.firebaseapp.com',
  projectId: 'react-learn-c013c',
  storageBucket: 'react-learn-c013c.appspot.com',
  messagingSenderId: '352953834516',
  appId: '1:352953834516:web:05f29c1b3fe2259f375b01',
  measurementId: 'G-Q02CQHZF7F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (typeof window !== 'undefined') {
  const analytics = getAnalytics();
  logEvent(analytics, 'notification_received');
  const perf = getPerformance(app);
  logEvent(perf, 'notification_received');
}

export default app;
