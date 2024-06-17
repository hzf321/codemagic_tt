platform :ios, '12.0'
project 'build/jsb-default/frameworks/runtime-src/proj.ios_mac/hello_world.xcodeproj'
target 'hello_world-mobile' do
  #  use_frameworks!
 
  # Force pods to match minimum iOS version for React Native
  # Fixes build issue on Xcode Cloud where some pods
  # Use iOS 12 calls despite being set as iOS 11
  def __apply_Xcode_14_3_RC_post_install_workaround(installer)
    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |config|
        current_target = config.build_settings['IPHONEOS_DEPLOYMENT_TARGET']
        minimum_target = min_ios_version_supported
        if current_target.to_f < minimum_target.to_f
          config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = minimum_target
        end
      end
    end
  end


  __apply_Xcode_14_3_RC_post_install_workaround(installer) # Add this line
end
