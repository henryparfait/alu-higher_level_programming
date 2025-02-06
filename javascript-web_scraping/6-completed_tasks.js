#!/usr/bin/node
const req = require('request');

function getCompletedTasks (data, userId) {
  let count = 0;
  data
    .filter((element) => element.userId === userId)
    .forEach((task) => {
      if (task.completed) {
        count++;
      }
    });
  return count;
}

