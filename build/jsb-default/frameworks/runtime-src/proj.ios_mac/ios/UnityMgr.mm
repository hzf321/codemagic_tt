

#import "UnityMgr.h"
#include "cocos2d.h"
//#include "platform/CCApplication.h"
#include "cocos/base/CCScheduler.h"
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"
#import "AppDelegate.h"

@implementation UnityMgr
       
static UnityMgr* _instance = nil;

BOOL myBoolVariable = NO;

+ (UnityMgr*) shareInstance {
   static dispatch_once_t onceToken ;
   dispatch_once(&onceToken, ^{
       _instance = [[self alloc] init] ;
   }) ;
   
   return _instance ;
}

- (void)initsdk:(UIViewController*) view {
   NSLog(@"UnityMgr====== 初始化sdk" );
   self.viewController = view;
   [UnityAds initialize:@"5626240" testMode:NO initializationDelegate:self];
}

+ (void)testlog{
   NSLog(@" - testtest  test------------------------ " );
   
}

// Implement initialization callbacks to handle success or failure:
#pragma mark : UnityAdsInitializationDelegate
- (void)initializationComplete {
    NSLog(@"UnityMgr====== UnityAdsInitializationDelegate initializationComplete" );
    // Pre-load an ad when initialization succeeds, so it is ready to show:
    //[self loadReward];

    [UnityAds load:@"Rewarded_iOS" loadDelegate:[UnityMgr shareInstance]];
}

- (void)initializationFailed:(UnityAdsInitializationError)error withMessage:(NSString *)message {
   NSLog(@"UnityMgr====== UnityAdsInitializationDelegate initializationFailed with message: %@", message );
}

// Implement load callbacks to handle success or failure after initialization:
#pragma mark: UnityAdsLoadDelegate
- (void)unityAdsAdLoaded:(NSString *)placementId {
   NSLog(@"UnityMgr====== UnityAdsLoadDelegate unityAdsAdLoaded %@", placementId);
    myBoolVariable = YES;
    //[self showReward];
}

- (void)unityAdsAdFailedToLoad:(NSString *)placementId
                     withError:(UnityAdsLoadError)error
                   withMessage:(NSString *)message {
    NSLog(@"UnityMgr====== UnityAdsLoadDelegate unityAdsAdFailedToLoad %@", placementId);
}

+ (void)loadReward{
   NSLog(@"UnityMgr====== loadReward" );
        
    if (myBoolVariable) {
        cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            se::ScriptEngine::getInstance()->evalString("window['gamestop']()");
        });
        [UnityMgr showReward];
    }else {
        cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
            se::ScriptEngine::getInstance()->evalString("window['onCloseVdieofailCb']()");
        });
        
        [UnityAds load:@"Rewarded_iOS" loadDelegate:[UnityMgr shareInstance]];
    }
 
}

+ (void)loadInterstitial{
   NSLog(@"UnityMgr====== loadInterstitial" );
   [UnityAds load:@"Interstitial_iOS" loadDelegate:[UnityMgr shareInstance]];
}

+ (void)showReward{
   NSLog(@"UnityMgr====== 观看激励视频 " );
   [UnityAds show:[UnityMgr shareInstance].viewController placementId:@"Rewarded_iOS" showDelegate:[UnityMgr shareInstance]];
}

- (void)showInterstitial{
   NSLog(@"UnityMgr====== 观看插屏 " );
   [UnityAds show:self.viewController placementId:@"Interstitial_iOS" showDelegate:self];
}

#pragma mark: UnityAdsShowDelegate
- (void)unityAdsShowComplete:(NSString *)placementId withFinishState:(UnityAdsShowCompletionState)state {
   NSLog(@"UnityMgr====== UnityAdsShowDelegate unityAdsShowComplete %@ %ld", placementId, state);
   if ([placementId isEqualToString:@"Rewarded_iOS"] && state == kUnityShowCompletionStateCompleted) {
       // Reward the user.
       NSLog(@"UnityMgr====== 视频看完回调" );
       cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
           se::ScriptEngine::getInstance()->evalString("window['gamerecovery']()");
       });
       cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
           se::ScriptEngine::getInstance()->evalString("window['onCloseVdieoFinishCb']()");
       });
       myBoolVariable = NO;
       [UnityAds load:@"Rewarded_iOS" loadDelegate:[UnityMgr shareInstance]];
   }
}

- (void)unityAdsShowFailed: (NSString *)placementId withError: (UnityAdsShowError)error withMessage: (NSString *)message{
    NSLog(@"UnityMgr====== unityAdsShowFailed %@", message );
    //    cocos2d::Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
    //        se::ScriptEngine::getInstance()->evalString("window['onCloseVdieofailCb']()");
    //    });
    myBoolVariable = NO;
}

- (void)unityAdsShowStart: (NSString *)placementId{
   NSLog(@"UnityMgr====== unityAdsShowStart" );
}

- (void)unityAdsShowClick: (NSString *)placementId{
   NSLog(@"UnityMgr====== unityAdsShowClick" );
}

@end

