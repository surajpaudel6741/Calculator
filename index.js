const calculation = (expression) => {
    const numbers = expression.split(/[/*+-]/);
    const operands = expression.split(/\\d/);
    const operators = ["/", "*", "+", "-"]
    operands.forEach(element => {
        const index = operands.indexOf("");
        if (index > -1) {
            operands.splice(index, 1);
        }
    });
    if (numbers.length == 1) return numbers[0];
    const op = 0;
    for (i = 0; i < 4; i++) {
        let noOfOperands = expression.split(operators[i]).length;
        while (noOfOperands > 1) {
            let index = operands.indexOf(operators[i]);
            if (index == -1) break;
            let a = parseInt(numbers[index]);
            let b = parseInt(numbers[index + 1]);
            switch (operators[i]) {
                case "/":
                    op = Math.round(a / b)
                    break;
                case "*":
                    op = a * b;
                    break;
                case "+":
                    op = a * b;
                    break;
                case "-":
                    op = a * b;
                    break;
            }
            numbers.splice(index, 0, op);
            numbers.splice(index + 1, 1);
            numbers.splice(index + 1, 1);
            operands.splice(index, 1)
            noOfOperands--;
        }
    }
    return numbers[0];

};