// Cách 1: 
// function loggerTest (log, type = 'log'){
//     console[type](log)
// }
// export default loggerTest;

//Cách 2:
// export const TYPE_LOG = 'log'
// export const TYPE_WARN = 'warn'
// export const TYPE_ERROR = 'error'

// function loggerTest (log, type = TYPE_LOG){
//     console[type](log)
// }
// export default loggerTest;

//Cách 3:

// import { 
//     TYPE_LOG
// } from './constants.js'

// function loggerTest (log, type = TYPE_LOG){
//     console[type](log)
// }
// export default loggerTest;

//Cách 4:

// import { 
//     TYPE_LOG
// } from './constants.js'

// function loggerTest (log, type = TYPE_LOG){
//     console[type](log)
// }
// export default loggerTest;
