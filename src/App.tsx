import { useEffect } from 'react';
import { performanceMonitor } from './utils/performance';
import AppRouter from './router';

function App() {
  useEffect(() => {
    // 标记应用加载完成
    performanceMonitor.mark('app-loaded');
    // 测量应用启动到加载完成的时间
    performanceMonitor.measure('app-load-time', 'app-start', 'app-loaded');
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;