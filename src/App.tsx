// 导入性能监控
import { performanceMonitor } from './utils/performance';
import { useEffect } from 'react';

function App() {
  // 标记应用加载完成
  useEffect(() => {
    performanceMonitor.mark('app-loaded');
    // 测量应用启动到加载完成的时间
    performanceMonitor.measure('app-load-time', 'app-start', 'app-loaded');
  }, []);

  return <div className="App"></div>;
}

export default App;