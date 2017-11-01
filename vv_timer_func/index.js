module.exports = function (context, myTimer) {
    var timeStamp = new Date().toISOString();

    context.log('Node.js timer trigger function ran!', timeStamp);   
    context.log(GetEnvironmentVariable("AzureWebJobsStorage"));
    context.done();
};

function GetEnvironmentVariable(name)
{
    return name + ": " + process.env[name];
}
