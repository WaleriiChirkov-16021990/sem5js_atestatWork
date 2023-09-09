"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
];

const daysObject = {
    getFill: function (date1, date2) {
        if (typeof date1 === "object" && typeof date2 === "object"
            && date1.length >= date2.length) {
            for (const date1Element in date1) {
                this[date1[date1Element]] = date2[date1Element];
            }
        }
    }
};
daysObject.getFill(en, ru);
console.log(daysObject);