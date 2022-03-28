/*
If the string is empty, return 0.
We receive the string: hh:mm:ss,nnn-nnn-nnn with ASCII 10 for separating lines
We must sustract the amount of seconds in ints
And the phone number in ints

If call duration < 301 s => 3 * Math.ceil(s / 60)
If call duration > 300 s => 150  * Math.ceil(s / 60)

All the calls to the phone number that has the longest duration are free.
If a tie happens (more than one phone number shares the longest total duration of calls), the smallest phone number has free calls.

Split the string, we gonna get the full logs:
1- var rawLogs = string.split -> S.split("\n")

2- Create object logsSummary

3- Loop through each rawLogs, splitting it: let spplitedLog = S.split(",") we gonna have number and time separated at this moment. splittedLog[0] contains the time, and [1] the number
    - Calculate the fee, using the formula previously described.
    - if (logsSummary.hasOwnProperty(splittedLog[1])){
        logsSummary[splittedLog[1]]["fee"] += fee;
        logsSummary[splittedLog[1]]["secondsOnCall"] += s;
    }
        else{
            logsSummary[splittedLog[1]]["fee"] = fee;
            logsSummary[splittedLog[1]]["secondsOnCall"] = s;
        }

4- Loop the object logsSummary (for...in) and search for the two numbers with the biggest ammount of secondsOnCall, and store them.

5- Loop once again the object, and:
IF A TIE HAPPENDED (more than one phone number shares the longest total duration of calls), the smallest phone number has free calls.
IF NOT, add all the fees but the ones from the phone number with the logest total duration of calls.
*/