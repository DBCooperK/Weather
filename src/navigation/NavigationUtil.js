export default class NavigationUtil{
   static init(navigation) {
    NavigationUtil.navigation = navigation;
   };

   static goTo(pageName, params) {
    NavigationUtil.navigation.navigate(
      pageName,
      params
    )
   };

   static goBack() {
    NavigationUtil.navigation.goBack();
   }

   static push(pageName) {
    NavigationUtil.navigation.push(
      pageName
    )
   };

   static pop() {
    NavigationUtil.navigation.pop();
   };
};