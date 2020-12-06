<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Life Farming</title>
    <script src="https://cdn.jsdelivr.net/npm/web3@1.2.7/dist/web3.min.js" integrity="sha256-9rSwSMn4GDjf9FcHmJSvdiKGrk+mNIUmM4ltFDu3MUU=" crossorigin="anonymous"></script>
    <script src="./reader.js"></script>
    <script src="./writer.js"></script>
</head>

<body>
    <h1>Life Farming</h1>
    <p>対応ブラウザ：chrome + metamask</p>
    <p>対応ネットワーク：Rinkebyテストネットワーク(Ethereum)</p>
    <p>F12キーを押してエラーの有無を確認(赤色がエラーです)</p><br><br>
    <div>↓ブロックチェーンから取得したTicketFactoryの動作状態</div>
    <p id="id3">トラブルが起きています</p> 
    <br><br>
    <p>createTicket関数の呼び出し</p>
    <input type="text" name="toBlockChain" id="id100"><input type="button" value="トランザクション送信"
        onclick="myButtonClicked()">

</body>

</html>
