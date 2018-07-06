var Web3 = require('web3');
var web3 = new Web3();
var contractAddress = "0xc5A49Fbc12b8A40d8Ed6521d97a90c53b9Be9BfD";

//公开售卖账户的私钥
const privateKey = new Buffer('3889a27d7a34dd2b20da5b18925804ac6e7cb3b85e69fc8f1e964bf404269503','hex');

// 设置网上的全节点
// Mainnet--主网
// web3.setProvider(new Web3.providers.HttpProvider("https://mainnet.infura.io/b1bDV0dgCRvUaoSIBLlv"));
// Ropsten--测试网
web3.setProvider(new Web3.providers.HttpProvider("https://ropsten.infura.io/b1bDV0dgCRvUaoSIBLlv"));

// 获取公开售卖账户的交易nonce值
var nonce = web3.eth.getTransactionCount('0x09EE985E10128f401F579fAf5F4531FF5CD6E56e','pending');
console.log(nonce);

/**
 * 获取总量totalsupply
 */
var result = web3.eth.call({
    to: contractAddress,      //合约地址
    data: "0x" + "18160ddd"   //
});
console.log(result);
console.log(web3.toDecimal(result));

/**
 * 获取合约拥有者owner
 */
var result = web3.eth.call({
    to: contractAddress,      //合约地址
    data: "0x" + "893d20e8"   //
});
console.log(result);
console.log(web3.toDecimal(result));

/**
 * 获取总量owner所持有的币的数量
 */
var address = "0x09EE985E10128f401F579fAf5F4531FF5CD6E56e";
var result = web3.eth.call({
    to: contractAddress,      //合约地址
    data: "0x" + "70a08231000000000000000000000000"+address.substring(2)  //
});
console.log(result);
console.log(web3.toDecimal(result));

/**
 * 查看新的合约地址
 */
var result = web3.eth.call({
    to: contractAddress,      //合约地址
    data: "0x" + "26976e3f"//
});
console.log(result);

/**
 * 查看一个合约是否被废弃
 */
var result = web3.eth.call({
    to: contractAddress,      //合约地址
    data: "0x" + "0e136b19"//
});
console.log(result);


/**
 * 合约里面调用合约（交易）
 */
var address = "0xe22B697FEDf3f45521E79AE26bFae607a6Ec153c";
var rawTx ={"nonce":web3.toHex(nonce).toString(),
    "gasPrice":'0x098bca5a00',  //41000000000 == 0.000000041 Ether
    "gasLimit":'0x3d090',       //250000
    "to":contractAddress,
    "value":"0x00",
    "data":"0x"+"bb29998e000000000000000000000000"+address.substring(2)
};

/**
 *
 * 将合约废弃--模块（交易）
 */
var address = "0xc5A49Fbc12b8A40d8Ed6521d97a90c53b9Be9BfD";
var rawTx ={"nonce":web3.toHex(nonce).toString(),
    "gasPrice":'0x098bca5a00',  //41000000000 == 0.000000041 Ether
    "gasLimit":'0x3d090',       //250000
    "to":contractAddress,
    "value":"0x00",
    "data":"0x"+"0753c30c000000000000000000000000"+address.substring(2)
};
/**
 *
 * 设置每次空投的数量--模块（交易）
 */
//设置每次空投的数量,并组成32位字节
var num = 1000;
var num = web3.toHex(num*1e+18).toString();
//出去16进制开头的两个字母“0x”，并构造32字节的参数
num = num.substring(2);
var str = "0";
for(var i=1;i<(64-num.length);i++){
    str = str.concat("0");
}
num = str.concat(num);
//设置每次空投的数量rawTx
var rawTx ={"nonce":web3.toHex(nonce).toString(),
    "gasPrice":'0x098bca5a00',  //41000000000 == 0.000000041 Ether
    "gasLimit":'0x3d090',       //250000
    "to":contractAddress,
    "value":"0x00",
    "data":"0x"+"3abcf319"+num
};

/**
 *
 * 设置空投时间--模块（交易）
 */
//空投的时间,并组成32位字节
var time = 1526029200;  //Unix时间戳
var time = web3.toHex(time).toString();
//出去16进制开头的两个字母“0x”，并构造32字节的参数
time = time.substring(2)
var str = "0";
for(var i=1;i<(64-time.length);i++){
    str = str.concat("0");
}
time = str.concat(time);
//设置空投时间的rawTx
var rawTx ={"nonce":web3.toHex(nonce).toString(),
    "gasPrice":'0x098bca5a00',  //41000000000 == 0.000000041 Ether
    "gasLimit":'0x3d090',       //250000
    "to":contractAddress,
    "value":"0x00",
    "data":"0x"+"ce6f1208"+time
};


/**
 *
 * 设置ico结束时间--模块（交易）
 */
//空投的时间,并组成32位字节
var time = 1526029200;  //Unix时间戳
var time = web3.toHex(time).toString();
//出去16进制开头的两个字母“0x”，并构造32字节的参数
time = time.substring(2)
var str = "0";
for(var i=1;i<(64-time.length);i++){
    str = str.concat("0");
}
time = str.concat(time);
//设置空投时间的rawTx
var rawTx ={"nonce":web3.toHex(nonce).toString(),
    "gasPrice":'0x098bca5a00',  //41000000000 == 0.000000041 Ether
    "gasLimit":'0x3d090',       //250000
    "to":contractAddress,
    "value":"0x00",
    "data":"0x"+"c7dab701"+time
};


/**
 *
 * 设置unlockTime时间--模块（交易）
 */
//空投的时间,并组成32位字节
var time = 1526029200;  //Unix时间戳
var time = web3.toHex(time).toString();
//出去16进制开头的两个字母“0x”，并构造32字节的参数
time = time.substring(2)
var str = "0";
for(var i=1;i<(64-time.length);i++){
    str = str.concat("0");
}
time = str.concat(time);
//设置空投时间的rawTx
var rawTx ={"nonce":web3.toHex(nonce).toString(),
    "gasPrice":'0x098bca5a00',  //41000000000 == 0.000000041 Ether
    "gasLimit":'0x3d090',       //250000
    "to":contractAddress,
    "value":"0x00",
    "data":"0x"+"dace4557"+time
};


/**
 * 改变合约的owner--模块（交易）
 */
var newOwner = "0xe22B697FEDf3f45521E79AE26bFae607a6Ec153c";
var rawTx ={"nonce":web3.toHex(nonce).toString(),
    "gasPrice":'0x098bca5a00',  //41000000000 == 0.000000041 Ether
    "gasLimit":'0x3d090',       //250000
    "to":contractAddress,
    "value":"0x00",
    "data":"0x"+"f2fde38b000000000000000000000000"+newOwner.substring(2)
};



/**
 * 销毁代币--模块（交易）
 */
//设置销毁代币的数量,并组成32位字节
var num = 60000;
var num = web3.toHex(num*1e+18).toString();
//出去16进制开头的两个字母“0x”，并构造32字节的参数
num = num.substring(2);
var str = "0";
for(var i=1;i<(64-num.length);i++){
    str = str.concat("0");
}
num = str.concat(num);
//设置销毁代币的rawTx
var rawTx ={"nonce":web3.toHex(nonce).toString(),
    "gasPrice":'0x098bca5a00',  //41000000000 == 0.000000041 Ether
    "gasLimit":'0x3d090',       //250000
    "to":contractAddress,
    "value":"0x00",
    "data":"0x"+"42966c68"+num
};


/**
 *
 * 提币转账--模块（交易）
 */
// 设置提币转账的数量,并组成32位字节
var num = 10000;
var num = web3.toHex(num*1e+18).toString();
//出去16进制开头的两个字母“0x”，并构造32字节的参数
num = num.substring(2);
var str = "0";
for(var i=1;i<(64-num.length);i++){
    str = str.concat("0");
}
num = str.concat(num);
// 提币转账的地址
var address = "0x0527fC08043Fa08f96e83C760439ac53f2ea25aD";
//设置每次空投的量rawTx
var rawTx ={"nonce":web3.toHex(nonce).toString(),
    "gasPrice":'0x098bca5a00',  //41000000000 == 0.000000041 Ether
    "gasLimit":'0x3d090',       //250000
    "to":contractAddress,
    "value":"0x00",
    "data":"0x"+"a9059cbb000000000000000000000000"+address.substring(2)+num
};

/**
 *
 * 调用approve函数（交易）
 */
// 设置提币转账的数量,并组成32位字节
var num = 10000;
var num = web3.toHex(num*1e+18).toString();
//出去16进制开头的两个字母“0x”，并构造32字节的参数
num = num.substring(2);
var str = "0";
for(var i=1;i<(64-num.length);i++){
    str = str.concat("0");
}
num = str.concat(num);
// 提币转账的地址
var address = "0xA51e56633E526065Ea25DbeeebBC8d8C2200ee6C";
//设置每次空投的量rawTx
var rawTx ={"nonce":web3.toHex(nonce).toString(),
    "gasPrice":'0x098bca5a00',  //41000000000 == 0.000000041 Ether
    "gasLimit":'0x3d090',       //250000
    "to":contractAddress,
    "value":"0x00",
    "data":"0x"+"095ea7b3000000000000000000000000"+address.substring(2)+num
};


/**
 *
 * 调用transferfrom函数（交易）
 */
// 设置提币转账的数量,并组成32位字节
var num = 10000;
var num = web3.toHex(num*1e+18).toString();
//出去16进制开头的两个字母“0x”，并构造32字节的参数
num = num.substring(2)
var str = "0";
for(var i=1;i<(64-num.length);i++){
    str = str.concat("0");
}
num = str.concat(num);
// 提币转账的地址
var addressFrom = "0xb0361E2FC9b553107BB16BeAec9dCB6D7353db87";
var addressTo = "0xc1496a03c66B800Ff0DA698b7fff510893538b90";
//设置每次空投的量rawTx
var rawTx ={"nonce":web3.toHex(nonce).toString(),
    "gasPrice":'0x098bca5a00',  //41000000000 == 0.000000041 Ether
    "gasLimit":'0x3d090',       //250000
    "to":contractAddress,
    "value":"0x00",
    "data":"0x"+"23b872dd000000000000000000000000"+addressFrom.substring(2)+"000000000000000000000000"+addressTo.substring(2)+num
};

/**
 *只要是发送一笔交易就会调用下面的模块
 */
//用私钥进行签名
var Tx = require('ethereumjs-tx');
var tx = new Tx(rawTx);
tx.sign(privateKey);
//发送交易
var serializedTx = tx.serialize();
var trascationHash = web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'));
console.log(trascationHash);
// var trascationHash = web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
//     if (!err) {
//         console.log(hash);
//         //获取blockhash用来判断是不是处于pending的状态
//         var transaction = web3.eth.getTransaction(hash);
//         console.log(transaction.blockHash);
//         //当打包成功，判断status的状态
//         if(transaction.blockHash!=null){
//             if(transaction.blockHash!="0x0000000000000000000000000000000000000000000000000000000000000000"){
//                 var receipt = web3.eth.getTransactionReceipt(hash);
//                 console.log(receipt.status);  //  '0x1' indicates transaction succeeded.
//             }
//         }
//     } else {
//         console.log(err);
//     }});




