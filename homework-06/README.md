[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/J1Ym9SxE)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=17796698)
## CS472-Node-Event-Loop
### Update the `README.md` file, to include the answers to the following questions:
1. What is LibUV?
- LibUV is a library to support asynchronous non-blocking I/O. Main parts of LibUV are event loop, worker thread pool, process.NextTick queue and list of queues for I/O communication such as Timers, Pending, Idle, Polling, Check, and Complete.

2. How does Node.js handle I/O operations asynchronously? What role does the event loop play in this process?
- Node.js uses LibUV to handle I/O operations asynchronously. The I/O operations are handled by worker thread pool in LibUV.
The progress, event, result are updated by event queue. The Event Loop processes event queue to update notification, callback
for I/O operations. So that the main thread in V8 is not blocked for I/O operations.

- The event loop picks up events from event queue and push these call backs into the called stack.

3. What are the advantages and limitations of a single-threaded model?
- Advantages of single-threaded model:
  + Dedicated component to handle I/O operations asynchronously to avoid blocking main thread
  + Separate user interface thread and I/O operations
  + Ensure performance in condition provided by HW, OS.
  + Provide model easy to implement, debug and maintain with single-thread
  + Reduce unstable in execution

- Limitations of single-thread model:
  + May not easy to scale up.
  + Too busy main thread works may impact even loop performance
  + Non-deterministic may happen causing not easy to reproduce problem
  + Context in asynchronous operation may cause problems hard to debug.


4. What is the difference between `setImmediate(f)` and `setTimeout(f, Time)`? 
- The `setImmediate(f)` puts call-back function f to queue Check for execution by even loop.
- The `setTimeout(f, Time)` waits for timeout duration then put call-back function f to queue Timers for execution.

5. What is the difference between `process.nextTick(f)` and `setImmediate(f)`?
- The `process.nextTick(f)` puts call-back function f to queue process.nextTick for execution.
- The `setImmediate(f)` puts call-back function f to queue Check for execution.

6. What is the difference between `process.nextTick(f)` and `queueMicrotask(f)`?
- The `process.nextTick(f)` puts call-back function f to queue process.nextTick for execution.
- The `queueMicrotask(f)` puts call-back function f to queue microTask for exection.

7. Name 10 of Node Core modules
- fs, path, http, https, url, os, querystring, events, util, stream 
8. Name 10 of Node Global objects
- global, process, Buffer, __dirname, __filename, module, exports, require(), setTimeout()

#### Navigate to the `test` folder, run `npm i`
Write down your observation and explain what happens in Node when you run the following commands:
   1. `npm run start`  
   2. For Windows: `SET UV_THREADPOOL_SIZE=2 && npm run start`
   3. For MacOS: `export UV_THREADPOOL_SIZE=2 && npm run start`

- I run with thread pool size from 1 to 10. I have some comments:
  + at thread pool size = 1, the running time increase linear
  + When increase number of thread in thread pool, the time to complete at the first time increase but the time to complete subsequence times decrease
  + With number of setting more than 4, the running time is from 1000ms to 2000ms. The difference of running time is narrow.

Please see the file of running time and chart.  
