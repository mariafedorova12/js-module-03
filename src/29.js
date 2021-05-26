'use strict';
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = {...defaultSettings, ...overrideSettings, theme: 'light', public: false, withPassword: true, minNumberOfQuestions: 10, timePerQuestion: 30,};

console.log(finalSettings);

