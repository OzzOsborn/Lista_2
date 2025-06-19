let memo = []

function Fibonacci(number){
    if(number in memo)
        return memo[number]
    else 
        if(number <= 1)
            return number
        else
            memo[number] = Fibonacci(number - 1) + Fibonacci(number - 2) 
            return memo[number]
}

console.log(Fibonacci(10))
