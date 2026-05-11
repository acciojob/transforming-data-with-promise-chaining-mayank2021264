//your JS code here. If required.
let btn = document.getElementById('btn');
let ans = document.getElementById('output');

function promises() {
    let input = parseInt(document.getElementById('ip').value);

    if (isNaN(input)) {
        ans.textContent = "Please enter a valid number.";
        return;
    }

    // Start with the initial value
    new Promise((resolve) => {
        setTimeout(() => resolve(input), 2000);
    })
    .then((val) => {
        console.log("Step 2:", val);   // 7
        ans.textContent = `Result: ${val}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(val * 2), 1000); // 7*2 = 14
        });
    })
    .then((val) => {
        console.log("Step 3:", val);   // 14
        ans.textContent = `Result: ${val}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(val - 3), 1000); // 14-3 = 11
        });
    })
    .then((val) => {
        console.log("Step 4:", val);   // 11
        ans.textContent = `Result: ${val}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(val / 2), 1000); // 11/2 = 5.5
        });
    })
    .then((val) => {
        console.log("Step 5:", val);   // 5.5
        ans.textContent = `Result: ${val}`;
        return new Promise((resolve) => {
            setTimeout(() => resolve(val + 10), 1000); // 5.5+10 = 15.5
        });
    })
    .then((val) => {
        console.log("Final:", val);    // 15.5
        ans.textContent = `Final Result: ${val}`;
    })
    .catch((err) => console.log("Error:", err));
}


btn.addEventListener('click', promises);

