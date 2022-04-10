function result()
{
    var eng = document.getElementById("english").value;
    document.getElementById("eng_marks").innerHTML = eng;
    var mar = document.getElementById("marathi").value;
    document.getElementById("marathi_marks").innerHTML = mar;
    var bio = document.getElementById("biology").value;
    document.getElementById("biology_marks").innerHTML = bio;
    var phy = document.getElementById("physics").value;
    document.getElementById("physics_marks").innerHTML = phy;
    var chem = document.getElementById("chemistry").value;
    document.getElementById("chemistry_marks").innerHTML = eng;
    var env_edu = document.getElementById("env_edu").value;
    document.getElementById("env_edu_marks").innerHTML = env_edu;
    var math = document.getElementById("math").value;
    document.getElementById("math_marks").innerHTML = math;

    var sum = parseInt(eng) + parseInt(mar) + parseInt(bio)+ parseInt(phy) +parseInt(chem)+ parseInt(env_edu)+ parseInt(math);
    document.getElementById("totalSum").innerHTML = sum;

    var percentage = (sum / (650 /100));
    document.getElementById("percentage").innerHTML = percentage.toFixed(2);

    var result = "PASS"
    if(percentage < 35)
    {
        result = "FAIL";
    }

    document.getElementById("result").innerHTML = result;

    var name = document.getElementById("nameValue").value;
    var seat_number = document.getElementById("seat_numberValue").value;

    document.getElementById("name").innerHTML = name;
    document.getElementById("seat_number").innerHTML = seat_number;

    console.warn(sum);
    return false;
}