#import <UnityAds/UnityAds.h>
 
@interface UnityMgr : NSObject<UnityAdsInitializationDelegate, UnityAdsLoadDelegate, UnityAdsShowDelegate>
 
@property (assign, nonatomic) BOOL testMode;

+ (UnityMgr*) shareInstance;
@property(nonatomic, strong) UIViewController* viewController;

- (void)initsdk:(UIViewController*) view;
+ (void)showReward;
- (void)showInterstitial;

+ (void)loadReward;
+ (void)loadInterstitial;

@end

