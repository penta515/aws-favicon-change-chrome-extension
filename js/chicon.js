// FaviconのDOMを取得
var faviDom = $("link[rel$=icon]");
 
// Faviconを書き換えるサービスの一覧
var services = new Array("cloudformation","cloudfront","cloudsearch","cloudtrail","cloudwatch","datapipeline","directconnect","dynamodb","ec2","elasticache","elasticbeanstalk","elasticmapreduce","elastictranscoder","glacier","iam","opsworks","rds","redshift","route53","s3","ses","sns","sqs","storagegateway","swf","vpc");
 
// URLからサービス名を取得
var serviceName = location.href.split("/")[3];
 
// .icoファイルの相対パス
var imgURL = "";


// Faviconを書き換えるサービスか判定
if($.inArray(serviceName, services) >= 0){

	// ローカルの.icoファイルパスを取得
	imgURL = chrome.extension.getURL("images/"+serviceName+".ico");

	// faviconを書き換える
	faviDom.remove();
	$('meta:last')
		.after($(document.createElement('link'))
		.attr('rel', 'shortcut icon')
		.attr('type', 'image/ico')
		.attr('href', imgURL));
}