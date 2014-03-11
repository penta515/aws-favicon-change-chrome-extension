// FaviconのDOMを取得
var faviDom = $("link[rel$=icon]");
// サービスの一覧
var services = new Array("cloudformation",
						"cloudfront",
						"cloudsearch",
						"cloudtrail",
						"cloudwatch",
						"datapipeline",
						"directconnect",
						"dynamodb",
						"ec2",
						"elasticache",
						"elasticbeanstalk",
						"elasticmapreduce",
						"elastictranscoder",
						"glacier",
						"iam",
						"opsworks",
						"rds",
						"redshift",
						"route53",
						"s3",
						"ses",
						"sns",
						"sqs",
						"storagegateway",
						"swf",
						"vpc");
// URLからサービス名を取得
var serviceName = location.href.split("/")[3];
// .icoファイルのローカルパス
var imgURL = "";


try {
	// 画像をローカルから取得
	if($.inArray(serviceName, services) < 0){
		// .ico が存在しなければ処理を終了する
		throw new Error();
	}else{
		var imgURL = chrome.extension.getURL("icons/"+serviceName+".ico");
	}
}catch(e) {
}

// faviconを書き換える
faviDom.remove();
$('meta:last')
	.after($(document.createElement('link'))
	.attr('rel', 'shortcut icon')
	.attr('type', 'image/ico')
	.attr('href', imgURL));



